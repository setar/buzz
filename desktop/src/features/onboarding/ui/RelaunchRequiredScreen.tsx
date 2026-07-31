import { useTranslation } from "react-i18next";
import { RecoveryScreen } from "./RecoveryScreen";

export function RelaunchRequiredScreen() {
  const { t } = useTranslation();
  return (
    <RecoveryScreen
      testId="relaunch-required"
      title={t("onboarding.relaunch.title")}
      body={t("onboarding.relaunch.body")}
    />
  );
}
