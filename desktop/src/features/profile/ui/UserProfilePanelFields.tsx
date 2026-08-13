import { useTranslation } from "react-i18next";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowUpRight,
  Cpu,
  Ear,
  Server,
  Terminal,
  UserRound,
} from "lucide-react";
import * as React from "react";
import { AgentStatusBadge } from "@/features/agents/ui/AgentStatusBadge";
import { truncatePubkey } from "@/shared/lib/pubkey";
import {
  HoverCopyIndicator,
  useCopyFeedback,
} from "@/shared/ui/HoverCopyIndicator";
import { PubKey } from "@/shared/ui/PubKey";
import { PanelSectionGroup } from "@/shared/ui/PanelSectionGroup";
import type {
  AgentPersona,
  ManagedAgent,
  Profile,
  RelayAgent,
} from "@/shared/api/types";

function buildRuntimeLabels(
  t: (key: string) => string,
): Record<string, string> {
  return {
    goose: "Goose",
    "claude-code": t("profile.claude_code"),
    "codex-acp": "Codex",
    aider: "Aider",
  };
}

function runtimeLabel(command: string, t: (key: string) => string): string {
  return buildRuntimeLabels(t)[command] ?? command;
}

export type ProfileField = {
  copyValue?: string;
  displayValue: string;
  displayNode?: React.ReactNode;
  icon?: LucideIcon;
  label: string;
  onClick?: () => void;
  testId?: string;
  trailingNode?: React.ReactNode;
};

function buildAgentInfoLabels(t: (key: string) => string) {
  return new Set([
    t("profile.public_key"),
    t("profile.managed_by"),
    "NIP-05",
    t("profile.agent_type"),
    "Capabilities",
    "Backend",
  ]);
}
function buildAgentSettingsLabels(t: (key: string) => string) {
  return new Set([
    "Runtime",
    t("profile.agent_profile"),
    t("profile.who_can_send"),
    t("profile.acp_command"),
    t("profile.mcp_command"),
    t("profile.start_on_launch"),
  ]);
}
function buildDiagnosticsLabels(t: (key: string) => string) {
  return new Set(["Status", t("profile.last_error")]);
}

export function bucketProfileFields(
  fields: ProfileField[],
  t: (key: string) => string,
) {
  return {
    agentInfoFields: fields.filter((field) =>
      buildAgentInfoLabels(t).has(field.label),
    ),
    agentSettingsFields: fields.filter((field) =>
      buildAgentSettingsLabels(t).has(field.label),
    ),
    diagnosticsFields: fields.filter((field) =>
      buildDiagnosticsLabels(t).has(field.label),
    ),
  };
}

export function useProfileFieldBuckets({
  isBot,
  isOwner,
  managedAgent,
  onOpenProfile,
  ownerDisplayName,
  ownerHandle,
  ownerProfilePubkey,
  ownerPubkey,
  persona,
  presenceLoaded,
  presenceStatus,
  profile,
  pubkey,
  relayAgent,
}: {
  isBot: boolean;
  isOwner: boolean | undefined;
  managedAgent: ManagedAgent | undefined;
  onOpenProfile?: (pubkey: string) => void;
  ownerDisplayName: string | null;
  ownerHandle: string | null;
  ownerProfilePubkey: string | null;
  ownerPubkey: string | null;
  persona: AgentPersona | undefined;
  presenceLoaded: boolean;
  presenceStatus: "online" | "away" | "offline" | undefined;
  profile: Profile | undefined;
  pubkey: string | null;
  relayAgent: RelayAgent | undefined;
}) {
  const { t } = useTranslation();
  return React.useMemo(() => {
    const metadataFields = [
      ...buildPublicFields({ pubkey, profile, relayAgent, isBot, persona, t }),
      ...(ownerDisplayName || isOwner === true
        ? buildOwnerFields({
            includeOperationalFields: isOwner === true,
            managedAgent,
            onOpenProfile,
            ownerDisplayName,
            ownerHandle,
            ownerProfilePubkey,
            ownerPubkey,
            persona,
            presenceLoaded,
            presenceStatus,
            relayAgent,
            t,
          })
        : []),
    ];
    return bucketProfileFields(metadataFields, t);
  }, [
    isBot,
    isOwner,
    managedAgent,
    onOpenProfile,
    ownerDisplayName,
    ownerHandle,
    ownerProfilePubkey,
    ownerPubkey,
    persona,
    presenceLoaded,
    presenceStatus,
    profile,
    pubkey,
    relayAgent,
    t,
  ]);
}

