import Image from "next/image";
import { SlideIn } from "@/components/common";
import { HOME_PAGE } from "@/constants/home";
import { drAgarwalSeated, meetDoctorBackground, signature } from "@/images";

type MeetDoctorSectionProps = {
  content?: typeof HOME_PAGE.doctor;
};

/** "Meet Dr. Aditi": her cut-out photo beside her message and signature, over the darkened treatment-room photo. */
export function MeetDoctorSection({ content = HOME_PAGE.doctor }: MeetDoctorSectionProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal-deep px-5 pt-12 lg:pt-16">
      <Image src={meetDoctorBackground} alt="" fill sizes="100vw" className="object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-black from-3% to-transparent to-73% opacity-50 lg:opacity-100"
      />

      <div className="relative mx-auto grid w-full max-w-300 lg:grid-cols-2 lg:items-start">
        <SlideIn from="left" className="order-last lg:order-none">
          <Image
            src={drAgarwalSeated}
            alt={content.photoAlt}
            sizes="(min-width: 1024px) 600px, (min-width: 768px) 480px, (min-width: 640px) 400px, 340px"
            className="mx-auto h-auto w-full max-w-85 sm:max-w-100 md:max-w-120 lg:max-w-none"
          />
        </SlideIn>

        <div className="px-1.25 text-center lg:px-0 lg:pt-16 lg:text-left">
          <SlideIn from="right">
            <h2 className="text-3xl font-light text-white lg:text-5xl">{content.heading}</h2>
          </SlideIn>
          {content.paragraphs.map((paragraph, index) => (
            <SlideIn key={paragraph} from="right" delay={0.1 * (index + 1)}>
              <p className="mt-5 text-sm leading-5.5 text-white">{paragraph}</p>
            </SlideIn>
          ))}
          <SlideIn from="right" delay={0.4}>
            <Image
              src={signature}
              alt={content.signatureAlt}
              className="mx-auto mt-6 mb-7.5 h-auto w-7/10 lg:mx-0 lg:mb-0 lg:w-1/2"
            />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
