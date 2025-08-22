// Feature flags for runtime behavior toggles
export const flags = {
  // Use DB-based cell-center snapping (v2). If false, fallback to design grid snapping.
  useCellCenterSnapV2: true,

  // Hide design grid size control in Settings UI. Visual overlay still renders if enabled.
  hideDesignGridSizeControl: true,

  // Expose lightweight grid editor (admin only) for DB GridConfig authoring.
  enableGridEditor: true,

  // When true, ignore any localStorage fallback and only use DB grid values.
  gridUseDBOnly: true,
};


