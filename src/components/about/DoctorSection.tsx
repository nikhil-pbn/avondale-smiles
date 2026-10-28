import Image from "next/image";
import { ABOUT_PAGE } from "@/constants/about";
import { drAgarwal } from "@/images";
import { cn } from "@/lib/utils";
import { SlideIn } from "@/components/common";

type DoctorSectionProps = {
  content?: typeof ABOUT_PAGE.doctor;
};

/**
 * "Where Care Begins": Dr. Agarwal's photo is the full-bleed background on desktop, with the text and the three
 * stats on the left; below lg the same photo sits in flow above the text on black.
 */
export function DoctorSection({ content = ABOUT_PAGE.doctor }: DoctorSectionProps) {
  return (
    <section className="relative flex flex-col items-center gap-10 bg-black px-5 py-12 lg:min-h-175 lg:flex-row lg:py-24">
      <Image
        src={drAgarwal}
        alt={content.photoAlt}
        loading="eager"
        sizes="100vw"
        className="h-auto w-full lg:absolute lg:inset-0 lg:h-full lg:object-cover lg:object-top"
      />
      <div className="relative mx-auto grid w-full max-w-300 lg:grid-cols-9">
        <SlideIn from="left" className="text-center lg:col-span-4 lg:text-left">
          <p className="text-3xl font-light text-white lg:text-2xl">{content.eyebrow}</p>
          <h2 className="mt-3 text-3xl leading-tight font-light text-white lg:text-4xl">{content.heading}</h2>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5.5 text-sm leading-5 text-white">
              {paragraph}
            </p>
          ))}
          <ul className="mt-9.5 grid grid-cols-3">
            {content.stats.map((stat, index) => (
              <li key={stat.value} className={cn("px-3.75 text-center", index === 1 && "border-x border-white")}>
                <p className="text-xl font-normal text-white lg:text-4xl">{stat.value}</p>
                <p className="mt-2.5 text-xs leading-4 text-white lg:mx-auto lg:max-w-27 lg:text-base lg:leading-6.5">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </SlideIn>
      </div>
    </section>
  );
}
