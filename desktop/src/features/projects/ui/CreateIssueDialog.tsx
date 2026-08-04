import { useTranslation } from "react-i18next";
import {
  CreateProjectWorkItemDialog,
  type CreateProjectWorkItemDialogInput,
} from "./CreateProjectWorkItemDialog";

export type CreateIssueDialogInput = CreateProjectWorkItemDialogInput;

export function CreateIssueDialog({
  isCreating,
  onCreate,
  onOpenChange,
  open,
  projectName,
}: {
  isCreating: boolean;
  onCreate: (input: CreateIssueDialogInput) => Promise<void>;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  projectName: string;
}) {
  const { t } = useTranslation();
  return (
    <CreateProjectWorkItemDialog
      bodyPlaceholder={t("projects.issue_body_placeholder")}
      description={`Create an issue in ${projectName}`}
      isCreating={isCreating}
      itemName="issue"
      onCreate={onCreate}
      onOpenChange={onOpenChange}
      open={open}
      title={t("projects.create_issue")}
      titlePlaceholder={t("projects.describe_issue")}
    />
  );
}
