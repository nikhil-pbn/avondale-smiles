import { ABOUT_PAGE } from "@/constants/about";
import { OfficeLocation } from "@/components/about/OfficeLocation";

type FindUsSectionProps = {
  content?: typeof ABOUT_PAGE.findUs;
};

/** "Where to Find Us": heading and copy above the shared map, hours and address block. */
export function FindUsSection({ content = ABOUT_PAGE.findUs }: FindUsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-300 px-5 py-12 lg:pt-0 lg:pb-20">
      <h2 className="text-center text-3xl font-light text-black lg:text-4xl">{content.heading}</h2>
      <p className="mx-auto mt-5 max-w-11/12 text-center text-sm leading-normal text-ink-muted lg:max-w-none">
        {content.body}
      </p>
      <OfficeLocation className="mt-2.5 lg:mt-7.5" />
    </section>
  );
}
