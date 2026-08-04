import { useTranslation } from "react-i18next";
import { Clock } from "lucide-react";

import {
  TIMEOUT_PRESETS,
  timeoutExpiresAt,
} from "@/features/moderation/lib/timeout";
import {
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/shared/ui/dropdown-menu";

/**
 * A dropdown submenu of community-timeout durations. Each item resolves the
 * chosen preset to an absolute expiry (epoch seconds) and hands it to
 * `onSelect` — the caller runs the timeout command with it. Presentational
 * and duration-only: it knows nothing about who is being timed out or which
 * command fires, so both the per-message author cluster and the report-queue
 * timeout resolution can share it and stay on one preset list.
 */
export function TimeoutDurationSubmenu({
  label,
  disabled = false,
  testIdPrefix,
  onSelect,
}: {
  /** Sub-trigger label; defaults to t("moderation.time_out"). */
  label?: string;
  disabled?: boolean;
  /** Prefix for each preset item's `data-testid` (e.g. `moderation-timeout`). */
  testIdPrefix?: string;
  /** Called with the absolute expiry in epoch seconds for the chosen preset. */
  onSelect: (expiresAt: number) => void;
}) {
  const { t } = useTranslation();
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger disabled={disabled}>
        <Clock className="h-4 w-4" />
        {label ?? t("moderation.time_out")}
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        {TIMEOUT_PRESETS.map((preset) => (
          <DropdownMenuItem
            data-testid={
              testIdPrefix ? `${testIdPrefix}-${preset.seconds}` : undefined
            }
            disabled={disabled}
            key={preset.seconds}
            onClick={() => onSelect(timeoutExpiresAt(preset.seconds))}
          >
            {preset.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
}
