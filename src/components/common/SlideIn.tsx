"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { useMediaQuery, useReducedMotionPreference } from "@/hooks";

type Side = "left" | "right" | "bottom" | "none";

type SlideInProps = {
  children: ReactNode;
  /** Edge the block enters from on desktop (Tailwind `lg` and up). "none" only fades. */
  from?: Side;
  /** Edge it enters from below `lg`. Defaults to `from`; staging uses "bottom" or "none" on some pages. */
  fromMobile?: Side;
  /** How far the block travels: a px number or a CSS length. Defaults to a full viewport width sideways and 40px upward. */
  distance?: number | string;
  /** Seconds the slide takes. */
  duration?: number;
  /** Seconds to wait before starting, for staggering siblings. */
  delay?: number;
  /**
   * On by default: the block animates in the first time it is seen and then stays. Pass `once={false}` where a block
   * should slide back out when it leaves the viewport and in again when it returns (the staging-site behaviour).
   */
  once?: boolean;
  /** Share of the block that must be on screen before it animates, 0 to 1. */
  amount?: number;
  className?: string;
  /** Classes for the moving inner block, e.g. `h-full` when the children must fill the grid cell. */
  innerClassName?: string;
};

const EASE = [0.25, 0.46, 0.45, 0.94] as const;
const DESKTOP = "(min-width: 1024px)"; // Tailwind `lg`

function negate(value: number | string) {
  return typeof value === "number" ? -value : `-${value}`;
}

function offset(side: Side, distance?: number | string) {
  switch (side) {
    case "left":
      return { x: negate(distance ?? "100vw"), y: 0 };
    case "right":
      return { x: distance ?? "100vw", y: 0 };
    case "bottom":
      return { x: 0, y: distance ?? 40 };
    default:
      return { x: 0, y: 0 };
  }
}

/**
 * Slides a block in from off-screen when it scrolls into view, mirroring the staging site's `anim-in` / `anim-out` effect.
 * The outer div is the one observed; it never moves, so the observer still fires while the inner block sits off-screen.
 */
export function SlideIn({
  children,
  from = "left",
  fromMobile = from,
  distance,
  duration = 1,
  delay = 0,
  once = true,
  amount = 0.2,
  className,
  innerClassName,
}: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  const isDesktop = useMediaQuery(DESKTOP, true);
  const reduceMotion = useReducedMotionPreference();

  // Until the block has appeared once, changes to its hidden position (e.g. the viewport turning out to be a phone
  // after hydration) are applied instantly instead of animated.
  const [shown, setShown] = useState(false);
  if (inView && !shown) setShown(true);

  const visible = { x: 0, y: 0, opacity: 1 };
  // With motion reduced the block is simply there: no travel and no fade.
  const hidden = reduceMotion ? visible : { ...offset(isDesktop ? from : fromMobile, distance), opacity: 0 };
  const slide = reduceMotion ? ({ duration: 0 } as const) : ({ duration, ease: EASE } as const);

  return (
    <div ref={ref} className={className}>
      <motion.div
        className={innerClassName}
        initial={hidden}
        animate={inView ? visible : hidden}
        transition={inView && !reduceMotion ? { ...slide, delay } : shown ? slide : { duration: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
