import { useTranslation } from "react-i18next";
import type { AgentPersona } from "@/shared/api/types";
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

type PersonaDeleteDialogProps = {
  open: boolean;
  persona: AgentPersona | null;
  /** Number of managed-agent instances backed by this persona. Omit or pass 0 to suppress the instance-count sentence. */
  instanceCount?: number;
  onConfirm: (persona: AgentPersona) => void;
  onOpenChange: (open: boolean) => void;
};

/**
 * Confirmation copy for deleting a persona, exposed as a hook so the cascade
 * archival disclosure stays unit-testable without a renderer: whenever
 * instances are cascade-deleted, each one's identity is also archived on the
 * relay (NIP-IA), and that durable side effect must be disclosed before the
 * destructive confirm — matching the direct agent-delete dialog.
 */
function usePersonaDeleteDescription() {
  const { t } = useTranslation();
  return (persona: AgentPersona | null, instanceCount: number): string => {
    if (!persona) {
      return t("agents.delete_this_agent");
    }
    if (instanceCount === 0) {
      return t("agents.delete_named_agent", { name: persona.displayName });
    }
    const cascade = t("agents.delete_cascade", { count: instanceCount });
    return `${t("agents.delete_named_agent", {
      name: persona.displayName,
    })} ${cascade}`;
  };
}

export function PersonaDeleteDialog({
  open,
  persona,
  instanceCount = 0,
  onConfirm,
  onOpenChange,
}: PersonaDeleteDialogProps) {
  const { t } = useTranslation();
  const deleteDescription = usePersonaDeleteDescription();
  return (
    <AlertDialog onOpenChange={onOpenChange} open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("agents.delete_agent_title")}</AlertDialogTitle>
          <AlertDialogDescription>
            {deleteDescription(persona, instanceCount)}
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
                if (persona) {
                  onConfirm(persona);
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
