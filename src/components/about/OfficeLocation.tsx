import { cn } from "@/lib/utils";
import { OfficeInfoCards, OfficeMap, SlideIn } from "@/components/common";

type OfficeLocationProps = {
  /** "Office Hours" heading level; h3 when the block sits under a section heading. */
  headingAs?: "h2" | "h3";
  className?: string;
};

/**
 * The new site's "Where to Find Us" block: the office map beside the hours and address cards,
 * the two halves sliding in from opposite sides (fading only on phones).
 */
export function OfficeLocation({ headingAs = "h3", className }: OfficeLocationProps) {
  return (
    <div className={cn("grid gap-7 lg:grid-cols-8 lg:items-stretch", className)}>
      <SlideIn
        once={false}
        from="left"
        fromMobile="none"
        distance={80}
        duration={0.75}
        className="lg:col-span-5"
        innerClassName="h-full"
      >
        <OfficeMap className="h-85 lg:h-full lg:min-h-130" />
      </SlideIn>
      <SlideIn once={false} from="right" fromMobile="none" distance={80} duration={0.75} className="lg:col-span-3">
        <OfficeInfoCards headingAs={headingAs} hoursClassName="py-5" />
      </SlideIn>
    </div>
  );
}
