export type PersonaModelDiscoveryStatus = {
  message: string;
  tone: "muted" | "warning";
};

type TranslateFn = (key: string, options?: Record<string, unknown>) => string;

function errorMessage(error: unknown, t?: TranslateFn): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  try {
    return JSON.stringify(error);
  } catch {
    return t
      ? t("agents.unknown_model_discovery_error")
      : "Unknown model discovery error";
  }
}

function providerObjectLabel(provider: string, t?: TranslateFn): string {
  switch (provider.trim()) {
    case "anthropic":
      return "Anthropic";
    case "openai":
      return "OpenAI";
    case "openai-compat":
      return "OpenAI-compatible";
    default:
      return (
        provider.trim() || (t ? t("agents.this_provider") : "this provider")
      );
  }
}

function isEmptySharedComputeError(message: string): boolean {
  const normalized = message.toLowerCase();
  return (
    normalized.includes("shared compute status is not published") ||
    normalized.includes("no buzz shared compute serving members") ||
    normalized.includes("no live buzz shared compute models") ||
    normalized.includes("no live member is serving") ||
    normalized.includes("requires a live serving member")
  );
}

export function formatModelDiscoveryErrorStatus(
  error: unknown,
  provider: string,
  agentLabel?: string,
  t?: TranslateFn,
): PersonaModelDiscoveryStatus | null {
  const message = errorMessage(error, t);

  if (provider.trim() === "relay-mesh") {
    if (message.includes("waiting for the current member roster")) {
      return {
        message: t
          ? t("agents.discovery_waiting_roster")
          : "Buzz is waiting for the relay's member roster. Try again shortly; if this persists, check the relay's membership configuration.",
        tone: "warning",
      };
    }

    if (isEmptySharedComputeError(message)) {
      return {
        message: t
          ? t("agents.discovery_no_members_sharing")
          : "No members are sharing compute right now. On a member machine, open Settings > Compute, choose a model, and turn on Share this machine.",
        tone: "warning",
      };
    }

    if (message.includes("shared compute is not available in this build")) {
      return {
        message: t
          ? t("agents.discovery_shared_compute_unavailable")
          : "This version of Buzz cannot use shared compute. Update Buzz or choose another provider.",
        tone: "warning",
      };
    }

    if (message.includes("shared compute status is malformed")) {
      return {
        message: t
          ? t("agents.discovery_invalid_shared_compute_status")
          : "Buzz received an invalid shared compute status. Check the member machine, then try again.",
        tone: "warning",
      };
    }

    return {
      message: t
        ? t("agents.discovery_couldnt_check_shared_compute")
        : "Buzz couldn't check shared compute through the relay. Check your relay connection and try again.",
      tone: "warning",
    };
  }

  // Spec-reserved auth error text (agent-client-protocol ErrorCode::AuthRequired),
  // surfaced verbatim through buzz-acp's stderr — generic across conformant
  // harnesses (e.g. cursor-agent when not signed in). Match the message text,
  // NOT code -32000: that code is also the catch-all fallback for unclassified
  // errors, so matching it would swallow unrelated failures into "sign in".
  if (message.toLowerCase().includes("authentication required")) {
    const label =
      agentLabel?.trim() || (t ? t("agents.this_agent") : "This agent");
    return {
      message: t
        ? t("agents.discovery_requires_sign_in", { label })
        : `${label} requires sign-in before models can load. Sign in with the ${label} CLI in a terminal, then try again.`,
      tone: "warning",
    };
  }

  if (message.includes("ANTHROPIC_API_KEY required")) {
    return {
      message: t
        ? t("agents.discovery_anthropic_key")
        : "Enter an Anthropic API key to load Anthropic models.",
      tone: "warning",
    };
  }

  if (message.includes("OPENAI_COMPAT_API_KEY required")) {
    return {
      message: t
        ? t("agents.discovery_openai_key")
        : "Enter an OpenAI runtime API key (OPENAI_COMPAT_API_KEY) to load OpenAI models.",
      tone: "warning",
    };
  }

  if (
    message.includes("DATABRICKS_HOST required") ||
    message.includes("DATABRICKS_MODEL required") ||
    message.includes("BUZZ_AGENT_PROVIDER is required")
  ) {
    return null;
  }

  // Databricks transparent auth (agent_models_databricks.rs). The backend
  // launches the browser OAuth flow itself from every discovery surface, so
  // these are terminal outcomes the user should see, not raw error text.
  // Matched on the stable error strings the backend emits (string matching is
  // this file's convention until typed error codes arrive).
  const databricksStatus = formatDatabricksAuthStatus(message);
  if (databricksStatus !== null) {
    return databricksStatus;
  }

  return {
    message: t
      ? t("agents.discovery_builtin_fallback", {
          provider: providerObjectLabel(provider, t),
        })
      : `Using built-in model options. Could not load live models for ${providerObjectLabel(
          provider,
          t,
        )}.`,
    tone: "warning",
  };
}

/**
 * Maps the terminal Databricks sign-in states to user-facing guidance, or null
 * when the error is not a Databricks sign-in outcome. "Sign-in required" is a
 * quiet muted note (a passive surface hit its cooldown, or an unsaved draft
 * can't launch the browser); a failed, cancelled, or timed-out sign-in is a
 * warning that points the user at the explicit retry path.
 */
function formatDatabricksAuthStatus(
  message: string,
): PersonaModelDiscoveryStatus | null {
  if (message.includes("Databricks sign-in is required")) {
    return {
      message:
        "Databricks sign-in is required. Open the model picker to sign in, or run `buzz-agent auth databricks` in a terminal.",
      tone: "muted",
    };
  }

  if (
    message.includes("Databricks sign-in failed") ||
    message.includes("Databricks sign-in timed out")
  ) {
    return {
      message:
        "Databricks sign-in didn't complete. Open the model picker to retry, or run `buzz-agent auth databricks` in a terminal.",
      tone: "warning",
    };
  }

  return null;
}
