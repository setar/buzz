import * as React from "react";
import { openUrl } from "@tauri-apps/plugin-opener";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  useAcpAuthMethodsQuery,
  useAcpRuntimesQuery,
  useConnectAcpRuntimeMutation,
  useInstallAcpRuntimeMutation,
} from "@/features/agents/hooks";
import { useInstallOutputLine } from "@/features/agents/lib/useInstallOutputLine";
import { describeResolvedCommand } from "@/features/agents/ui/agentUi";
import type { AcpAuthMethod, AcpRuntimeCatalogEntry } from "@/shared/api/types";
import { getInstallErrorMessage } from "@/shared/lib/installError";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { FlappingBee } from "@/shared/ui/buzz-logo/FlappingBee";
import { Spinner } from "@/shared/ui/spinner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";
import {
  getReadyOnboardingRuntimes,
  getVisibleOnboardingRuntimes,
  runtimeIsReadyForOnboarding,
} from "./onboardingRuntimeSelection";
import { ONBOARDING_PRIMARY_CTA_CLASS } from "./OnboardingChrome";
import { RuntimeErrorTooltip } from "./RuntimeErrorTooltip";
import { OnboardingFooter } from "./OnboardingFooter";
import { getRuntimeDisplayLabel, RuntimeIcon } from "./RuntimeIcon";
import {
  type OnboardingTransitionDirection,
  OnboardingSlideTransition,
} from "./OnboardingSlideTransition";
import type { SetupStepActions, SetupStepState } from "./types";

type SetupStepProps = {
  actions: SetupStepActions;
  direction: OnboardingTransitionDirection;
  onReadyRuntimeIdsChange: (runtimeIds: readonly string[]) => void;
};

type SetupStepContentProps = SetupStepProps & {
  state: SetupStepState;
};

type InstallResultState = {
  error: string | null;
  success: boolean;
};

type InstallResultsState = Record<string, InstallResultState>;

function useSetupStepState(): SetupStepState {
  const runtimesQuery = useAcpRuntimesQuery();
  const items = runtimesQuery.data ?? [];
  const isChecking = runtimesQuery.isLoading;
  const errorMessage =
    runtimesQuery.error instanceof Error ? runtimesQuery.error.message : null;

  return {
    runtimeProviders: {
      errorMessage,
      isChecking,
      items,
    },
  };
}

function RuntimeReadinessIndicator({
  runtime,
  ready,
}: {
  runtime: AcpRuntimeCatalogEntry;
  ready: boolean;
}) {
  // Checkmark temporarily hidden; flip to true to restore it.
  const showReadinessCheckmark = false;
  if (!ready || !showReadinessCheckmark) return null;

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-8 top-8 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--buzz-welcome-chartreuse)] bg-[var(--buzz-welcome-chartreuse)]"
      data-testid={`onboarding-runtime-check-${runtime.id}`}
    >
      <Check
        className="h-4 w-4 text-foreground"
        data-testid={`onboarding-runtime-checkmark-${runtime.id}`}
        strokeWidth={3}
      />
    </span>
  );
}

