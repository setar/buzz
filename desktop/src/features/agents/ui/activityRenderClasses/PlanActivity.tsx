import { useTranslation } from "react-i18next";
import { Markdown } from "@/shared/ui/markdown";
import {
  ActivityRow,
  ActivityRowContent,
  ActivityRowLabel,
} from "./ActivityRow";
import { ToolActivity } from "./ToolActivity";
import { formatTranscriptTimestampTitle } from "../agentSessionUtils";
import type { ActivityRenderClassItemProps } from "./types";

export function PlanActivity(props: ActivityRenderClassItemProps) {
  const { t } = useTranslation();
  if (props.item.type === "tool") {
    return <ToolActivity {...props} />;
  }
  if (props.item.type !== "plan") {
    return null;
  }

  if (props.item.isUpdate) {
    return (
      <ActivityRow
        testId="transcript-plan-update-item"
        title={formatTranscriptTimestampTitle(props.item.timestamp)}
      >
        <ActivityRowLabel
          object={<PlanUpdateLabelObject text={props.item.text} />}
          openToneScope="none"
          verb={t("agents.updated")}
        />
      </ActivityRow>
    );
  }

  return (
    <ActivityRow
      testId="transcript-plan-item"
      title={formatTranscriptTimestampTitle(props.item.timestamp)}
    >
      <ActivityRowLabel
        object="plan"
        openToneScope="tool"
        verb={t("agents.updated")}
      />
      <ActivityRowContent className="pt-1 pb-1.5 text-sm leading-5 text-muted-foreground">
        <Markdown
          className="leading-5"
          content={props.item.text.trim() || t("agents.no_plan_details")}
        />
      </ActivityRowContent>
    </ActivityRow>
  );
}

function PlanUpdateLabelObject({ text }: { text: string }) {
  return (
    <>
      plan
      {text ? (
        <>
          {" · "}
          <span className="text-foreground">{text}</span>
        </>
      ) : null}
    </>
  );
}
