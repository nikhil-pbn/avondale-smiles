/**
 * Client-side barrel: the store uses React client APIs, so server code (the root layout) imports
 * `@/lib/accessibility/boot` directly instead of this file.
 */
export { applyA11ySettings } from "@/lib/accessibility/apply";
export { A11Y_BOOT_SCRIPT } from "@/lib/accessibility/boot";
export { A11Y_LABELS } from "@/lib/accessibility/labels";
export {
  A11Y_DEFAULTS,
  A11Y_PROFILES,
  A11Y_SPEECH_LANG,
  A11Y_STORAGE_KEY,
  FONT_SCALE,
  isDefaultA11ySettings,
  normaliseA11ySettings,
  type A11yContrast,
  type A11yLevel,
  type A11yProfileId,
  type A11ySaturation,
  type A11ySettings,
} from "@/lib/accessibility/settings";
export {
  getA11ySettings,
  loadA11ySettings,
  resetA11ySettings,
  subscribeA11y,
  toggleA11yProfile,
  updateA11ySettings,
  useA11ySettings,
} from "@/lib/accessibility/store";
