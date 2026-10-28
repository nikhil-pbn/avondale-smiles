import Image from "next/image";
import { WHY_CHOOSE_US } from "@/constants/common";
import { dentalChair } from "@/images";
import { SlideIn } from "@/components/common";

const RISE = 60;

type WhyChooseUsProps = {
  content?: typeof WHY_CHOOSE_US;
};

/** "Why Choose Us": centred heading, the treatment-chair photo on the left and three short points on the right. */
export function WhyChooseUs({ content = WHY_CHOOSE_US }: WhyChooseUsProps) {
  return (
    <section className="mx-auto w-full max-w-300 px-5 py-12 lg:py-20">
      <div className="text-center">
        <SlideIn once={false} from="bottom" distance={RISE}>
          <p className="text-lg font-light text-black lg:text-2xl">{content.eyebrow}</p>
        </SlideIn>
        <SlideIn once={false} from="bottom" distance={RISE} delay={0.1}>
          <h2 className="mt-1 text-3xl leading-9 font-light text-black lg:text-4xl lg:leading-11">{content.heading}</h2>
        </SlideIn>
      </div>

      <div className="mt-7.5 grid gap-10 lg:mt-15 lg:grid-cols-2 lg:items-center lg:gap-12.5">
        <SlideIn from="left" delay={0.05}>
          <Image
            src={dentalChair}
            alt={content.imageAlt}
            sizes="(min-width: 1024px) 575px, 100vw"
            className="mx-auto h-auto w-full max-w-120 lg:max-w-none"
          />
        </SlideIn>
        <SlideIn from="right" delay={0.16}>
          <ul className="flex flex-col gap-7.5 px-1.25 lg:gap-10 lg:px-0">
            {content.features.map((feature) => (
              <li key={feature.heading} className="text-center lg:text-left">
                <h3 className="text-xl font-normal text-black lg:text-2xl">{feature.heading}</h3>
                <p className="mt-2.5 text-sm leading-4.25 text-black lg:mt-4.5">{feature.body}</p>
              </li>
            ))}
          </ul>
        </SlideIn>
      </div>
    </section>
  );
}