function RuntimeStatus({
  installError,
  isInstalling,
  onInstall,
  runtime,
}: {
  installError: string | null;
  isInstalling: boolean;
  onInstall: () => void;
  runtime: AcpRuntimeCatalogEntry;
}) {
  const { t } = useTranslation();
  const methodsQuery = useAcpAuthMethodsQuery(runtime.id, {
    enabled:
      runtime.availability === "available" &&
      runtime.authStatus.status === "logged_out",
  });
  const connectMutation = useConnectAcpRuntimeMutation();
  const runtimesQuery = useAcpRuntimesQuery();
  const [isWaitingForSignIn, setIsWaitingForSignIn] = React.useState(false);
  const [didSignInCheckTimeOut, setDidSignInCheckTimeOut] =
    React.useState(false);
  const isReady = runtimeIsReadyForOnboarding(runtime);

  React.useEffect(() => {
    if (!isWaitingForSignIn || !isReady) return;
    setIsWaitingForSignIn(false);
    setDidSignInCheckTimeOut(false);
  }, [isReady, isWaitingForSignIn]);

  React.useEffect(() => {
    if (!isWaitingForSignIn) return;

    const interval = window.setInterval(() => {
      void runtimesQuery.refetch();
    }, 2_000);
    const timeout = window.setTimeout(() => {
      setIsWaitingForSignIn(false);
      setDidSignInCheckTimeOut(true);
    }, 120_000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [isWaitingForSignIn, runtimesQuery.refetch]);
  const authMethods = getOnboardingAuthMethods(
    runtime,
    methodsQuery.data?.methods ?? [],
  );
  const authMethod = authMethods[0] ?? null;
  const shouldSignIn =
    runtime.availability === "available" &&
    runtime.authStatus.status === "logged_out";

  if (shouldSignIn) {
    return (
      <div className="flex flex-col items-center gap-1.5">
        <Button
          aria-label={t("onboarding.setup.sign_in_aria", { label: runtime.label })}
          className="buzz-onboarding-runtime-setup h-5 rounded-full bg-[var(--buzz-welcome-chartreuse)]/30 px-2.5 font-mono !text-badge font-normal uppercase text-foreground hover:bg-[var(--buzz-welcome-chartreuse)]/40"
          data-testid={`onboarding-runtime-instructions-${runtime.id}`}
          onClick={() => {
            if (didSignInCheckTimeOut) {
              setDidSignInCheckTimeOut(false);
              setIsWaitingForSignIn(true);
              void runtimesQuery.refetch();
              return;
            }
            if (!authMethod) {
              void methodsQuery.refetch();
              return;
            }
            connectMutation.mutate(
              {
                methodId: authMethod.id,
                runtimeId: runtime.id,
              },
              {
                onSuccess: () => setIsWaitingForSignIn(true),
              },
            );
          }}
          type="button"
          variant="ghost"
        >
          {isWaitingForSignIn
            ? t("onboarding.setup.checking")
            : didSignInCheckTimeOut
              ? t("onboarding.setup.check_again")
              : t("onboarding.setup.sign_in")}
        </Button>
        {methodsQuery.error instanceof Error ? (
          <RuntimeErrorTooltip
            className="absolute inset-x-3 bottom-2 truncate text-xs leading-4 text-destructive"
            detail={t("onboarding.setup.signin_unavailable_detail")}
            label={t("onboarding.setup.signin_unavailable_label")}
          />
        ) : null}
        {connectMutation.error instanceof Error ? (
          <RuntimeErrorTooltip
            className="absolute inset-x-3 bottom-2 truncate text-xs leading-4 text-destructive"
            detail={t("onboarding.setup.signin_failed_detail")}
            label={t("onboarding.setup.signin_failed_label")}
          />
        ) : null}
      </div>
    );
  }

  if (isInstalling) {
    return (
      <div
        aria-label={t("onboarding.setup.installing_aria", { label: runtime.label })}
        className="flex h-5 items-center gap-2 rounded-full bg-white/60 px-2.5 font-mono text-badge font-normal uppercase text-foreground"
        role="status"
      >
        <Spinner className="h-3 w-3 border-2 text-foreground" />
        {t("onboarding.setup.installing")}
      </div>
    );
  }

  if (runtimeIsReadyForOnboarding(runtime)) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className="inline-flex h-5 cursor-default items-center rounded-full bg-[#EBEFEF] px-2.5 font-mono text-badge font-normal uppercase text-foreground"
            data-testid={`onboarding-runtime-ready-${runtime.id}`}
          >
            {t("onboarding.setup.ready")}
          </span>
        </TooltipTrigger>
        <TooltipContent
          className="max-w-80 bg-black text-left text-xs text-white shadow-sm"
          side="top"
        >
          <RuntimeDetails runtime={runtime} />
        </TooltipContent>
      </Tooltip>
    );
  }

  if (
    runtime.availability === "available" &&
    runtime.authStatus.status === "unknown"
  ) {
    return (
      <Button
        aria-label={t("onboarding.setup.check_again_aria", { label: runtime.label })}
        className="buzz-onboarding-runtime-setup h-5 rounded-full bg-[var(--buzz-welcome-chartreuse)]/30 px-2.5 font-mono !text-badge font-normal uppercase text-foreground hover:bg-[var(--buzz-welcome-chartreuse)]/40"
        disabled={runtimesQuery.isFetching}
        onClick={() => void runtimesQuery.refetch()}
        type="button"
        variant="ghost"
      >
        {runtimesQuery.isFetching ? t("onboarding.setup.checking") : t("onboarding.setup.check_again")}
      </Button>
    );
  }

  if (runtime.canAutoInstall) {
    return (
      <Button
        aria-label={installError
          ? t("onboarding.setup.retry_install_aria", { label: runtime.label })
          : t("onboarding.setup.install_aria", { label: runtime.label })}
        className="buzz-onboarding-runtime-setup h-5 rounded-full bg-[var(--buzz-welcome-chartreuse)]/30 px-2.5 font-mono !text-badge font-normal uppercase text-foreground hover:bg-[var(--buzz-welcome-chartreuse)]/40"
        data-testid={`onboarding-runtime-install-${runtime.id}`}
        onClick={onInstall}
        type="button"
        variant="ghost"
      >
        {installError ? t("onboarding.setup.retry_install") : t("onboarding.setup.install")}
      </Button>
    );
  }

  return (
    <Button
      aria-label={t("onboarding.setup.instructions_aria", { label: runtime.label })}
      className="buzz-onboarding-runtime-setup h-5 rounded-full bg-[var(--buzz-welcome-chartreuse)]/30 px-2.5 font-mono !text-badge font-normal uppercase text-foreground hover:bg-[var(--buzz-welcome-chartreuse)]/40"
      data-testid={`onboarding-runtime-instructions-${runtime.id}`}
      onClick={() => void openUrl(runtime.installInstructionsUrl)}
      type="button"
      variant="ghost"
    >
      {t("onboarding.setup.install")}
    </Button>
  );
}