export function buildPublicFields({
  isBot,
  persona,
  profile,
  pubkey,
  relayAgent,
  t,
}: {
  isBot: boolean;
  persona?: AgentPersona;
  profile: Profile | undefined;
  pubkey: string | null;
  relayAgent: RelayAgent | undefined;
  t: (key: string) => string;
}): ProfileField[] {
  const fields: ProfileField[] = [];

  if (pubkey) {
    fields.push({
      copyValue: pubkey,
      displayValue: truncatePubkey(pubkey),
      displayNode: (
        <PubKey
          interactive={false}
          pubkey={pubkey}
          testId="user-profile-copy-pubkey"
        />
      ),
      label: t("profile.public_key"),
      testId: "user-profile-public-key",
    });
  }

  if (profile?.nip05Handle) {
    fields.push({
      copyValue: profile.nip05Handle,
      displayValue: profile.nip05Handle,
      icon: UserRound,
      label: "NIP-05",
      testId: "user-profile-nip05",
    });
  }

  if (isBot && relayAgent?.agentType) {
    fields.push({
      copyValue: relayAgent.agentType,
      displayValue: runtimeLabel(relayAgent.agentType, t),
      icon: Cpu,
      label: t("profile.agent_type"),
      testId: "user-profile-agent-type",
    });
  }

  if (!pubkey && persona) {
    fields.push({
      displayValue: t("profile.not_deployed"),
      icon: Activity,
      label: "Status",
      testId: "user-profile-agent-status",
    });
  }

  if (relayAgent?.capabilities.length) {
    fields.push({
      copyValue: relayAgent.capabilities.join(", "),
      displayValue: relayAgent.capabilities.join(", "),
      icon: Server,
      label: "Capabilities",
      testId: "user-profile-capabilities",
    });
  }

  return fields;
}

