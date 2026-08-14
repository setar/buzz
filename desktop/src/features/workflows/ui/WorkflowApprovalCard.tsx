import { useTranslation } from "react-i18next";

import type { WorkflowApproval } from "@/shared/api/types";

type WorkflowApprovalCardProps = {
  approval: WorkflowApproval;
};

export function WorkflowApprovalCard({ approval }: WorkflowApprovalCardProps) {
  const { t } = useTranslation();

  const isExpired = new Date(approval.expiresAt) < new Date();

  if (approval.status !== "pending" || isExpired) {
    return null;
  }

  return (
    <div
      className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-3"
      data-testid="workflow-approval-card"
    >
      <p className="mb-2 text-sm font-medium">{t("workflows.approval_required")}</p>
      <p className="mb-2 text-xs text-muted-foreground">
        {t("workflows.approver")}: {approval.approverSpec}
      </p>
      <p className="mb-2 text-xs text-muted-foreground">
        {t("workflows.expires")}:{" "}
        {new Date(approval.expiresAt).toLocaleString()}
      </p>
      <p className="text-xs text-muted-foreground" role="status">
        {t("workflows.approval_unavailable_desktop")}
      </p>
    </div>
  );
}