function RuntimeDetails({ runtime }: { runtime: AcpRuntimeCatalogEntry }) {
  const { t } = useTranslation();
  if (
    runtime.availability === "available" &&
    runtime.command &&
    runtime.binaryPath
  ) {
    const description = describeResolvedCommand(
      runtime.command,
      runtime.binaryPath,
    );
    return (
      <>
        <p className="text-xs leading-4 text-white">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </p>
        {runtime.defaultArgs.length > 0 ? (
          <p className="mt-1 text-xs leading-4 text-white">
            Args:{" "}
            <code className="font-mono">{runtime.defaultArgs.join(", ")}</code>
          </p>
        ) : null}
      </>
    );
  }

  if (runtime.availability === "adapter_missing") {
    return (
      <>
        <p className="text-xs leading-4 text-white">
          {t("onboarding.setup.detail_adapter_missing")}
        </p>
        <p className="mt-1 text-xs leading-4 text-white">
          {runtime.installHint}
        </p>
      </>
    );
  }

  if (runtime.availability === "adapter_outdated") {
    return (
      <>
        <p className="text-xs leading-4 text-white">
          {t("onboarding.setup.detail_adapter_outdated")}
        </p>
        <p className="mt-1 text-xs leading-4 text-white">
          This updates the machine-global{" "}
          <code className="rounded bg-white/10 px-0.5 font-mono text-xs text-white">
            codex-acp
          </code>{" "}
          adapter. Older Buzz releases using the legacy adapter contract may
          lose community access until{" "}
          <code className="rounded bg-white/10 px-0.5 font-mono text-xs text-white">
            @zed-industries/codex-acp@0.16.0
          </code>{" "}
          is restored.
        </p>
        <p className="mt-1 text-xs leading-4 text-white">
          {runtime.installHint}
        </p>
      </>
    );
  }

  if (runtime.availability === "cli_missing") {
    return (
      <>
        <p className="text-xs leading-4 text-white">
          {t("onboarding.setup.detail_cli_missing")}
        </p>
        <p className="mt-1 text-xs leading-4 text-white">
          {runtime.installHint}
        </p>
      </>
    );
  }

  return (
    <>
      <p className="text-xs leading-4 text-white">{t("onboarding.setup.detail_not_installed")}</p>
      <p className="mt-1 text-xs leading-4 text-white">{runtime.installHint}</p>
    </>
  );
}

