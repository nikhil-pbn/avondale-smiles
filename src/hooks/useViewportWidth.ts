import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}

/** The window's inner width in px. `serverFallback` is what the server render and first client render assume. */
export function useViewportWidth(serverFallback = 1280) {
  return useSyncExternalStore(
    subscribe,
    () => window.innerWidth,
    () => serverFallback,
  );
}
