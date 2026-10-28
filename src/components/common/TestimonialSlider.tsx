"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui";
import { useReducedMotionPreference, useViewportWidth } from "@/hooks";
import { cn } from "@/lib/utils";
import type { TestimonialVideo } from "@/types";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

/** Which background the slider sits on; its arrows and dots pick a contrasting colour. */
export type SliderTone = "dark" | "light";

type TestimonialSliderProps = {
  videos: readonly TestimonialVideo[];
  tone?: SliderTone;
  /** Milliseconds between automatic advances; 0 turns autoplay off. Autoplay pauses on hover and stops once the visitor interacts. */
  autoplayMs?: number;
};

/** Card sizes from the staging widget; below `lg` the centre card is 70% of the viewport and the side cards match it. */
const DESKTOP = { centerW: 450, centerH: 300, sideW: 320, sideH: 260, gap: 20 };
const DESKTOP_MIN_WIDTH = 1024;
const EASE = [0.4, 0, 0.2, 1] as const;

const ARROW = "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors";

/** Arrow and dot colours per tone: white on the charcoal band, charcoal on white. */
const TONE = {
  dark: {
    arrow: "border-white/40 text-white/80 hover:border-white/90 hover:bg-white/10",
    dot: "bg-white/30 hover:bg-white/50",
    dotActive: "scale-130 bg-white/90",
  },
  light: {
    arrow: "border-charcoal/40 text-charcoal/80 hover:border-charcoal/90 hover:bg-charcoal/10",
    dot: "bg-charcoal/30 hover:bg-charcoal/50",
    dotActive: "scale-130 bg-charcoal/90",
  },
} as const;

function sizesFor(viewportWidth: number) {
  if (viewportWidth >= DESKTOP_MIN_WIDTH) return DESKTOP;
  const centerW = Math.round(viewportWidth * 0.7);
  const centerH = Math.round(centerW * (DESKTOP.centerH / DESKTOP.centerW));
  return { centerW, centerH, sideW: centerW, sideH: centerH, gap: 12 };
}

/** Signed distance of slide `i` from the active one, wrapping so the carousel loops (-3..3 for seven slides). */
function offsetOf(i: number, active: number, count: number) {
  let d = (((i - active) % count) + count) % count;
  if (d > count / 2) d -= count;
  return d;
}

/**
 * Looping video-testimonial carousel from the new site: the active poster sits large in the middle with the
 * neighbours smaller either side. The middle card opens the video in a dialog; the others slide into the middle.
 */
export function TestimonialSlider({ videos, autoplayMs = 4000, tone = "dark" }: TestimonialSliderProps) {
  const colours = TONE[tone];
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [playing, setPlaying] = useState<TestimonialVideo | null>(null);
  const viewportWidth = useViewportWidth();
  const reduceMotion = useReducedMotionPreference();

  const count = videos.length;
  const size = sizesFor(viewportWidth);

  useEffect(() => {
    if (!autoplayMs || reduceMotion || hovering || interacted || playing || count < 2) return;
    const id = window.setInterval(() => setActive((current) => (current + 1) % count), autoplayMs);
    return () => window.clearInterval(id);
  }, [autoplayMs, reduceMotion, hovering, interacted, playing, count]);

  const go = (delta: number) => {
    setInteracted(true);
    setActive((current) => (((current + delta) % count) + count) % count);
  };

  const select = (index: number) => {
    setInteracted(true);
    setActive(index);
  };

  const play = (video: TestimonialVideo) => {
    setInteracted(true);
    setPlaying(video);
  };

  return (
    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <div className="relative mx-auto w-full overflow-hidden" style={{ height: size.centerH }}>
        {videos.map((video, i) => {
          const d = offsetOf(i, active, count);
          const isCenter = d === 0;
          const width = isCenter ? size.centerW : size.sideW;
          const height = isCenter ? size.centerH : size.sideH;
          // Distance of the card's centre from the middle of the track.
          const x = isCenter
            ? 0
            : Math.sign(d) *
              (size.centerW / 2 + size.gap + (Math.abs(d) - 1) * (size.sideW + size.gap) + size.sideW / 2);
          const visible = Math.abs(d) <= 1;

          return (
            <motion.button
              key={video.youtubeId}
              type="button"
              aria-label={isCenter ? `Play ${video.title}` : `Show ${video.title}`}
              tabIndex={visible ? 0 : -1}
              onClick={() => (isCenter ? play(video) : go(d < 0 ? -1 : 1))}
              initial={false}
              animate={{ x: x - width / 2, y: -height / 2, width, height, opacity: visible ? 1 : 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.52, ease: EASE }}
              className="group absolute top-1/2 left-1/2 cursor-pointer overflow-hidden rounded-lg"
            >
              <Image
                src={video.poster}
                alt=""
                fill
                sizes="(min-width: 1024px) 450px, 70vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span
                  className={cn(
                    "flex items-center justify-center rounded-full border border-white/85 text-white transition-[background-color,width,height] duration-300 group-hover:bg-white/15",
                    isCenter ? "h-13 w-13 lg:h-17.5 lg:w-17.5" : "h-9.5 w-9.5 lg:h-13 lg:w-13",
                  )}
                >
                  <Play className={cn("ml-0.5 fill-current", isCenter ? "size-4 lg:size-5.5" : "size-3 lg:size-4")} />
                </span>
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2.5 lg:mt-9">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className={cn(ARROW, colours.arrow)}
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex items-center gap-1.75">
          {videos.map((video, i) => (
            <button
              key={video.youtubeId}
              type="button"
              onClick={() => select(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              className={cn(
                "h-2 w-2 rounded-full transition-[background-color,transform] duration-300",
                i === active ? colours.dotActive : colours.dot,
              )}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className={cn(ARROW, colours.arrow)}>
          <ChevronRight className="size-4" />
        </button>
      </div>

      <Dialog
        open={playing !== null}
        onOpenChange={(open) => {
          if (!open) setPlaying(null);
        }}
      >
        <DialogContent
          className="w-11/12 max-w-235 overflow-hidden border-0 bg-black p-0 text-white ring-0 sm:max-w-235"
          overlayClassName="bg-black/85 supports-backdrop-filter:backdrop-blur-md"
        >
          <DialogTitle className="sr-only">{playing?.title ?? "Testimonial video"}</DialogTitle>
          {playing ? (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${playing.youtubeId}?autoplay=1&rel=0`}
                title={playing.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