function runtimeDetailText(
  runtime: AcpRuntimeCatalogEntry,
  t: (key: string) => string,
): string {
  if (
    runtime.availability === "available" &&
    runtime.command &&
    runtime.binaryPath
  ) {
    const description = describeResolvedCommand(
      runtime.command,
      runtime.binaryPath,
    );
    return description.charAt(0).toUpperCase() + description.slice(1);
  }
  if (runtime.availability === "adapter_missing") {
    return t("onboarding.setup.detail_adapter_missing");
  }
  if (runtime.availability === "adapter_outdated") {
    return t("onboarding.setup.detail_adapter_outdated");
  }
  if (
    runtime.availability === "cli_missing" ||
    runtime.availability === "not_installed"
  ) {
    return t("onboarding.setup.detail_cli_not_detected");
  }
  return "";
}

function isSupportedOnboardingAuthMethod(
  runtime: AcpRuntimeCatalogEntry,
  method: AcpAuthMethod,
) {
  if (runtime.id !== "codex") return true;
  return !/api[-_ ]?key/i.test(`${method.id} ${method.name}`);
}

function isPreferredClaudeAuthMethod(method: AcpAuthMethod) {
  const haystack = [
    method.id,
    method.name,
    method.description ?? "",
    method.command.join(" "),
    method.args.join(" "),
  ]
    .join(" ")
    .toLowerCase();
  return (
    haystack.includes("claudeai") ||
    haystack.includes("claude ai") ||
    haystack.includes("claude.ai") ||
    haystack.includes("subscription")
  );
}

function getOnboardingAuthMethods(
  runtime: AcpRuntimeCatalogEntry,
  methods: AcpAuthMethod[],
) {
  const supported = methods.filter((method) =>
    isSupportedOnboardingAuthMethod(runtime, method),
  );

  if (runtime.id === "claude") {
    const preferred =
      supported.find(isPreferredClaudeAuthMethod) ?? supported[0];
    return preferred ? [preferred] : [];
  }

  if (runtime.id === "codex") {
    return supported.slice(0, 1);
  }

  return supported;
}

function RuntimeAuthError({ runtime }: { runtime: AcpRuntimeCatalogEntry }) {
  const { t } = useTranslation();
  if (runtime.authStatus.status === "config_invalid") {
    return (
      <RuntimeErrorTooltip
        className="absolute inset-x-3 bottom-2 truncate text-xs leading-4 text-destructive"
        detail={t("onboarding.setup.config_invalid_detail")}
        label={t("onboarding.setup.config_invalid_label")}
      />
    );
  }
  if (
    runtime.availability === "available" &&
    runtime.authStatus.status === "unknown"
  ) {
    return (
      <RuntimeErrorTooltip
        className="absolute inset-x-3 bottom-2 truncate text-xs leading-4 text-destructive"
        detail={t("onboarding.setup.status_unavailable_detail")}
        label={t("onboarding.setup.status_unavailable_label")}
      />
    );
  }
  return null;
}

