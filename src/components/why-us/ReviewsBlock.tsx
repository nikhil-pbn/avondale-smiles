import Image from "next/image";
import { REVIEWS_BLOCK } from "@/constants/why-us";
import { facebookWordmark, googleReviewsLogo, yelpWordmark } from "@/images";
import { SlideIn } from "@/components/common";

const RISE = 60;
const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

type ReviewsBlockProps = {
  content?: typeof REVIEWS_BLOCK;
};

/** Google review count with a link to leave a review, then the Facebook and Yelp profiles. */
export function ReviewsBlock({ content = REVIEWS_BLOCK }: ReviewsBlockProps) {
  return (
    <section className="mx-auto flex w-full max-w-300 flex-col items-center px-7.5 py-12 text-center lg:px-5 lg:py-24">
      <SlideIn once={false} from="bottom" distance={RISE} delay={0.2}>
        <a href={content.href} {...EXTERNAL} aria-label="Avondale Smiles on Google" className="block">
          <Image src={googleReviewsLogo} alt="Google" className="h-auto w-20 lg:w-30" />
        </a>
      </SlideIn>
      <SlideIn once={false} from="bottom" distance={RISE}>
        <h2 className="mt-4 text-3xl font-light text-black lg:mt-5 lg:text-4xl">{content.heading}</h2>
      </SlideIn>
      <SlideIn once={false} from="bottom" distance={RISE} delay={0.1}>
        <a
          href={content.href}
          {...EXTERNAL}
          className="mt-4 inline-block text-lg font-light text-black underline underline-offset-4 hover:no-underline lg:mt-5 lg:text-2xl"
        >
          {content.linkLabel}
        </a>
      </SlideIn>

      <hr className="my-7.5 w-full border-black lg:my-17.5" />

      <SlideIn once={false} from="bottom" distance={RISE} delay={0.1}>
        <p className="text-xl font-light text-black lg:text-2xl">{content.alsoLabel}</p>
      </SlideIn>
      <SlideIn once={false} from="bottom" distance={RISE} delay={0.2}>
        <div className="mt-5 flex items-center justify-center gap-5 lg:mt-10 lg:gap-12.5">
          <a href={content.facebookHref} {...EXTERNAL} aria-label="Avondale Smiles on Facebook">
            <Image src={facebookWordmark} alt="Facebook" className="h-auto w-50 lg:w-75" />
          </a>
          <a href={content.yelpHref} {...EXTERNAL} aria-label="Avondale Smiles on Yelp">
            <Image src={yelpWordmark} alt="Yelp" className="h-auto w-25 lg:w-37.5" />
          </a>
        </div>
      </SlideIn>
    </section>
  );
}
