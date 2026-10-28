import { AccessibilityMenu } from "@/components/common/AccessibilityMenu";
import type { DockOrientation } from "@/components/common/DockButton";
// import { TextUsWidget } from "@/components/common/TextUsWidget";
import { cn } from "@/lib/utils";

type FloatingActionsProps = {
  /** "horizontal" lays the two buttons side by side; "vertical" stacks them. Set in the root layout. */
  orientation?: DockOrientation;
};

/**
 * The bottom-right dock holding the floating actions as one control. The text-us widget is kept in the codebase
 * but not rendered for now; uncomment its line (and import) to bring it back.
 * Each widget renders its launcher here and portals its own dialog; `data-a11y-keep-colors` keeps the dock's
 * colours when the page is inverted by the accessibility menu's dark mode.
 */
export function FloatingActions({ orientation = "vertical" }: FloatingActionsProps) {
  const horizontal = orientation === "horizontal";

  return (
    <div
      data-a11y-keep-colors=""
      data-orientation={orientation}
      className={cn(
        "fixed right-4 bottom-4 z-40 flex items-center gap-1 rounded-full bg-charcoal/95 p-px shadow-xl ring-1 shadow-black/25 ring-white/10 backdrop-blur lg:right-6 lg:bottom-6",
        horizontal ? "flex-row" : "flex-col",
      )}
    >
      {/* <TextUsWidget orientation={orientation} /> */}
      {/* <div aria-hidden="true" className={cn("bg-white/15", horizontal ? "h-6 w-px" : "h-px w-6")} /> */}
      <AccessibilityMenu orientation={orientation} />
    </div>
  );
}
