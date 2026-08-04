import { Copy } from "lucide-react";
import { useTranslation } from "react-i18next";

import { copyTextToClipboard } from "@/shared/lib/clipboard";
import { Button, type ButtonProps } from "@/shared/ui/button";

export function CopyButton({
  className,
  iconOnly = false,
  label,
  size = "sm",
  value,
  variant = "outline",
}: {
  className?: string;
  iconOnly?: boolean;
  label?: string;
  size?: ButtonProps["size"];
  value: string;
  variant?: ButtonProps["variant"];
}) {
  const { t } = useTranslation();
  const resolvedLabel = label ?? t("common.copy");

  return (
    <Button
      className={className}
      onClick={() => copyTextToClipboard(value)}
      size={size}
      type="button"
      variant={variant}
    >
      <Copy className="h-4 w-4" />
      <span className={iconOnly ? "sr-only" : undefined}>{resolvedLabel}</span>
    </Button>
  );
}
