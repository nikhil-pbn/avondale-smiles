import { TOP_DENTIST_AWARD } from "@/constants/why-us";
import { circlesSmall, topDentistPlaque } from "@/images";
import Image from "next/image";
import { SlideIn } from "@/components/common";

type AwardBannerProps = {
  content?: typeof TOP_DENTIST_AWARD;
};

/** "Voted as Seattle's Top Dentist" on the pale blue band, with the plaque photo on the right. */
export function AwardBanner({ content = TOP_DENTIST_AWARD }: AwardBannerProps) {
  return (
    <section className="overflow-hidden bg-mist px-5 py-10 lg:py-12">
      <div className="mx-auto grid w-full max-w-300 gap-10 lg:grid-cols-2 lg:items-center lg:gap-0">
        <div className="relative text-center lg:text-left">
          <Image
            src={circlesSmall}
            alt=""
            aria-hidden="true"
            className="absolute -top-65 -left-37.5 hidden w-56.75 lg:block"
          />
          <SlideIn from="left">
            <h2 className="text-3xl leading-tight font-semibold text-zinc-950 lg:max-w-4/5 lg:text-5xl">
              {content.heading}
            </h2>
          </SlideIn>
          <SlideIn from="left" delay={0.1}>
            <p className="mt-3.25 text-2xl font-light text-zinc-950 lg:mt-5 lg:text-4xl">{content.years}</p>
          </SlideIn>
        </div>
        <SlideIn from="right">
          <Image
            src={topDentistPlaque}
            alt={content.plaqueAlt}
            sizes="(min-width: 1024px) 600px, 100vw"
            className="mx-auto h-auto w-full max-w-120 lg:mr-0 lg:max-w-none"
          />
        </SlideIn>
      </div>
    </section>
  );
}
