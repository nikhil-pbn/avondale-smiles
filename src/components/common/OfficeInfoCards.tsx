import Image from "next/image";
import { OFFICE_CARDS } from "@/constants/office";
import { BUSINESS, PATIENT_LINKS } from "@/constants/site";
import { clockIcon, locationIcon } from "@/icons";
import { formatOpeningHours } from "@/lib/hours";
import { cn } from "@/lib/utils";

const hourRows = formatOpeningHours(BUSINESS.openingHours);
const { phones } = BUSINESS;

type OfficeInfoCardsProps = {
  /** "Office Hours" heading level: h2 where the cards are a top-level block (contact page), h3 under a section heading (about page). */
  headingAs?: "h2" | "h3";
  /** Extra classes for the hours card, e.g. a tighter vertical padding. */
  hoursClassName?: string;
  className?: string;
};

/** The grey office-hours card and address card from the new site, shared by the contact and about pages. */
export function OfficeInfoCards({ headingAs: Heading = "h2", hoursClassName, className }: OfficeInfoCardsProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className={cn("rounded-t bg-surface-muted px-7.5 py-10", hoursClassName)}>
        <div className="mb-5 flex items-center gap-3">
          <Image src={clockIcon} alt="" width={26} height={26} className="h-6.5 w-6.5" />
          <Heading className="text-xl font-normal text-ink">{OFFICE_CARDS.hoursHeading}</Heading>
        </div>
        <ul>
          {hourRows.map((row) => (
            <li key={row.day} className="flex items-center justify-between pb-2.5 text-base">
              <span className="font-semibold text-zinc-800">{row.day}</span>
              <span className="text-right font-medium text-ink-muted">{row.hours}</span>
            </li>
          ))}
        </ul>
        <p className="mt-7.5 text-lg font-medium text-black">{OFFICE_CARDS.saturdayNote}</p>
        <p className="mt-1.5 text-sm font-light text-ink-soft">
          {OFFICE_CARDS.callLabel}{" "}
          <strong className="font-medium text-ink">
            <a href={phones.primary.href} className="underline hover:no-underline">
              {phones.primary.display}
            </a>
          </strong>
        </p>
        <a
          href={PATIENT_LINKS.bookAppointment}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 inline-block text-sm text-black hover:text-zinc-600"
        >
          {OFFICE_CARDS.bookLabel}
        </a>
      </div>

      <div className="mt-4 flex items-start gap-4 rounded-b bg-surface-muted px-7.5 py-5">
        <Image src={locationIcon} alt="" width={26} height={26} className="mt-0.5 h-6.5 w-6.5 shrink-0" />
        <a
          href={BUSINESS.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm leading-relaxed font-semibold text-ink-muted"
        >
          {BUSINESS.addressDisplay}
          <br />
          {OFFICE_CARDS.addressNote}
        </a>
      </div>
    </div>
  );
}
