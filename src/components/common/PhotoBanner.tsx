import Image, { type StaticImageData } from "next/image";
import { SlideIn } from "@/components/common";

type PhotoBannerProps = {
  heading: string;
  image: StaticImageData;
};

/** Photo banner carrying an inner page's H1, sitting under the transparent header (About, Services). */
export function PhotoBanner({ heading, image }: PhotoBannerProps) {
  return (
    <section className="relative flex min-h-75 items-center justify-center overflow-hidden pt-20 lg:min-h-125 lg:pt-25">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-black to-transparent opacity-50" />
      <SlideIn once={false} from="bottom" distance={60} className="relative">
        <h1 className="px-5 text-center text-4xl font-light text-white lg:text-6xl">{heading}</h1>
      </SlideIn>
    </section>
  );
}