function RuntimeCard({
  installResults,
  onInstallResultsChange,
  runtime,
}: {
  installResults: InstallResultsState;
  onInstallResultsChange: React.Dispatch<
    React.SetStateAction<InstallResultsState>
  >;
  runtime: AcpRuntimeCatalogEntry;
}) {
  // Each card owns its own mutation instance so concurrent installs on
  // different cards each track their own isPending state and callbacks
  // independently (react-query v5 per-mutate callbacks only fire for the
  // latest mutate() call on a shared instance, silently dropping earlier ones).
  const { t } = useTranslation();
  const installMutation = useInstallAcpRuntimeMutation();
  const installError = installResults[runtime.id]?.error ?? null;
  const isInstalling = installMutation.isPending;
  const installOutputLine = useInstallOutputLine(runtime.id, isInstalling);
  const isAvailable = runtime.availability === "available";
  const isReady = runtimeIsReadyForOnboarding(runtime);

  function handleInstall() {
    onInstallResultsChange((current) => ({
      ...current,
      [runtime.id]: { error: null, success: false },
    }));

    installMutation.mutate(runtime.id, {
      onSuccess: (result) => {
        onInstallResultsChange((current) => ({
          ...current,
          [runtime.id]: result.success
            ? { error: null, success: true }
            : {
                error: getInstallErrorMessage(result),
                success: false,
              },
        }));
      },
      onError: (error) => {
        onInstallResultsChange((current) => ({
          ...current,
          [runtime.id]: {
            error: error instanceof Error ? error.message : t("onboarding.setup.error_install_fallback"),
            success: false,
          },
        }));
      },
    });
  }

  return (
    <Card
      className={cn(
        "group h-[224px] w-full max-w-[288px] select-none items-center px-3 py-1.5 text-center",
        installError && "ring-1 ring-destructive/40",
        isReady && "brightness-[0.98]",
      )}
      data-ready={isReady ? "true" : "false"}
      data-testid={`onboarding-runtime-${runtime.id}`}
      variant="textured"
    >
      <RuntimeReadinessIndicator ready={isReady} runtime={runtime} />

      <div className="flex min-w-0 flex-col items-center gap-2.5">
        <div className="flex min-w-0 items-center justify-center gap-3">
          <RuntimeIcon className="h-7 w-7" runtime={runtime} />
          <h2 className="truncate text-sm font-normal leading-5 text-foreground">
            {getRuntimeDisplayLabel(runtime)}
          </h2>
        </div>
        <RuntimeStatus
          installError={installError}
          isInstalling={isInstalling}
          onInstall={handleInstall}
          runtime={runtime}
        />
        {isInstalling && installOutputLine ? (
          // Takes the detail text's slot rather than adding a row: the card is
          // fixed-height, and during an install the live line is the more
          // useful of the two.
          <p
            aria-live="polite"
            className="max-w-[13rem] truncate font-mono text-2xs leading-4 text-muted-foreground"
            data-testid={`onboarding-runtime-install-output-${runtime.id}`}
          >
            {installOutputLine}
          </p>
        ) : !isAvailable && runtimeDetailText(runtime, t) ? (
          <p
            aria-hidden={installError ? "true" : undefined}
            className={cn(
              "max-w-[13rem] text-2xs leading-4 text-muted-foreground",
              installError && "invisible",
            )}
          >
            {runtimeDetailText(runtime, t)}
          </p>
        ) : null}
      </div>
      {installError ? (
        <RuntimeErrorTooltip
          className="absolute inset-x-3 bottom-2 flex min-w-0 items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap text-xs leading-4 text-destructive"
          detail={installError}
          label={t("onboarding.setup.installation_failed_label")}
          showIcon
          testId={`onboarding-runtime-error-${runtime.id}`}
        />
      ) : (
        <RuntimeAuthError runtime={runtime} />
      )}
    </Card>
  );
}

function RuntimeProvidersLoadingState() {
  const { t } = useTranslation();
  return (
    <div
      aria-live="polite"
      className="flex min-h-[260px] w-full items-center justify-center"
      data-testid="onboarding-runtime-loading"
      role="status"
    >
      <div className="flex flex-col items-center text-foreground opacity-35">
        <FlappingBee className="h-auto w-16" />
        <p className="mt-5 text-2xl font-normal leading-8">
          {t("onboarding.setup.finding_providers")}
        </p>
      </div>
    </div>
  );
}

