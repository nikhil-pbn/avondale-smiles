/** Visitor accessibility preferences behind the floating accessibility menu. Stored per browser, applied as attributes on <html>. */

export const A11Y_STORAGE_KEY = "avondale-smiles:accessibility";

/** BCP 47 tag for the read-aloud voice; the site is English only. */
export const A11Y_SPEECH_LANG = "en-US";

/** 0 = off, then three strengths, as on the reference widget. */
export type A11yLevel = 0 | 1 | 2 | 3;
export type A11yContrast = "none" | "dark" | "light" | "high";
export type A11ySaturation = "none" | "high" | "low" | "mono";
export type A11yProfileId = "seizure-safe" | "blind" | "visually-impaired" | "adhd" | "cognitive" | "motor";

export type A11ySettings = {
  /** The preset that was switched on last, or null once any setting is changed by hand. */
  profile: A11yProfileId | null;
  /** Multiplier on the root font size: 1 = 100%. */
  fontScale: number;
  letterSpacing: A11yLevel;
  lineHeight: A11yLevel;
  fontWeight: A11yLevel;
  highlightTitles: boolean;
  highlightLinks: boolean;
  dyslexiaFont: boolean;
  contrast: A11yContrast;
  saturation: A11ySaturation;
  readingGuide: boolean;
  stopAnimations: boolean;
  bigCursor: boolean;
  screenReader: boolean;
};

export const A11Y_DEFAULTS: A11ySettings = {
  profile: null,
  fontScale: 1,
  letterSpacing: 0,
  lineHeight: 0,
  fontWeight: 0,
  highlightTitles: false,
  highlightLinks: false,
  dyslexiaFont: false,
  contrast: "none",
  saturation: "none",
  readingGuide: false,
  stopAnimations: false,
  bigCursor: false,
  screenReader: false,
};

export const FONT_SCALE = { min: 0.8, max: 1.6, step: 0.1 } as const;

/** Presets: each switches the menu to these values on top of the defaults. */
export const A11Y_PROFILES: ReadonlyArray<{ id: A11yProfileId; patch: Partial<A11ySettings> }> = [
  { id: "seizure-safe", patch: { stopAnimations: true, saturation: "low" } },
  { id: "blind", patch: { screenReader: true } },
  { id: "visually-impaired", patch: { fontScale: 1.2, contrast: "high", fontWeight: 1, highlightLinks: true } },
  { id: "adhd", patch: { readingGuide: true, stopAnimations: true, saturation: "low" } },
  { id: "cognitive", patch: { dyslexiaFont: true, highlightTitles: true, highlightLinks: true, lineHeight: 1 } },
  { id: "motor", patch: { bigCursor: true, highlightLinks: true, stopAnimations: true } },
];

/** True when nothing differs from the defaults. */
export function isDefaultA11ySettings(settings: A11ySettings): boolean {
  return (Object.keys(A11Y_DEFAULTS) as (keyof A11ySettings)[]).every((key) => settings[key] === A11Y_DEFAULTS[key]);
}

/** Merges whatever was saved with the defaults, ignoring unknown or malformed values. */
export function normaliseA11ySettings(saved: unknown): A11ySettings {
  if (!saved || typeof saved !== "object") return A11Y_DEFAULTS;
  const input = saved as Record<string, unknown>;
  const level = (value: unknown): A11yLevel => (value === 1 || value === 2 || value === 3 ? value : 0);
  const bool = (value: unknown) => value === true;
  const scale = typeof input.fontScale === "number" ? input.fontScale : 1;

  return {
    profile: A11Y_PROFILES.some((profile) => profile.id === input.profile) ? (input.profile as A11yProfileId) : null,
    fontScale: Math.min(FONT_SCALE.max, Math.max(FONT_SCALE.min, Math.round(scale * 10) / 10)),
    letterSpacing: level(input.letterSpacing),
    lineHeight: level(input.lineHeight),
    fontWeight: level(input.fontWeight),
    highlightTitles: bool(input.highlightTitles),
    highlightLinks: bool(input.highlightLinks),
    dyslexiaFont: bool(input.dyslexiaFont),
    contrast: ["dark", "light", "high"].includes(input.contrast as string) ? (input.contrast as A11yContrast) : "none",
    saturation: ["high", "low", "mono"].includes(input.saturation as string)
      ? (input.saturation as A11ySaturation)
      : "none",
    readingGuide: bool(input.readingGuide),
    stopAnimations: bool(input.stopAnimations),
    bigCursor: bool(input.bigCursor),
    screenReader: bool(input.screenReader),
  };
}
