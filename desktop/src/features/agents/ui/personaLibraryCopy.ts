export function personaLibraryCopy(
  t: (key: string, opts?: Record<string, unknown>) => string,
) {
  return {
    title: t("agents.my_agents"),
    description: t("agents.my_agents_description"),
    chooseFromCatalog: t("agents.choose_from_catalog"),
    createNew: t("agents.new_agent"),
    import: t("agents.import_snapshot"),
    emptyTitle: t("agents.no_agents_yet"),
    emptyDescription: t("agents.no_agents_description"),
    emptyImportHint: t("agents.drop_snapshot_hint"),
  } as const;
}

export function personaCatalogCopy(
  t: (key: string, opts?: Record<string, unknown>) => string,
) {
  return {
    title: t("agents.agent_catalog"),
    description: t("agents.agent_catalog_description"),
    dialogTitle: t("agents.add_agent"),
    dialogDescription: t("agents.agent_catalog_description"),
    emptyTitle: t("agents.catalog_empty_title"),
    emptyDescription: t("agents.catalog_empty_description"),
    emptyCatalogDescription: t("agents.catalog_empty_catalog_description"),
    emptyCatalogTitle: t("agents.catalog_empty_catalog_title"),
    detailsAction: t("agents.view_details"),
    selectAction: t("agents.choose"),
    deselectAction: t("agents.deselect"),
    selectedState: t("agents.selected"),
    availableState: t("agents.available"),
    detailSelectedTitle: t("agents.detail_selected_title"),
    detailSelectedDescription: t("agents.detail_selected_description"),
    detailAvailableTitle: t("agents.detail_available_title"),
    detailAvailableDescription: t("agents.detail_available_description"),
    useAction: t("agents.add_agent"),
    addedAction: t("agents.added_to_my_agents"),
    teamEmptyState: t("agents.team_empty_state"),
  } as const;
}

export function getPersonaCatalogSelectionActionCopy(
  t: (key: string, opts?: Record<string, unknown>) => string,
  isActive: boolean,
) {
  return isActive
    ? personaCatalogCopy(t).deselectAction
    : personaCatalogCopy(t).selectAction;
}

export function getPersonaCatalogSelectionAriaLabel(
  t: (key: string, opts?: Record<string, unknown>) => string,
  displayName: string,
  isActive: boolean,
) {
  return t("agents.select_in_my_agents", {
    action: isActive ? t("agents.deselect") : t("agents.choose"),
    name: displayName,
  });
}

export function getPersonaCatalogDetailSelectionCopy(
  t: (key: string, opts?: Record<string, unknown>) => string,
  isActive: boolean,
) {
  return isActive
    ? {
        title: personaCatalogCopy(t).detailSelectedTitle,
        description: personaCatalogCopy(t).detailSelectedDescription,
      }
    : {
        title: personaCatalogCopy(t).detailAvailableTitle,
        description: personaCatalogCopy(t).detailAvailableDescription,
      };
}
