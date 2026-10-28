"use client";

import { MotionConfig } from "motion/react";
import { useEffect, type ReactNode } from "react";
import { A11Y_SPEECH_LANG, loadA11ySettings, useA11ySettings } from "@/lib/accessibility";

/** Elements the screen-reader mode reads as one unit. */
const READABLE = "p, h1, h2, h3, h4, h5, h6, li, a, button, label, summary, dt, dd, figcaption, [role='button']";

/**
 * Applies the behavioural accessibility settings: Motion honours "stop animations" (and the OS reduced-motion
 * setting), autoplaying video pauses, the reading guide follows the pointer, and screen-reader mode reads aloud.
 */
export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const settings = useA11ySettings();

  useEffect(() => {
    loadA11ySettings();
  }, []);

  useReadingGuide(settings.readingGuide);
  useVideoPause(settings.stopAnimations);
  useScreenReader(settings.screenReader);

  return <MotionConfig reducedMotion={settings.stopAnimations ? "always" : "user"}>{children}</MotionConfig>;
}

/** A reading mask: the page dims except for a clear band that follows the pointer, to keep one's place in a line. */
function useReadingGuide(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const guide = document.createElement("div");
    guide.className = "a11y-reading-guide";
    guide.setAttribute("aria-hidden", "true");
    guide.style.top = "50%";
    document.body.appendChild(guide);
    const follow = (event: PointerEvent) => {
      guide.style.top = `${event.clientY}px`;
    };
    window.addEventListener("pointermove", follow, { passive: true });
    return () => {
      window.removeEventListener("pointermove", follow);
      guide.remove();
    };
  }, [enabled]);
}

/** Pauses autoplaying video (the home hero) while animations are stopped, and resumes it afterwards. */
function useVideoPause(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>("video[autoplay]"));
    videos.forEach((video) => video.pause());
    return () => {
      videos.forEach((video) => {
        video.play().catch(() => {});
      });
    };
  }, [enabled]);
}

/** Reads the text block under the pointer or keyboard focus aloud with the browser's speech synthesis. */
function useScreenReader(enabled: boolean) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    let current: Element | null = null;

    const speak = (element: Element) => {
      if (element === current) return;
      current?.classList.remove("a11y-reading");
      current = element;
      element.classList.add("a11y-reading");
      const text = (element.getAttribute("aria-label") || element.textContent || "").replace(/\s+/g, " ").trim();
      if (!text) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text.slice(0, 600));
      utterance.lang = A11Y_SPEECH_LANG;
      window.speechSynthesis.speak(utterance);
    };
    const fromEvent = (event: Event) => {
      const target = event.target instanceof Element ? event.target.closest(READABLE) : null;
      if (target) speak(target);
    };

    document.addEventListener("pointerover", fromEvent);
    document.addEventListener("focusin", fromEvent);
    return () => {
      document.removeEventListener("pointerover", fromEvent);
      document.removeEventListener("focusin", fromEvent);
      current?.classList.remove("a11y-reading");
      window.speechSynthesis.cancel();
    };
  }, [enabled]);
}
