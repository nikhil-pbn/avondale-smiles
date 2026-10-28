import { SlideIn } from "@/components/common";
import { Button } from "@/components/ui";
import { BUSINESS, PATIENT_LINKS } from "@/constants/site";
import type { ServiceCta as ServiceCtaContent } from "@/types";

const RISE = 60;

type ServiceCtaProps = {
  content: ServiceCtaContent;
  buttonLabel?: string;
};

/** Closing call-to-action card on each service page: a line of encouragement, the phone number and the booking button. */
export function ServiceCta({ content, buttonLabel = "Book an Appointment" }: ServiceCtaProps) {
  const { phones } = BUSINESS;

  return (
    <section className="mx-auto w-full max-w-300 px-5 py-12 lg:py-20">
      <div className="rounded-3xl bg-mist-light px-5 py-12 text-center lg:rounded-4xl lg:px-10 lg:py-20">
        <SlideIn from="bottom" distance={RISE}>
          <h2 className="text-3xl leading-tight font-light text-black lg:text-4xl">{content.heading}</h2>
        </SlideIn>
        {content.body ? (
          <SlideIn from="bottom" distance={RISE} delay={0.1}>
            <p className="mx-auto mt-5 max-w-200 text-base leading-normal text-ink-muted lg:text-lg">{content.body}</p>
          </SlideIn>
        ) : null}
        <SlideIn from="bottom" distance={RISE} delay={0.1}>
          <p className="mx-auto mt-5 max-w-200 text-lg leading-normal font-light text-black lg:text-xl">
            {content.lead}
            {content.showPhone ? (
              <>
                {" "}
                <a href={phones.primary.href} className="font-normal text-ink hover:underline">
                  {phones.primary.display}
                </a>
              </>
            ) : null}
          </p>
        </SlideIn>
        <SlideIn from="bottom" distance={RISE} delay={0.2}>
          <Button
            variant="pill-dark"
            size="pill"
            className="mx-auto mt-8 flex w-fit border-charcoal px-7.5 py-3.25 text-charcoal before:[--sweep-fill:var(--color-charcoal)] hover:border-charcoal lg:mt-10"
            nativeButton={false}
            render={<a href={PATIENT_LINKS.bookAppointment} target="_blank" rel="noopener noreferrer" />}
          >
            {buttonLabel}
          </Button>
        </SlideIn>
      </div>
    </section>
  );
}
