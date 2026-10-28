import Image from "next/image";
import { ABOUT_PAGE } from "@/constants/about";
import { dentalTeam } from "@/images";
import { SlideIn } from "@/components/common";

const RISE = 60;

type TeamSectionProps = {
  content?: typeof ABOUT_PAGE.team;
};

/** "Our Team": centred heading and copy above the full-width team photo. */
export function TeamSection({ content = ABOUT_PAGE.team }: TeamSectionProps) {
  return (
    <section className="mx-auto w-full max-w-300 px-5 py-12 text-center lg:py-20">
      <SlideIn once={false} from="bottom" distance={RISE}>
        <p className="text-lg font-light text-black lg:text-2xl">{content.eyebrow}</p>
      </SlideIn>
      <SlideIn once={false} from="bottom" distance={RISE} delay={0.1}>
        <h2 className="mt-2.5 text-3xl leading-tight font-light text-black lg:text-4xl">{content.heading}</h2>
      </SlideIn>
      <SlideIn once={false} from="bottom" distance={RISE} delay={0.18}>
        <p className="mx-auto mt-2.5 text-sm leading-normal text-ink-muted lg:max-w-3/4">{content.body}</p>
      </SlideIn>
      <SlideIn once={false} from="bottom" distance={RISE} delay={0.26}>
        <Image
          src={dentalTeam}
          alt={content.photoAlt}
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="mt-10 h-auto w-full"
        />
      </SlideIn>
    </section>
  );
}
