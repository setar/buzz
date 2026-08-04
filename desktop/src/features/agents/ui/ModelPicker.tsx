import { ChevronDown } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

import { Spinner } from "@/shared/ui/spinner";

import type { AgentModelsResponse, ManagedAgent } from "@/shared/api/types";
import { getAgentModels, updateManagedAgent } from "@/shared/api/tauri";
import { switchManagedAgentModel } from "@/shared/api/agentControl";
import { awaitLiveSwitchOutcome } from "@/features/agents/lib/liveSwitchOutcome";
import { subscribeControlResults } from "@/features/agents/observerRelayStore";
import { useActiveAgentTurns } from "@/features/agents/activeAgentTurnsStore";
import {
  useAgentConfigSurface,
  managedAgentsQueryKey,
} from "@/features/agents/hooks";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

export function ModelPicker({
  agent,
  onModelChanged,
}: {
  agent: ManagedAgent;
  onModelChanged?: () => void;
}) {
  const [modelsData, setModelsData] =
    React.useState<AgentModelsResponse | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [saving, setSaving] = React.useState(false);
  const [needsRestart, setNeedsRestart] = React.useState(false);
  const [hasRequestedModels, setHasRequestedModels] = React.useState(false);

  const { t } = useTranslation();
  const { data: configSurface } = useAgentConfigSurface(agent.pubkey);
  const queryClient = useQueryClient();

  const isRunning = agent.status === "running" || agent.status === "deployed";
  const activeTurns = useActiveAgentTurns(agent.pubkey);
  // A live switch rides the agent's running session(s) instead of persisting a
  // new default. It applies only to a persona-linked running agent with at
  // least one active turn — those are the channels the desktop can name in the
  // `switch_model` frame (the ModelPicker has no other channel context). The
  // harness then routes each named channel itself: a channel still mid-turn
  // cancel-switch-requeues; one that finished between send and receipt takes
  // the idle invalidate-and-reapply path. A persona-linked agent that is
  // running but wholly idle has no nameable channel here, so it falls through
  // to persisting the default (the only reachable lever from this surface).
  const isLiveSwitch =
    agent.personaId !== null && isRunning && activeTurns.length > 0;

  const fetchModels = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAgentModels(agent.pubkey);
      setModelsData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, [agent.pubkey]);

  const handleOpenChange = React.useCallback(
    (open: boolean) => {
      if (!open || loading || modelsData) {
        return;
      }

      setHasRequestedModels(true);
      void fetchModels();
    },
    [fetchModels, loading, modelsData],
  );

  const currentValue = agent.model ?? modelsData?.agentDefaultModel ?? "";
  const displayLabel =
    agent.model ??
    (modelsData?.agentDefaultModel
      ? `${modelsData.agentDefaultModel}${t("agents.suffix_default")}`
      : hasRequestedModels && loading
        ? t("common.loading")
        : t("agents.auto"));

  // Provenance label shown only for post-spawn agents where the model origin
  // is known from the config surface and the source is not a user-explicit
  // Buzz setting (which is already self-evident from the picker state).
  const modelOriginLabel = React.useMemo(() => {
    const origin = configSurface?.normalized.model?.origin;
    if (!origin || origin === "buzzExplicit") return null;
    const labels: Record<string, string> = {
      acpNativeRead: t("agents.origin_from_acp"),
      acpConfigOption: t("agents.origin_from_acp_config"),
      envVar: t("agents.origin_from_env"),
      configFile: t("agents.origin_from_config_file"),
      personaDefault: t("agents.origin_template_default"),
      runtimeOverride: t("agents.origin_live_override"),
    };
    return labels[origin] ?? null;
  }, [configSurface, t]);

  // Send a live `switch_model` frame to each channel the agent is working in
  // and wait for the harness to acknowledge. Any single `unsupported_model`
  // result rejects the whole pick immediately; all other statuses must arrive
  // from every channel before resolving success.
  const sendLiveSwitch = React.useCallback(
    (modelId: string) => {
      const channelIds = activeTurns.map((turn) => turn.channelId);
      return awaitLiveSwitchOutcome({
        channelCount: channelIds.length,
        modelId,
        subscribe: (listener) =>
          subscribeControlResults(agent.pubkey, listener),
        sendSwitches: async () => {
          await Promise.all(
            channelIds.map((channelId) =>
              switchManagedAgentModel(agent.pubkey, channelId, modelId),
            ),
          );
        },
        // No reply in time: treat as sent. The override still rides the
        // requeued/next session; we just can't confirm synchronously.
        scheduleTimeout: (onTimeout) => {
          const timeout = window.setTimeout(onTimeout, 8_000);
          return () => window.clearTimeout(timeout);
        },
      });
    },
    [activeTurns, agent.pubkey],
  );

  const handleModelChange = async (modelId: string) => {
    setSaving(true);
    setError(null);
    try {
      if (isLiveSwitch) {
        const outcome = await sendLiveSwitch(modelId);
        if (outcome === "unsupported") {
          toast.error(t("agents.model_not_available"));
          return;
        }
        toast.success(t("agents.model_switched_session"));
        onModelChanged?.();
        return;
      }

      // Non-live path (idle, stopped, or non-persona): persist the default.
      await updateManagedAgent({
        pubkey: agent.pubkey,
        model: modelId === modelsData?.agentDefaultModel ? null : modelId,
      });
      void queryClient.invalidateQueries({ queryKey: managedAgentsQueryKey });
      if (isRunning) {
        setNeedsRestart(true);
      }
      onModelChanged?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <span className="inline-flex items-center gap-1.5">
      <DropdownMenu modal={false} onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger asChild>
          <Button
            className="h-7 max-w-full justify-start gap-1.5 rounded-full border border-border/50 bg-muted/45 px-2.5 text-xs font-medium text-foreground shadow-none hover:bg-muted/70"
            disabled={saving}
            size="sm"
            type="button"
            variant="ghost"
          >
            <span className="truncate">{displayLabel}</span>
            {modelOriginLabel ? (
              <span className="shrink-0 text-2xs text-muted-foreground/70">
                ({modelOriginLabel})
              </span>
            ) : null}
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="max-h-64 min-w-48 overflow-y-auto"
          onCloseAutoFocus={(event) => event.preventDefault()}
        >
          {loading ? (
            <div className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
              <Spinner className="h-4 w-4 border-2" />
              {t("agents.loading_models")}
            </div>
          ) : error ? (
            <div className="space-y-2 px-3 py-2 text-sm">
              <p className="text-destructive">
                {t("agents.failed_to_load_models")}
              </p>
              <button
                className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
                onClick={() => {
                  setHasRequestedModels(true);
                  void fetchModels();
                }}
                type="button"
              >
                {t("community.retry")}
              </button>
            </div>
          ) : !modelsData ? (
            <div className="px-3 py-2 text-sm text-muted-foreground">
              {t("agents.open_to_load_models")}
            </div>
          ) : !modelsData.supportsSwitching ? (
            <div className="px-3 py-2 text-sm text-muted-foreground">
              {agent.model ? (
                <>
                  <p className="font-medium text-foreground">{agent.model}</p>
                  <p className="mt-0.5 text-xs">
                    {t("agents.runtime_no_model_switching")}
                  </p>
                </>
              ) : (
                t("agents.uses_runtime_default_model")
              )}
            </div>
          ) : (
            <DropdownMenuRadioGroup
              onValueChange={handleModelChange}
              value={currentValue}
            >
              {modelsData.models.map((model) => (
                <DropdownMenuRadioItem key={model.id} value={model.id}>
                  {model.name ?? model.id}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      {needsRestart ? (
        <span className="text-2xs text-warning">
          {t("agents.restart_to_apply")}
        </span>
      ) : null}
    </span>
  );
}
