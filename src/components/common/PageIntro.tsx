import { Fragment } from "react";
import { SlideIn } from "@/components/common";
import { cn } from "@/lib/utils";

const RISE = 60;

type PageIntroProps = {
  /** One string, or lines joined with line breaks. */
  heading: string | readonly string[];
  body: string;
  /** Background and spacing overrides for the band. */
  className?: string;
};

/** Centred heading and one paragraph introducing an inner page (About, Services). */
export function PageIntro({ heading, body, className }: PageIntroProps) {
  const lines = typeof heading === "string" ? [heading] : heading;

  return (
    <section className={cn("px-5 py-12 text-center lg:py-16", className)}>
      <div className="mx-auto w-full max-w-300">
        <SlideIn once={false} from="bottom" distance={RISE}>
          <h2 className="text-3xl leading-tight font-light text-black lg:text-4xl">
            {lines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
          </h2>
        </SlideIn>
        <SlideIn once={false} from="bottom" distance={RISE} delay={0.12}>
          <p className="mt-5 text-sm leading-normal text-ink-muted">{body}</p>
        </SlideIn>
      </div>
    </section>
  );
}
