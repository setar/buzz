import { useTranslation } from "react-i18next";

import type { AgentTeam } from "@/shared/api/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";

type TeamDeleteDialogProps = {
  open: boolean;
  team: AgentTeam | null;
  onConfirm: (team: AgentTeam) => void;
  onOpenChange: (open: boolean) => void;
};

export function TeamDeleteDialog({
  open,
  team,
  onConfirm,
  onOpenChange,
}: TeamDeleteDialogProps) {
  const { t } = useTranslation();
  return (
    <AlertDialog onOpenChange={onOpenChange} open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {t("agents.delete_team_confirm_title")}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {team
              ? t("agents.delete_team_confirm_named", { name: team.name })
              : t("agents.delete_team_confirm")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button type="button" variant="outline">
              {t("common.cancel")}
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              onClick={() => {
                if (team) {
                  onConfirm(team);
                }
              }}
              type="button"
              variant="destructive"
            >
              {t("common.delete")}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
