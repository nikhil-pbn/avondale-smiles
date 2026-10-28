import Image from "next/image";
import { ABOUT_PAGE } from "@/constants/about";
import { extendedTeam } from "@/images";
import { SlideIn } from "@/components/common";

type ExtendedTeamSectionProps = {
  content?: typeof ABOUT_PAGE.coverage;
};

/** "Your Care, Always Covered": the extended providers on the pale blue band with a photo on the right. */
export function ExtendedTeamSection({ content = ABOUT_PAGE.coverage }: ExtendedTeamSectionProps) {
  return (
    <section className="mb-16 bg-mist py-12 lg:py-16">
      <div className="mx-auto grid w-full max-w-300 gap-7.5 px-5 lg:grid-cols-5 lg:items-center">
        <div className="text-center lg:col-span-3 lg:text-left">
          <SlideIn from="left">
            <h2 className="text-3xl leading-tight font-semibold text-zinc-950 lg:max-w-4/5 lg:text-4xl">
              {content.heading}
            </h2>
          </SlideIn>
          <SlideIn from="left" delay={0.1}>
            <p className="mt-3.75 text-sm leading-relaxed text-zinc-950 lg:max-w-4/5">{content.body}</p>
          </SlideIn>
          <SlideIn from="left">
            <h3 className="mt-12.5 text-3xl font-normal text-zinc-950 lg:max-w-4/5">{content.subheading}</h3>
          </SlideIn>
          <SlideIn from="left">
            <ul className="mt-5 text-3xl leading-tight font-semibold text-zinc-950 lg:max-w-4/5">
              {content.providers.map((provider) => (
                <li key={provider}>{provider}</li>
              ))}
            </ul>
          </SlideIn>
        </div>
        <SlideIn from="right" className="lg:col-span-2">
          <Image
            src={extendedTeam}
            alt={content.photoAlt}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="mx-auto h-auto w-full max-w-120 lg:mr-0 lg:max-w-none"
          />
        </SlideIn>
      </div>
    </section>
  );
}