export function buildOwnerFields({
  includeOperationalFields,
  managedAgent,
  onOpenProfile,
  ownerDisplayName,
  ownerHandle,
  ownerProfilePubkey,
  ownerPubkey,
  persona,
  presenceLoaded,
  presenceStatus,
  relayAgent,
  t,
}: {
  includeOperationalFields: boolean;
  managedAgent: ManagedAgent | undefined;
  onOpenProfile?: (pubkey: string) => void;
  ownerDisplayName: string | null;
  ownerHandle: string | null;
  ownerProfilePubkey: string | null;
  ownerPubkey: string | null;
  persona?: AgentPersona;
  presenceLoaded: boolean;
  presenceStatus: "online" | "away" | "offline" | undefined;
  relayAgent: RelayAgent | undefined;
  t: (key: string) => string;
}): ProfileField[] {
  const fields: ProfileField[] = [];
  const respondTo = managedAgent?.respondTo ?? relayAgent?.respondTo ?? null;
  const respondToDisplayValue = respondTo
    ? respondTo === "owner-only"
      ? ownerDisplayName
        ? `Only ${ownerDisplayName} (owner)`
        : t("profile.only_owner")
      : respondTo === "allowlist"
        ? t("profile.selected_people")
        : "Anyone"
    : null;

  const ownerClickable = Boolean(onOpenProfile && ownerProfilePubkey);

  if (ownerDisplayName) {
    fields.push({
      copyValue: ownerClickable
        ? undefined
        : (ownerProfilePubkey ?? ownerPubkey ?? ownerHandle ?? undefined),
      displayValue: ownerDisplayName,
      displayNode: <span className="truncate">{ownerDisplayName}</span>,
      label: t("profile.managed_by"),
      onClick:
        ownerClickable && ownerProfilePubkey
          ? () => onOpenProfile?.(ownerProfilePubkey)
          : undefined,
      testId: "user-profile-managed-by",
    });
  }

  if (!includeOperationalFields) {
    return fields;
  }

  if (managedAgent?.agentCommand) {
    fields.push({
      copyValue: managedAgent.agentCommand,
      displayValue: runtimeLabel(managedAgent.agentCommand, t),
      icon: Terminal,
      label: "Runtime",
      testId: "user-profile-runtime",
    });
  } else if (relayAgent?.agentType) {
    fields.push({
      copyValue: relayAgent.agentType,
      displayValue: runtimeLabel(relayAgent.agentType, t),
      icon: Terminal,
      label: "Runtime",
      testId: "user-profile-runtime",
    });
  } else if (persona?.runtime) {
    fields.push({
      copyValue: persona.runtime,
      displayValue: runtimeLabel(persona.runtime, t),
      icon: Terminal,
      label: "Runtime",
      testId: "user-profile-runtime",
    });
  } else if (ownerPubkey) {
    fields.push({
      copyValue: ownerPubkey,
      displayValue: t("profile.declared_owner_verified"),
      icon: UserRound,
      label: t("profile.agent_profile"),
      testId: "user-profile-agent-profile",
    });
  }

  if (managedAgent) {
    fields.push({
      displayValue: managedAgent.status
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char: string) => char.toUpperCase()),
      displayNode: (
        <AgentStatusBadge
          className="normal-case tracking-normal"
          presenceLoaded={presenceLoaded}
          presenceStatus={presenceStatus}
          sentenceCase
          status={managedAgent.status}
        />
      ),
      icon: Activity,
      label: "Status",
      testId: "user-profile-agent-status",
    });
  }

  if (managedAgent?.acpCommand) {
    fields.push({
      copyValue: managedAgent.acpCommand,
      displayValue: managedAgent.acpCommand,
      icon: Terminal,
      label: t("profile.acp_command"),
      testId: "user-profile-acp",
    });
  }

  if (managedAgent?.mcpCommand) {
    fields.push({
      copyValue: managedAgent.mcpCommand,
      displayValue: managedAgent.mcpCommand,
      icon: Terminal,
      label: t("profile.mcp_command"),
      testId: "user-profile-mcp",
    });
  }

  if (managedAgent?.backend.type === "provider") {
    const backendLabel = managedAgent.backend.id;
    fields.push({
      copyValue: backendLabel,
      displayValue: backendLabel,
      icon: Server,
      label: "Backend",
      testId: "user-profile-backend",
    });
  }

  if (managedAgent) {
    fields.push({
      displayValue: managedAgent.startOnAppLaunch ? "Yes" : "No",
      icon: Server,
      label: t("profile.start_on_launch"),
      testId: "user-profile-start-on-launch",
    });
  }

  if (respondToDisplayValue) {
    fields.push({
      displayValue: respondToDisplayValue,
      icon: Ear,
      label: t("profile.who_can_send"),
      testId: "user-profile-respond-to",
    });
  }

  if (managedAgent?.lastError) {
    fields.push({
      copyValue: managedAgent.lastError,
      displayValue: managedAgent.lastError,
      icon: Activity,
      label: t("profile.last_error"),
      testId: "user-profile-last-error",
    });
  }

  return fields;
}

