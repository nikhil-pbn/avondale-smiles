import type { A11ySettings } from "@/lib/accessibility/settings";

/**
 * Writes the settings onto <html> as data attributes and one custom property; globals.css does the rest.
 * The boot script in the root layout does the same before first paint, so keep the two in step.
 */
export function applyA11ySettings(settings: A11ySettings, html: HTMLElement = document.documentElement) {
  const flag = (name: string, on: boolean) => (on ? html.setAttribute(name, "") : html.removeAttribute(name));
  const value = (name: string, current: string | number, off: string | number) =>
    current === off ? html.removeAttribute(name) : html.setAttribute(name, String(current));

  if (settings.fontScale === 1) html.style.removeProperty("--a11y-font-scale");
  else html.style.setProperty("--a11y-font-scale", String(settings.fontScale));

  value("data-a11y-letter-spacing", settings.letterSpacing, 0);
  value("data-a11y-line-height", settings.lineHeight, 0);
  value("data-a11y-font-weight", settings.fontWeight, 0);
  flag("data-a11y-highlight-titles", settings.highlightTitles);
  flag("data-a11y-highlight-links", settings.highlightLinks);
  flag("data-a11y-dyslexia", settings.dyslexiaFont);
  value("data-a11y-contrast", settings.contrast, "none");
  value("data-a11y-saturation", settings.saturation, "none");
  flag("data-a11y-filters", settings.contrast !== "none" || settings.saturation !== "none");
  flag("data-a11y-reduce-motion", settings.stopAnimations);
  flag("data-a11y-big-cursor", settings.bigCursor);
  flag("data-a11y-reading-guide", settings.readingGuide);
  flag("data-a11y-screen-reader", settings.screenReader);
}
