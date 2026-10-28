"use client";

import { useReducedMotion } from "motion/react";
import { useA11ySettings } from "@/lib/accessibility";

/**
 * True when motion should be skipped: the visitor's OS "reduce motion" setting, or the accessibility menu's
 * "Stop Animations" switch. Every JavaScript-driven animation on the site checks this.
 */
export function useReducedMotionPreference(): boolean {
  const osPrefers = useReducedMotion();
  const { stopAnimations } = useA11ySettings();
  return Boolean(osPrefers) || stopAnimations;
}
