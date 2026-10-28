import { TESTIMONIALS } from "@/constants/common";
import { SlideIn } from "@/components/common";
import { TestimonialSlider, type SliderTone } from "@/components/common/TestimonialSlider";
import { cn } from "@/lib/utils";

const RISE = 60;

type TestimonialsProps = {
  content?: typeof TESTIMONIALS;
  /** "dark" is the charcoal band (home, why-us, services); "light" is white with dark text (service pages). */
  tone?: SliderTone;
};

/** "What Our Patients Say" band with the video testimonial carousel, on charcoal or on white. */
export function Testimonials({ content = TESTIMONIALS, tone = "dark" }: TestimonialsProps) {
  const dark = tone === "dark";

  return (
    <section className={cn("overflow-hidden px-5 py-12 lg:py-20", dark ? "bg-charcoal" : "bg-white")}>
      <div className="mx-auto w-full max-w-300 text-center">
        <SlideIn once={false} from="bottom" distance={RISE}>
          <p className={cn("text-lg font-light lg:text-2xl", dark ? "text-white" : "text-ink-muted")}>
            {content.eyebrow}
          </p>
        </SlideIn>
        <SlideIn once={false} from="bottom" distance={RISE} delay={0.1}>
          <h2 className={cn("mt-1 text-3xl font-light lg:text-4xl lg:leading-11", dark ? "text-white" : "text-black")}>
            {content.heading}
          </h2>
        </SlideIn>
        <SlideIn once={false} from="bottom" distance={RISE} delay={0.2} className="mt-3 lg:mt-11.5">
          <TestimonialSlider videos={content.videos} tone={tone} />
        </SlideIn>
      </div>
    </section>
  );
}
