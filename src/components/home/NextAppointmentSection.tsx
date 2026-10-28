"use client";

import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { OfficeMap, SlideIn } from "@/components/common";
import { Button } from "@/components/ui";
import { useReducedMotionPreference } from "@/hooks";
import { HOME_PAGE } from "@/constants/home";
import { BUSINESS } from "@/constants/site";
import { callIcon, clockIcon, locationIcon } from "@/icons";
import { formatOpeningHours } from "@/lib/hours";
import { cn } from "@/lib/utils";

const ROW = "flex items-start justify-center gap-7.5 border-b border-zinc-300 py-3.75 lg:justify-start lg:py-6.25";
const ICON = "mt-0.5 h-5.5 w-5.5 shrink-0";
const EASE = { duration: 0.3, ease: "easeInOut" } as const;
const INSTANT = { duration: 0 } as const;

const hourRows = formatOpeningHours(BUSINESS.openingHours);

type NextAppointmentSectionProps = {
  content?: typeof HOME_PAGE.nextAppointment;
};

/** "Your Next Appointment Starts Here": hours (collapsible), address and phone beside the office map. */
export function NextAppointmentSection({ content = HOME_PAGE.nextAppointment }: NextAppointmentSectionProps) {
  const [hoursOpen, setHoursOpen] = useState(false);
  const ease = useReducedMotionPreference() ? INSTANT : EASE;
  const { phones } = BUSINESS;

  return (
    <section className="mx-auto w-full max-w-300 px-5 py-12 lg:py-20">
      <div className="grid gap-7.5 lg:grid-cols-2 lg:items-start lg:gap-12">
        <SlideIn from="left" duration={0.75} className="text-center lg:pr-7.5 lg:text-left">
          <h2 className="mb-5 text-3xl leading-normal font-light text-zinc-900 lg:mb-12.5 lg:text-4xl lg:leading-15">
            {content.headingLines[0]}
            <br />
            {content.headingLines[1]}
          </h2>

          <div className="border-b border-zinc-300">
            <button
              type="button"
              onClick={() => setHoursOpen((open) => !open)}
              aria-expanded={hoursOpen}
              aria-controls="home-office-hours"
              className={cn(ROW, "w-full cursor-pointer border-0 text-left")}
            >
              <Image src={clockIcon} alt="" className={ICON} />
              <span className="flex items-center gap-2 text-base text-zinc-800 lg:flex-1 lg:justify-between">
                {content.hoursLabel}
                <ChevronRight
                  className={cn("size-4 text-zinc-600 transition-transform duration-300", hoursOpen && "rotate-90")}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {hoursOpen ? (
                <motion.div
                  key="hours"
                  id="home-office-hours"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={ease}
                  className="overflow-hidden"
                >
                  <dl className="mx-auto mb-5 grid w-fit grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-left text-sm text-zinc-800 lg:mr-0 lg:ml-13">
                    {hourRows.map((row) => (
                      <div key={row.day} className="contents">
                        <dt className="w-27.5">{row.day}</dt>
                        <dd>{row.hours}</dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className={ROW}>
            <Image src={locationIcon} alt="" className={ICON} />
            <p className="text-left text-base leading-normal text-zinc-800">
              {BUSINESS.addressDisplay}
              <br />
              {content.addressNote}
            </p>
          </div>

          <div className={ROW}>
            <Image src={callIcon} alt="" className={ICON} />
            <a href={phones.primary.href} className="text-xl text-zinc-800 hover:underline">
              {phones.primary.display}
            </a>
          </div>

          <Button
            variant="pill-solid"
            size="pill"
            className="mt-5 py-3.5"
            nativeButton={false}
            render={<a href={content.href} target="_blank" rel="noopener noreferrer" />}
          >
            {content.buttonLabel}
          </Button>
        </SlideIn>

        <SlideIn from="right" delay={0.12} duration={0.75}>
          <OfficeMap className="h-62.5 lg:h-130" />
        </SlideIn>
      </div>
    </section>
  );
}
