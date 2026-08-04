import { useTranslation } from "react-i18next";

import { cn } from "@/shared/lib/cn";

export function AgentDefinitionMetadata({
  className,
  isBuiltIn,
  model,
  runtime,
}: {
  className?: string;
  isBuiltIn: boolean;
  model: string | null;
  runtime: string | null;
}) {
  const { t } = useTranslation();
  const items = [
    {
      label: t("agents.type"),
      value: isBuiltIn ? t("agents.built_in_agent") : t("agents.custom_agent"),
    },
    {
      label: t("agents.preferred_model"),
      value: model ?? t("agents.use_app_default"),
    },
    {
      label: t("agents.preferred_runtime"),
      value: runtime ?? t("agents.use_app_default"),
    },
  ];

  return (
    <div
      className={cn("rounded-lg border border-border/70 bg-card/70", className)}
      data-testid="agent-definition-metadata"
    >
      <div className="grid sm:grid-cols-3">
        {items.map((item, index) => (
          <div
            className={cn(
              "relative px-4 py-3",
              index > 0 &&
                "border-t border-border/60 sm:border-t-0 sm:before:absolute sm:before:bottom-3 sm:before:left-0 sm:before:top-3 sm:before:w-px sm:before:bg-border/70",
            )}
            key={item.label}
          >
            <p className="text-xs font-semibold text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
