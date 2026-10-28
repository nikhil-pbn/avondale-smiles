import Image, { type StaticImageData } from "next/image";
import { SlideIn } from "@/components/common";
import { Button } from "@/components/ui";
import { HOME_PAGE } from "@/constants/home";
import { clockPhoto, reception } from "@/images";
import type { WelcomeContent } from "@/types";

type WelcomeOfferSectionProps = {
  content?: WelcomeContent;
  /** Optional centred heading above the band (the Services page has one, the home page does not). */
  title?: string;
};

/** Two charcoal rows: the new-patient whitening offer beside the reception photo, then the online forms beside the clock photo. */
export function WelcomeOfferSection({ content = HOME_PAGE.welcome, title }: WelcomeOfferSectionProps) {
  return (
    <section className="text-white">
      {title ? (
        <SlideIn from="bottom" distance={60}>
          <h2 className="px-5 pb-7.5 text-center text-3xl font-light text-black lg:pb-12 lg:text-4xl">{title}</h2>
        </SlideIn>
      ) : null}
      <div className="bg-charcoal">
        <div className="grid lg:grid-cols-2 lg:items-center">
          <Photo src={reception} alt={content.offer.photoAlt} from="left" />
          <Copy from="right" align="start" {...content.offer} />
        </div>
        <div className="grid lg:grid-cols-2 lg:items-center">
          <Copy from="left" align="end" {...content.forms} />
          <Photo src={clockPhoto} alt={content.forms.photoAlt} from="right" className="order-first lg:order-none" />
        </div>
      </div>
    </section>
  );
}

function Photo({
  src,
  alt,
  from,
  className,
}: {
  src: StaticImageData;
  alt: string;
  from: "left" | "right";
  className?: string;
}) {
  return (
    <SlideIn from={from} className={className}>
      <Image
        src={src}
        alt={alt}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="h-50 w-full object-cover lg:h-auto"
      />
    </SlideIn>
  );
}

function Copy({
  heading,
  subheading,
  body,
  buttonLabel,
  href,
  from,
  align,
}: {
  heading: string;
  subheading?: string;
  body: string;
  buttonLabel: string;
  href: string;
  from: "left" | "right";
  /** Which edge of its half the text block hugs on desktop: the inner edge next to the photo. */
  align: "start" | "end";
}) {
  return (
    <SlideIn
      from={from}
      delay={0.12}
      className={align === "end" ? "flex justify-center lg:justify-end" : "flex justify-center lg:justify-start"}
    >
      <div className="flex w-full max-w-150 flex-col items-center gap-6.25 px-7.5 py-12 text-center lg:items-start lg:gap-5 lg:px-12 lg:py-10 lg:text-left">
        <h2 className="text-3xl font-light lg:text-4xl">{heading}</h2>
        {subheading ? <p className="text-base leading-5.5 font-medium lg:max-w-4/5">{subheading}</p> : null}
        <p className="text-sm leading-5.5 lg:max-w-4/5">{body}</p>
        <Button
          variant="pill"
          size="pill"
          className="min-w-46.25 px-7.5 font-medium before:[--sweep-fill:var(--color-charcoal)] hover:text-white"
          nativeButton={false}
          render={<a href={href} target="_blank" rel="noopener noreferrer" />}
        >
          {buttonLabel}
        </Button>
      </div>
    </SlideIn>
  );
}
