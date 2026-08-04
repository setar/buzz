import { useTranslation } from "react-i18next";
import { Check, ChevronDown, Link2 } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

import { mintInvite } from "@/shared/api/invites";
import { writeTextToClipboard } from "@/shared/lib/clipboard";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Separator } from "@/shared/ui/separator";
import { Spinner } from "@/shared/ui/spinner";

function buildTtlOptions(
  t: (key: string) => string,
): { label: string; value: number }[] {
  return [
    { label: t("community_members.one_day"), value: 24 * 60 * 60 },
    { label: t("community_members.three_days"), value: 3 * 24 * 60 * 60 },
    { label: t("community_members.seven_days"), value: 7 * 24 * 60 * 60 },
    { label: t("community_members.thirty_days"), value: 30 * 24 * 60 * 60 },
  ];
}

function buildMaxUseOptions(
  t: (key: string) => string,
): { label: string; value: number | null }[] {
  return [
    { label: t("mesh_compute.no_limit"), value: null },
    { label: t("community_members.one_use"), value: 1 },
    { label: t("community_members.three_uses"), value: 3 },
    { label: t("community_members.five_uses"), value: 5 },
    { label: t("community_members.ten_uses"), value: 10 },
    { label: t("community_members.twenty_five_uses"), value: 25 },
  ];
}

export const DEFAULT_INVITE_TTL_SECS = 3 * 24 * 60 * 60;

type CopyStatus = "idle" | "copying" | "copied";

/**
 * Share-with-link footer for the community invite dialog.
 *
 * Each copy action mints a fresh database-backed invite code and places its
 * shareable landing-page URL on the clipboard. Invites may be unlimited or
 * capped to a caller-selected number of successful joins.
 */
export function InviteLinkSection({
  onTtlSecsChange,
  ttlSecs,
}: {
  onTtlSecsChange: (ttlSecs: number) => void;
  ttlSecs: number;
}) {
  const { t } = useTranslation();
  const [copyStatus, setCopyStatus] = React.useState<CopyStatus>("idle");
  const [maxUses, setMaxUses] = React.useState<number | null>(null);
  const ttlLabel =
    buildTtlOptions(t).find((option) => option.value === ttlSecs)?.label ??
    t("community_members.three_days");
  const maxUsesLabel =
    buildMaxUseOptions(t).find((option) => option.value === maxUses)?.label ??
    t("mesh_compute.no_limit");
  const copyLabel =
    copyStatus === "copying"
      ? "Copying…"
      : copyStatus === "copied"
        ? "Copied"
        : t("community_members.copy_link");

  React.useEffect(() => {
    if (copyStatus !== "copied") return;
    const resetTimer = window.setTimeout(() => setCopyStatus("idle"), 2000);
    return () => window.clearTimeout(resetTimer);
  }, [copyStatus]);

  async function handleCopy() {
    if (copyStatus === "copying") return;
    setCopyStatus("copying");
    try {
      const invite = await mintInvite({ ttlSecs, maxUses });
      await writeTextToClipboard(invite.url);
      setCopyStatus("copied");
      toast.success(t("community_members.invite_copied"));
    } catch {
      setCopyStatus("idle");
      toast.error("Couldn’t copy the invite link. Try again.");
    }
  }

  return (
    <section data-testid="community-invite-link-section">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium">Expires after</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label={t("community_members.choose_invite_expiry")}
                className="h-8 shrink-0 gap-1.5 px-2 text-sm text-muted-foreground"
                data-testid="invite-link-ttl-trigger"
                disabled={copyStatus === "copying"}
                size="sm"
                type="button"
                variant="ghost"
              >
                {ttlLabel}
                <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuRadioGroup
                onValueChange={(value) => onTtlSecsChange(Number(value))}
                value={String(ttlSecs)}
              >
                {buildTtlOptions(t).map((option) => (
                  <DropdownMenuRadioItem
                    data-testid={`invite-link-ttl-${option.value}`}
                    key={option.value}
                    value={String(option.value)}
                  >
                    {option.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium">Limit number of uses</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label={t("community_members.choose_max_uses")}
                className="h-8 shrink-0 gap-1.5 px-2 text-sm text-muted-foreground"
                data-testid="invite-link-max-uses-trigger"
                disabled={copyStatus === "copying"}
                size="sm"
                type="button"
                variant="ghost"
              >
                {maxUsesLabel}
                <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuRadioGroup
                onValueChange={(value) =>
                  setMaxUses(value === "no-limit" ? null : Number(value))
                }
                value={String(maxUses ?? "no-limit")}
              >
                {buildMaxUseOptions(t).map((option) => (
                  <DropdownMenuRadioItem
                    data-testid={`invite-link-max-uses-${option.value ?? "no-limit"}`}
                    key={option.value ?? "no-limit"}
                    value={String(option.value ?? "no-limit")}
                  >
                    {option.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator className="my-4 bg-input/40" />
      <div className="flex justify-end">
        <Button
          className="shrink-0 border-border shadow-none"
          data-copy-status={copyStatus}
          data-testid="copy-invite-link"
          disabled={copyStatus === "copying"}
          onClick={() => void handleCopy()}
          size="sm"
          type="button"
          variant="outline"
        >
          {copyStatus === "copying" ? (
            <Spinner aria-hidden="true" className="h-4 w-4 border-2" />
          ) : copyStatus === "copied" ? (
            <Check aria-hidden="true" className="h-4 w-4" />
          ) : (
            <Link2 aria-hidden="true" className="h-4 w-4" />
          )}
          {copyLabel}
        </Button>
      </div>
    </section>
  );
}
