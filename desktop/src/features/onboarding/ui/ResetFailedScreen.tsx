import { useTranslation } from "react-i18next";
import { RecoveryScreen } from "./RecoveryScreen";

export function ResetFailedScreen() {
  const { t } = useTranslation();
  return (
    <RecoveryScreen
      testId="reset-failed"
      title={t("onboarding.reset_failed.title")}
      body={t("onboarding.reset_failed.body")}
    />
  );
}
