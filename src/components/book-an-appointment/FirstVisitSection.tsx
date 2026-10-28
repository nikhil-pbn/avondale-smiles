import Image from "next/image";
import { SlideIn } from "@/components/common";
import { Button } from "@/components/ui";
import { BOOK_PAGE } from "@/constants/book-an-appointment";
import { calendarCheck } from "@/images";

type FirstVisitSectionProps = {
  content?: typeof BOOK_PAGE.firstVisit;
};

/** "Get Ready for Your First Visit": calendar icon on the left, heading, copy and the booking button on the right. */
export function FirstVisitSection({ content = BOOK_PAGE.firstVisit }: FirstVisitSectionProps) {
  return (
    <section className="mx-auto flex min-h-81.25 w-full max-w-300 flex-col justify-center px-5 py-12 lg:min-h-150 lg:py-24">
      <div className="grid gap-5 lg:grid-cols-4 lg:items-center lg:gap-15">
        <SlideIn from="left" className="flex justify-center">
          <Image src={calendarCheck} alt={content.iconAlt} className="h-auto w-37.5 lg:w-57.5" />
        </SlideIn>
        <SlideIn from="right" delay={0.12} className="text-center lg:col-span-3 lg:text-left">
          <h1 className="mb-5 text-3xl leading-tight font-light tracking-tight text-ink lg:text-4xl">
            {content.heading}
          </h1>
          <p className="mb-5 text-sm leading-snug font-medium text-ink-soft lg:mb-9 lg:text-base">{content.body}</p>
          <Button
            variant="pill-dark"
            size="pill"
            className="px-7.5"
            nativeButton={false}
            render={<a href={content.href} target="_blank" rel="noopener noreferrer" />}
          >
            {content.buttonLabel}
          </Button>
        </SlideIn>
      </div>
    </section>
  );
}
