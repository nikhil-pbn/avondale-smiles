import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SlideIn } from "@/components/common";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { HeroButton } from "@/types";

type PhotoHeroProps = {
  image: StaticImageData;
  imageAlt?: string;
  /** Small line above the heading, e.g. "Services" on the service pages. */
  eyebrow?: string;
  heading: ReactNode;
  /** h1 on the page the hero belongs to; h2 if the page already has its H1 elsewhere. */
  headingAs?: "h1" | "h2";
  body?: ReactNode;
  buttons?: readonly HeroButton[];
  className?: string;
};

/**
 * Full-width photo hero from the new site (Why Us, every service page): dark gradient over the photo, centred
 * heading, short copy and outline buttons, all fading up on load.
 */
export function PhotoHero({
  image,
  imageAlt = "",
  eyebrow,
  heading,
  headingAs: Heading = "h1",
  body,
  buttons = [],
  className,
}: PhotoHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-112.5 items-end overflow-hidden px-7.5 pt-20 pb-7.5 lg:min-h-125 lg:items-center lg:px-5 lg:pt-25 lg:pb-0",
        className,
      )}
    >
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-black/30 to-transparent opacity-50" />

      <div className="relative mx-auto flex w-full max-w-300 flex-col items-center gap-4.5 text-center lg:gap-5">
        {eyebrow ? (
          <SlideIn once={false} from="bottom" delay={0.05}>
            <p className="text-lg font-medium text-white lg:text-xl">{eyebrow}</p>
          </SlideIn>
        ) : null}
        <SlideIn once={false} from="bottom" delay={0.15}>
          <Heading className="text-3xl leading-tight font-light text-white lg:text-6xl lg:leading-none">
            {heading}
          </Heading>
        </SlideIn>
        {body ? (
          <SlideIn once={false} from="bottom" delay={0.35} className="lg:max-w-3/5">
            <div className="flex flex-col gap-2.5 text-sm leading-normal text-balance text-white [&_p]:text-balance">
              {body}
            </div>
          </SlideIn>
        ) : null}
        {buttons.length ? (
          <SlideIn once={false} from="bottom" delay={0.45} className="lg:mt-8">
            <div className="flex flex-wrap justify-center gap-3.75 lg:gap-5">
              {buttons.map((button) => (
                <Button
                  key={button.href}
                  variant="pill-outline"
                  size="pill-wide"
                  nativeButton={false}
                  render={
                    button.external ? (
                      <a href={button.href} target="_blank" rel="noopener noreferrer" />
                    ) : (
                      <Link href={button.href} />
                    )
                  }
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </SlideIn>
        ) : null}
      </div>
    </section>
  );
}
