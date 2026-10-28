"use client";

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui";
import {
  A11Y_LABELS,
  A11Y_PROFILES,
  FONT_SCALE,
  resetA11ySettings,
  toggleA11yProfile,
  updateA11ySettings,
  useA11ySettings,
  type A11yLevel,
  type A11yProfileId,
  type A11ySettings,
} from "@/lib/accessibility";
import { cn } from "@/lib/utils";
import {
  Accessibility,
  ALargeSmall,
  Blend,
  Bold,
  BookOpen,
  Brain,
  CirclePause,
  Contrast,
  Droplet,
  Droplets,
  Eye,
  EyeOff,
  Focus,
  Heading,
  Link2,
  Minus,
  Moon,
  MousePointer2,
  PersonStanding,
  Plus,
  RotateCcw,
  StretchHorizontal,
  StretchVertical,
  Sun,
  Type,
  Volume2,
  X,
  ZapOff,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { DockButton, type DockOrientation } from "@/components/common/DockButton";

const PROFILE_ICONS: Record<A11yProfileId, LucideIcon> = {
  "seizure-safe": ZapOff,
  blind: EyeOff,
  "visually-impaired": Eye,
  adhd: Focus,
  cognitive: Brain,
  motor: Accessibility,
};

type BooleanKey = {
  [K in keyof A11ySettings]: A11ySettings[K] extends boolean ? K : never;
}[keyof A11ySettings];
type LevelKey = "letterSpacing" | "lineHeight" | "fontWeight";

const ICON_BUTTON =
  "flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none disabled:opacity-40";

/**
 * The site's own accessibility menu: a launcher in the bottom-right corner opening a drawer of visitor
 * preferences (profiles, text, colour and tool settings), remembered per browser. All in-house, no third party.
 */
type AccessibilityMenuProps = {
  orientation?: DockOrientation;
};

export function AccessibilityMenu({ orientation = "vertical" }: AccessibilityMenuProps) {
  const settings = useA11ySettings();
  const t = A11Y_LABELS;
  const [open, setOpen] = useState(false);

  const toggle = (key: BooleanKey) => updateA11ySettings({ [key]: !settings[key] });
  const cycle = (key: LevelKey) => updateA11ySettings({ [key]: ((settings[key] + 1) % 4) as A11yLevel });
  const chooseContrast = (value: A11ySettings["contrast"]) =>
    updateA11ySettings({ contrast: settings.contrast === value ? "none" : value });
  const chooseSaturation = (value: A11ySettings["saturation"]) =>
    updateA11ySettings({ saturation: settings.saturation === value ? "none" : value });
  const scaleFont = (delta: number) =>
    updateA11ySettings({
      fontScale: Math.min(FONT_SCALE.max, Math.max(FONT_SCALE.min, Math.round((settings.fontScale + delta) * 10) / 10)),
    });

  return (
    <>
      <DockButton
        label={t.launcher}
        orientation={orientation}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="bg-white/10 text-white hover:bg-white/20"
      >
        <PersonStanding className="size-6" aria-hidden="true" />
      </DockButton>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          showCloseButton={false}
          className="a11y-panel flex flex-col gap-0 bg-zinc-100 p-0 text-ink data-[side=right]:w-full data-[side=right]:sm:max-w-md"
        >
          <SheetHeader className="flex-row items-center justify-between gap-3 bg-charcoal px-5 py-4 text-white">
            <SheetTitle className="text-lg font-semibold text-white">{t.menuTitle}</SheetTitle>
            <SheetDescription className="sr-only">{t.menuTitle}</SheetDescription>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={resetA11ySettings}
                aria-label={t.reset}
                title={t.reset}
                className={cn(ICON_BUTTON, "border-white/40 text-white hover:bg-white/10")}
              >
                <RotateCcw className="size-4.5" aria-hidden="true" />
              </button>
              <SheetClose
                aria-label={t.close}
                title={t.close}
                className={cn(ICON_BUTTON, "border-white/40 text-white hover:bg-white/10")}
              >
                <X className="size-5" aria-hidden="true" />
              </SheetClose>
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <Section title={t.profilesTitle} first>
              <ul className="space-y-2">
                {A11Y_PROFILES.map(({ id }) => {
                  const Icon = PROFILE_ICONS[id];
                  const active = settings.profile === id;
                  return (
                    <li key={id}>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={active}
                        onClick={() => toggleA11yProfile(id)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-2xl border bg-white p-3.5 text-left transition-colors hover:border-zinc-400 focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none",
                          active ? "border-charcoal bg-sage-light" : "border-zinc-200",
                        )}
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-charcoal">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-ink">{t.profiles[id].label}</span>
                          <span className="block text-xs leading-snug text-zinc-600">{t.profiles[id].description}</span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={cn(
                            "flex h-6 w-10 shrink-0 rounded-full p-0.5 transition-colors",
                            active ? "bg-charcoal" : "bg-zinc-300",
                          )}
                        >
                          <span
                            className={cn(
                              "block size-5 rounded-full bg-white transition-transform",
                              active && "translate-x-4",
                            )}
                          />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Section>

            <Section title={t.contentTitle}>
              <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <ALargeSmall className="size-5" aria-hidden="true" />
                  {t.fontSize}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => scaleFont(-FONT_SCALE.step)}
                    disabled={settings.fontScale <= FONT_SCALE.min}
                    aria-label={t.decrease}
                    className={cn(ICON_BUTTON, "border-zinc-200 bg-zinc-100 text-ink hover:border-zinc-400")}
                  >
                    <Minus className="size-4" aria-hidden="true" />
                  </button>
                  <span className="text-base font-semibold text-ink" aria-live="polite">
                    {Math.round(settings.fontScale * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => scaleFont(FONT_SCALE.step)}
                    disabled={settings.fontScale >= FONT_SCALE.max}
                    aria-label={t.increase}
                    className={cn(ICON_BUTTON, "border-zinc-200 bg-zinc-100 text-ink hover:border-zinc-400")}
                  >
                    <Plus className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                <ToggleCard
                  icon={Heading}
                  label={t.highlightTitles}
                  pressed={settings.highlightTitles}
                  onClick={() => toggle("highlightTitles")}
                />
                <ToggleCard
                  icon={Link2}
                  label={t.highlightLinks}
                  pressed={settings.highlightLinks}
                  onClick={() => toggle("highlightLinks")}
                />
                <ToggleCard
                  icon={Type}
                  label={t.dyslexiaFont}
                  pressed={settings.dyslexiaFont}
                  onClick={() => toggle("dyslexiaFont")}
                />
                <ToggleCard
                  icon={StretchHorizontal}
                  label={t.letterSpacing}
                  level={settings.letterSpacing}
                  levelLabel={t.level}
                  onClick={() => cycle("letterSpacing")}
                />
                <ToggleCard
                  icon={StretchVertical}
                  label={t.lineHeight}
                  level={settings.lineHeight}
                  levelLabel={t.level}
                  onClick={() => cycle("lineHeight")}
                />
                <ToggleCard
                  icon={Bold}
                  label={t.fontWeight}
                  level={settings.fontWeight}
                  levelLabel={t.level}
                  onClick={() => cycle("fontWeight")}
                />
              </div>
            </Section>

            <Section title={t.colorTitle}>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                <ToggleCard
                  icon={Moon}
                  label={t.darkContrast}
                  pressed={settings.contrast === "dark"}
                  onClick={() => chooseContrast("dark")}
                />
                <ToggleCard
                  icon={Sun}
                  label={t.lightContrast}
                  pressed={settings.contrast === "light"}
                  onClick={() => chooseContrast("light")}
                />
                <ToggleCard
                  icon={Contrast}
                  label={t.highContrast}
                  pressed={settings.contrast === "high"}
                  onClick={() => chooseContrast("high")}
                />
                <ToggleCard
                  icon={Droplets}
                  label={t.highSaturation}
                  pressed={settings.saturation === "high"}
                  onClick={() => chooseSaturation("high")}
                />
                <ToggleCard
                  icon={Droplet}
                  label={t.lowSaturation}
                  pressed={settings.saturation === "low"}
                  onClick={() => chooseSaturation("low")}
                />
                <ToggleCard
                  icon={Blend}
                  label={t.monochrome}
                  pressed={settings.saturation === "mono"}
                  onClick={() => chooseSaturation("mono")}
                />
              </div>
            </Section>

            <Section title={t.toolsTitle}>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                <ToggleCard
                  icon={BookOpen}
                  label={t.readingGuide}
                  pressed={settings.readingGuide}
                  onClick={() => toggle("readingGuide")}
                />
                <ToggleCard
                  icon={CirclePause}
                  label={t.stopAnimations}
                  pressed={settings.stopAnimations}
                  onClick={() => toggle("stopAnimations")}
                />
                <ToggleCard
                  icon={MousePointer2}
                  label={t.bigCursor}
                  pressed={settings.bigCursor}
                  onClick={() => toggle("bigCursor")}
                />
                <ToggleCard
                  icon={Volume2}
                  label={t.screenReader}
                  pressed={settings.screenReader}
                  onClick={() => toggle("screenReader")}
                />
              </div>
            </Section>
          </div>

          <div className="border-t border-zinc-200 bg-white px-5 py-3 text-center text-sm">
            <Link
              href="/accessibility-statement"
              onClick={() => setOpen(false)}
              className="font-medium text-ink underline underline-offset-4 hover:text-charcoal"
            >
              {t.statement}
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

function Section({ title, first, children }: { title: string; first?: boolean; children: ReactNode }) {
  return (
    <section className={first ? undefined : "mt-6"}>
      <h3 className="mb-2.5 text-xs font-semibold tracking-wide text-zinc-600 uppercase">{title}</h3>
      {children}
    </section>
  );
}

function ToggleCard({
  icon: Icon,
  label,
  pressed,
  level,
  levelLabel,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  /** For on/off options. Leveled options pass `level` instead. */
  pressed?: boolean;
  level?: A11yLevel;
  levelLabel?: string;
  onClick: () => void;
}) {
  const on = level !== undefined ? level > 0 : Boolean(pressed);
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={cn(
        "flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border bg-white px-2 py-3 text-center text-xs leading-tight font-medium text-ink transition-colors hover:border-zinc-400 focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none",
        on ? "border-charcoal bg-sage-light" : "border-zinc-200",
      )}
    >
      <Icon className="size-6" aria-hidden="true" />
      <span>{label}</span>
      {level !== undefined ? (
        <span className="flex gap-1">
          {[1, 2, 3].map((step) => (
            <span
              key={step}
              aria-hidden="true"
              className={cn("h-1 w-4 rounded-full", step <= level ? "bg-charcoal" : "bg-zinc-200")}
            />
          ))}
          <span className="sr-only">
            {levelLabel} {level}
          </span>
        </span>
      ) : null}
    </button>
  );
}