function orderProfileFields(
  fields: ProfileField[],
  t: (key: string) => string,
) {
  const visibilityLabel = "Visibility";
  const publicKeyLabel = t("profile.public_key");
  const managedByLabel = t("profile.managed_by");
  const statusLabel = "Status";
  return [
    ...fields.filter((field) => field.label === visibilityLabel),
    ...fields.filter((field) => field.label === publicKeyLabel),
    ...fields.filter((field) => field.label === managedByLabel),
    ...fields.filter(
      (field) =>
        field.label !== visibilityLabel &&
        field.label !== publicKeyLabel &&
        field.label !== managedByLabel &&
        field.copyValue,
    ),
    ...fields.filter((field) => field.label === statusLabel),
    ...fields.filter((field) => {
      if (
        field.label === visibilityLabel ||
        field.label === publicKeyLabel ||
        field.label === managedByLabel ||
        field.label === statusLabel
      ) {
        return false;
      }
      return !field.copyValue;
    }),
  ];
}

export function ProfileFieldRows({
  fields,
  variant = "default",
}: {
  fields: ProfileField[];
  variant?: "default" | "runtime";
}) {
  const { t } = useTranslation();
  return (
    <>
      {orderProfileFields(fields, t).map((field) => (
        <ProfileFieldRow
          field={field}
          key={field.testId ?? field.label}
          variant={variant}
        />
      ))}
    </>
  );
}

export function ProfileSectionGroup({
  children,
  headerAction,
  testId,
  title,
}: {
  children: React.ReactNode;
  headerAction?: React.ReactNode;
  testId?: string;
  title?: string;
}) {
  return (
    <PanelSectionGroup
      headerAction={headerAction}
      testId={testId}
      title={title}
    >
      <div className="divide-y divide-border/55">{children}</div>
    </PanelSectionGroup>
  );
}

export function ProfileFieldGroup({
  fields,
  title,
}: {
  fields: ProfileField[];
  title?: string;
}) {
  return (
    <ProfileSectionGroup title={title}>
      <ProfileFieldRows fields={fields} />
    </ProfileSectionGroup>
  );
}

function ProfileFieldRow({
  field,
  variant,
}: {
  field: ProfileField;
  variant: "default" | "runtime";
}) {
  const Icon = field.icon;
  const isCopyable = Boolean(field.copyValue);
  const isActionable = Boolean(field.onClick);
  const isTrailingDisplay =
    variant === "runtime" && field.label === "Status" && field.displayNode;
  const { copied, copy } = useCopyFeedback({
    label: field.label,
    value: field.copyValue ?? "",
  });

  const content = (
    <>
      {variant === "default" && Icon ? (
        <Icon
          className="h-4 w-4 shrink-0 text-muted-foreground"
          data-slot="profile-field-icon"
        />
      ) : null}
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-sm font-medium text-foreground">
          {field.label}
        </span>
        {!isTrailingDisplay ? (
          <span
            className="mt-0.5 block truncate text-sm text-muted-foreground/70"
            title={field.displayValue}
          >
            {field.displayNode ?? field.displayValue}
          </span>
        ) : null}
      </span>
      {isTrailingDisplay ? field.displayNode : null}
      {field.trailingNode}
      {isActionable ? (
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          data-testid={
            field.testId ? `${field.testId}-action-indicator` : undefined
          }
        />
      ) : isCopyable ? (
        <HoverCopyIndicator
          copied={copied}
          testId={field.testId ? `${field.testId}-copy-status` : undefined}
        />
      ) : null}
    </>
  );

  if (isActionable) {
    return (
      <button
        aria-label={`Open ${field.label}`}
        className="group flex min-h-16 w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/40 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
        data-testid={field.testId}
        onClick={field.onClick}
        title={`Open ${field.label}`}
        type="button"
      >
        {content}
      </button>
    );
  }

  if (isCopyable && field.copyValue) {
    return (
      <button
        aria-label={`Copy ${field.label}`}
        className="group flex min-h-16 w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/40 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
        data-testid={field.testId}
        onClick={() => void copy()}
        title={`Copy ${field.label}`}
        type="button"
      >
        {content}
      </button>
    );
  }

  return (
    <div
      className="flex min-h-16 items-center gap-3 px-4 py-3"
      data-testid={field.testId}
    >
      {content}
    </div>
  );
}
