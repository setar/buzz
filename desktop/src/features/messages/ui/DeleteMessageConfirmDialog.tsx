import { useTranslation } from "react-i18next";
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

/**
 * The t("messages.delete_message_confirm") confirmation. Single definition shared by every
 * surface that deletes a message — the message action menu (MessageActionBar)
 * and the empty-edit delete path (clearing an edit to empty and hitting accept
 * routes here, so it prompts exactly like the menu's Delete does). `onConfirm`
 * fires when the user presses Delete; the caller owns the actual deletion.
 */
export function DeleteMessageConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}) {
  const { t } = useTranslation();

  return (
    <AlertDialog onOpenChange={onOpenChange} open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {t("messages.confirm_delete_title")}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {t("messages.confirm_delete_description")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button type="button" variant="outline">
              {t("common.cancel")}
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={onConfirm} type="button" variant="destructive">
              {t("common.delete")}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
