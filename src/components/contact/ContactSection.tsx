import { CONTACT_PAGE } from "@/constants/contact";
import { BUSINESS } from "@/constants/site";
import { OfficeInfoCards, OfficeMap, SlideIn } from "@/components/common";

const SUBHEADING = "mb-2.5 text-xl font-light leading-tight tracking-tight text-ink";

type ContactSectionProps = {
  content?: typeof CONTACT_PAGE;
};

/** The contact page body: heading, intro and map on the left; hours, address and phone details on the right. */
export function ContactSection({ content = CONTACT_PAGE }: ContactSectionProps) {
  const { heading, intro, textUs, byPhone } = content;
  const { phones } = BUSINESS;

  return (
    <section className="mx-auto w-full max-w-300 px-5 py-16 md:py-24">
      <div className="grid gap-9 lg:grid-cols-8 lg:items-start">
        <div className="lg:col-span-5">
          <h1 className="mb-3 text-3xl leading-tight font-light tracking-tight text-ink md:text-4xl">{heading}</h1>
          <p className="mb-5 text-sm leading-normal text-ink-soft">{intro}</p>
          <SlideIn from="left" fromMobile="bottom">
            <OfficeMap className="h-80 md:h-115" />
          </SlideIn>

          <div className="mt-12">
            <h2 className={SUBHEADING}>{textUs.heading}</h2>
            <p className="text-sm leading-normal text-black">
              {textUs.body}
              <br />
              {textUs.visitBefore}
              {BUSINESS.addressDisplay}
              {textUs.visitAfter}
            </p>
          </div>
        </div>

        <SlideIn from="right" fromMobile="bottom" delay={0.12} className="lg:col-span-3">
          <OfficeInfoCards />

          <div className="mt-12">
            <h2 className={SUBHEADING}>{byPhone.heading}</h2>
            <p className="text-sm leading-normal text-black">
              {byPhone.bodyBefore}
              <a href={phones.primary.href} className="hover:underline">
                {phones.primary.display}
              </a>
              {byPhone.bodyAfter}
            </p>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
