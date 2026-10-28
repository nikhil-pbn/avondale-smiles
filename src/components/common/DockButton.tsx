import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** How the floating dock lays out its buttons; the hover label moves to stay clear of the neighbouring button. */
export type DockOrientation = "vertical" | "horizontal";

type DockButtonProps = Omit<ComponentProps<"button">, "children"> & {
  /** Accessible name; also the hover label. */
  label: string;
  orientation?: DockOrientation;
  children: ReactNode;
};

/** One round launcher in the floating dock: icon only, with its name appearing beside it on hover or focus. */
export function DockButton({ label, orientation = "vertical", className, children, ...props }: DockButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      {...props}
      className={cn(
        "group relative flex size-11 items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none",
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute rounded-full bg-charcoal px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
          // Horizontal labels hang from the button's right edge so the last one never runs off screen.
          orientation === "vertical" ? "top-1/2 right-full mr-3 -translate-y-1/2" : "right-0 bottom-full mb-3",
        )}
      >
        {label}
      </span>
    </button>
  );
}
