import { useSyncExternalStore } from "react";
import { applyA11ySettings } from "@/lib/accessibility/apply";
import {
  A11Y_DEFAULTS,
  A11Y_PROFILES,
  A11Y_STORAGE_KEY,
  type A11yProfileId,
  type A11ySettings,
  normaliseA11ySettings,
} from "@/lib/accessibility/settings";

/** One shared store for the menu, the provider and any effect that needs the settings. */
let settings: A11ySettings = A11Y_DEFAULTS;
let loaded = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function persist() {
  try {
    localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // Private mode or blocked storage: the settings still apply for this page view.
  }
}

function commit(next: A11ySettings) {
  settings = next;
  applyA11ySettings(settings);
  persist();
  emit();
}

/** Reads the saved settings once the app is on the client (the boot script already painted them). */
export function loadA11ySettings() {
  if (loaded) return;
  loaded = true;
  try {
    const saved = localStorage.getItem(A11Y_STORAGE_KEY);
    if (saved) settings = normaliseA11ySettings(JSON.parse(saved));
  } catch {
    settings = A11Y_DEFAULTS;
  }
  applyA11ySettings(settings);
  emit();
}

export function getA11ySettings() {
  return settings;
}

export function subscribeA11y(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Changes one or more settings by hand, which switches any active profile off. */
export function updateA11ySettings(patch: Partial<Omit<A11ySettings, "profile">>) {
  commit({ ...settings, ...patch, profile: null });
}

/** Switches a preset on (defaults plus its values) or, if it is the active one, off (back to the defaults). */
export function toggleA11yProfile(id: A11yProfileId) {
  if (settings.profile === id) {
    commit(A11Y_DEFAULTS);
    return;
  }
  const profile = A11Y_PROFILES.find((entry) => entry.id === id);
  if (!profile) return;
  commit({ ...A11Y_DEFAULTS, ...profile.patch, profile: id });
}

export function resetA11ySettings() {
  commit(A11Y_DEFAULTS);
}

export function useA11ySettings() {
  return useSyncExternalStore(subscribeA11y, getA11ySettings, () => A11Y_DEFAULTS);
}
