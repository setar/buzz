import * as React from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

import { getLanguage, setLanguage } from "@/shared/i18n/i18n";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

const LANGUAGES: ReadonlyArray<{ code: "en" | "ru"; labelKey: string }> = [
  { code: "en", labelKey: "settings.language_en" },
  { code: "ru", labelKey: "settings.language_ru" },
];

export function LanguageSwitcher({
  variant = "dropdown",
  className,
}: {
  /** "dropdown" — компактная иконка с меню (онбординг); "segmented" — две кнопки (настройки). */
  variant?: "dropdown" | "segmented";
  className?: string;
}) {
  const { t } = useTranslation();
  const [lang, setLang] = React.useState<"en" | "ru">(() => getLanguage());

  const selectLanguage = React.useCallback((next: "en" | "ru") => {
    setLanguage(next);
    setLang(next);
  }, []);

  if (variant === "segmented") {
    return (
      <div
        className={cn("flex gap-2", className)}
        data-testid="language-switcher-segmented"
      >
        {LANGUAGES.map(({ code, labelKey }) => (
          <button
            aria-pressed={lang === code}
            className={cn(
              "flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring",
              lang === code
                ? "border-primary bg-primary/10 text-foreground"
                : "border-border/70 text-muted-foreground hover:border-border hover:text-foreground",
            )}
            data-testid={`language-option-${code}`}
            key={code}
            onClick={() => selectLanguage(code)}
            type="button"
          >
            {t(labelKey)}
          </button>
        ))}
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={className}
          size="icon"
          type="button"
          variant="ghost"
          aria-label={t("settings.language")}
          title={t("settings.language")}
          data-testid="language-switcher"
        >
          <Languages className="h-4 w-4" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={lang}
          onValueChange={(value) => selectLanguage(value as "en" | "ru")}
        >
          {LANGUAGES.map(({ code, labelKey }) => (
            <DropdownMenuRadioItem key={code} value={code}>
              {t(labelKey)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
