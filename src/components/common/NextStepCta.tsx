import Image from "next/image";
import { SlideIn } from "@/components/common";
import { Button } from "@/components/ui";
import { NEXT_STEP_CTA } from "@/constants/common";
import { circlesLarge, drAgarwalStanding } from "@/images";

type NextStepCtaProps = {
  content?: typeof NEXT_STEP_CTA;
};

/** "Ready to Take the Next Step?" booking call-to-action with Dr. Agarwal's cut-out photo on the pale blue band. */
export function NextStepCta({ content = NEXT_STEP_CTA }: NextStepCtaProps) {
  return (
    <section className="overflow-hidden bg-mist px-5 pt-12 lg:pt-20">
      <div className="mx-auto grid w-full max-w-300 gap-5 lg:grid-cols-2 lg:items-center">
        <div className="text-center lg:text-left">
          <SlideIn from="left">
            <h2 className="text-3xl leading-tight font-semibold text-zinc-950 lg:max-w-4/5 lg:text-5xl">
              {content.heading}
            </h2>
          </SlideIn>
          <SlideIn from="left" delay={0.1}>
            <p className="mt-3.75 text-sm leading-6.5 text-zinc-950 lg:mt-7.5 lg:max-w-3/4 lg:text-base lg:leading-7.5">
              {content.body}
            </p>
          </SlideIn>
          <SlideIn from="left" delay={0.2}>
            <Button
              variant="pill-dark"
              size="pill"
              className="mx-auto mt-3.75 flex w-fit border-charcoal px-7.5 py-3.25 text-charcoal before:[--sweep-fill:var(--color-charcoal)] hover:border-charcoal lg:mx-0 lg:mt-7.5"
              nativeButton={false}
              render={<a href={content.href} target="_blank" rel="noopener noreferrer" />}
            >
              {content.buttonLabel}
            </Button>
          </SlideIn>
        </div>

        <SlideIn from="right" className="relative">
          <Image src={circlesLarge} alt="" aria-hidden="true" className="absolute top-1/4 left-0 w-11/12" />
          <Image
            src={drAgarwalStanding}
            alt={content.imageAlt}
            loading="eager"
            sizes="(min-width: 1024px) 500px, 80vw"
            className="relative mx-auto h-auto w-9/10 max-w-120 lg:mr-0 lg:w-9/10 lg:max-w-none"
          />
        </SlideIn>
      </div>
    </section>
  );
}
