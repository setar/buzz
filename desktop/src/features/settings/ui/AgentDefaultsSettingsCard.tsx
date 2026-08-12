import { useTranslation } from "react-i18next";
import { AgentDefaultsEditor } from "@/features/agents/ui/AgentDefaultsEditor";
import { SettingsOptionGroup } from "./SettingsOptionGroup";

export function AgentDefaultsSettingsCard() {
  const { t } = useTranslation();
  return (
    <SettingsOptionGroup
      data-testid="settings-global-agent-config"
      description={t("settings.agent_defaults_inherited_desc")}
      title={t("settings.agent_defaults")}
    >
      <div className="px-4 py-4">
        <AgentDefaultsEditor layout="flat" />
      </div>
    </SettingsOptionGroup>
  );
}