function RuntimeProvidersSection({
  installResults,
  onInstallResultsChange,
  runtimeProviders,
}: {
  installResults: InstallResultsState;
  onInstallResultsChange: React.Dispatch<
    React.SetStateAction<InstallResultsState>
  >;
  runtimeProviders: SetupStepState["runtimeProviders"];
}) {
  const { t } = useTranslation();
  const { errorMessage, isChecking, items } = runtimeProviders;
  const orderedItems = getVisibleOnboardingRuntimes(items);

  return (
    <section className="flex min-h-full w-full flex-col items-center">
      <div className="w-full max-w-[820px] text-center">
        <h1 className="text-title font-normal text-foreground">
          {t("onboarding.setup.title")}
        </h1>
        <p className="mx-auto mt-3 max-w-[760px] text-sm leading-6 text-foreground/90">
          {t("onboarding.setup.description")}
        </p>
      </div>

      <div className="flex w-full flex-1 flex-col items-center justify-center gap-8 py-10">
        {orderedItems.length > 0 ? (
          <div className="grid min-w-0 w-full max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {orderedItems.map((runtime) => (
              <RuntimeCard
                installResults={installResults}
                key={runtime.id}
                onInstallResultsChange={onInstallResultsChange}
                runtime={runtime}
              />
            ))}
          </div>
        ) : isChecking ? (
          <RuntimeProvidersLoadingState />
        ) : errorMessage ? null : (
          <p
            className="max-w-[560px] rounded-2xl bg-white/70 px-6 py-6 text-sm text-muted-foreground"
            data-testid="onboarding-acp-empty"
          >
            {t("onboarding.setup.no_harnesses")}
          </p>
        )}

        {errorMessage ? (
          <p className="max-w-[560px] rounded-2xl bg-destructive/10 px-6 py-3 text-sm text-destructive">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function SetupStepContent({
  actions,
  direction,
  onReadyRuntimeIdsChange,
  state,
}: SetupStepContentProps) {
  const { t } = useTranslation();
  const { runtimeProviders } = state;
  const [installResults, setInstallResults] =
    React.useState<InstallResultsState>({});
  const readyRuntimeIds = React.useMemo(
    () =>
      getReadyOnboardingRuntimes(runtimeProviders.items).map(
        (runtime) => runtime.id,
      ),
    [runtimeProviders.items],
  );
  const readyRuntimeIdsKey = readyRuntimeIds.join("\0");
  // The key prevents catalog object refreshes from creating an effect loop
  // when the detected ready IDs have not changed.
  // biome-ignore lint/correctness/useExhaustiveDependencies: keyed by ID content
  React.useEffect(() => {
    onReadyRuntimeIdsChange(readyRuntimeIds);
  }, [onReadyRuntimeIdsChange, readyRuntimeIdsKey]);

  return (
    <OnboardingSlideTransition
      className="flex min-h-full w-full flex-col items-center"
      data-testid="onboarding-page-2"
      direction={direction}
      transitionKey={`setup-${direction}`}
    >
      <RuntimeProvidersSection
        installResults={installResults}
        onInstallResultsChange={setInstallResults}
        runtimeProviders={runtimeProviders}
      />

      <OnboardingFooter>
        {/* Relative row keeps the primary CTA truly centered while Skip
            hangs off its right edge without shifting the center. */}
        <div className="relative flex items-center justify-center">
          <Button
            className={`${ONBOARDING_PRIMARY_CTA_CLASS} text-sm`}
            data-testid="onboarding-setup-next"
            disabled={readyRuntimeIds.length === 0}
            onClick={() => actions.next(readyRuntimeIds)}
            type="button"
          >
            {t("common.next")}
          </Button>
          <Button
            className="absolute left-full ml-3 h-9 animate-in whitespace-nowrap rounded-full px-6 text-sm fade-in fill-mode-backwards [animation-delay:1000ms] animation-duration-[500ms] hover:bg-foreground/10 motion-reduce:animate-none"
            data-testid="onboarding-setup-skip"
            onClick={() => actions.next([])}
            type="button"
            variant="ghost"
          >
            {t("onboarding.setup.skip_for_now")}
          </Button>
        </div>

        <Button
          className="h-9 rounded-full bg-foreground/10 px-6 text-sm hover:bg-foreground/15"
          data-testid="onboarding-back"
          onClick={actions.back}
          type="button"
          variant="ghost"
        >
          {t("common.back")}
        </Button>

        <p className="text-xs text-foreground/50">
          {t("onboarding.setup.more_harnesses_hint")}{" "}
          {actions.navigateToAgentSettings ? (
            <button
              className="text-foreground/70 underline underline-offset-2 hover:text-foreground"
              data-testid="onboarding-setup-more-harnesses"
              onClick={actions.navigateToAgentSettings}
              type="button"
            >
              {t("onboarding.setup.settings_agents")}
            </button>
          ) : (
            <span className="text-foreground/70">{t("onboarding.setup.settings_agents")}</span>
          )}{" "}
          {t("onboarding.setup.after_setup")}
        </p>
      </OnboardingFooter>
    </OnboardingSlideTransition>
  );
}

export function SetupStep({
  actions,
  direction,
  onReadyRuntimeIdsChange,
}: SetupStepProps) {
  const state = useSetupStepState();

  return (
    <SetupStepContent
      actions={actions}
      direction={direction}
      onReadyRuntimeIdsChange={onReadyRuntimeIdsChange}
      state={state}
    />
  );
}
