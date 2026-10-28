import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { SlideIn } from "@/components/common";
import { Button } from "@/components/ui";
import { HOME_PAGE } from "@/constants/home";
import { BUSINESS } from "@/constants/site";
import { serviceGeneral, serviceImplants, serviceOrthodontic, servicePediatric, serviceSedation } from "@/images";
import { cn } from "@/lib/utils";
import type { ServiceCard } from "@/types";

const RISE = 60;

const TILE_IMAGES: Record<string, StaticImageData> = {
  "general-dentistry": serviceGeneral,
  "pediatric-dentistry": servicePediatric,
  "sedation-dentistry": serviceSedation,
  "orthodontic-services": serviceOrthodontic,
  "dental-implants": serviceImplants,
};

/** Desktop entry direction and delay per tile, as on the staging site (the bottom row comes in later). */
const TILE_MOTION: Record<string, { from: "left" | "right" | "bottom"; delay: number }> = {
  "general-dentistry": { from: "left", delay: 0 },
  "pediatric-dentistry": { from: "right", delay: 0 },
  "sedation-dentistry": { from: "left", delay: 0.6 },
  "orthodontic-services": { from: "bottom", delay: 0.6 },
  "dental-implants": { from: "right", delay: 0.6 },
};

/**
 * The grid has twice as many columns as tiles per row and every tile spans two, so a short last row can be centred
 * by starting its first tile one column in. sm: 2 per row (2+2+1), md: 3 per row (3+2), lg: 3 per row with the
 * heading in the middle cell of the top row, so the tiles flow around it.
 */
const TILE_LAYOUT = [
  "lg:order-1",
  "lg:order-3",
  "lg:order-4",
  "md:col-start-2 lg:order-5 lg:col-start-auto",
  "sm:col-start-2 md:col-start-auto lg:order-6",
];

type ServicesGridProps = {
  content?: typeof HOME_PAGE.services;
};

/** "Our Services": photo tiles that reveal their description on hover, arranged around (lg) or under the heading. */
export function ServicesGrid({ content = HOME_PAGE.services }: ServicesGridProps) {
  const { phones } = BUSINESS;

  return (
    <section className="mx-auto w-full max-w-300 px-5 py-12 lg:py-20">
      <div className="grid gap-5 sm:grid-cols-4 md:grid-cols-6">
        <SlideIn
          from="bottom"
          distance={RISE}
          className="order-first mb-5 flex items-center justify-center sm:col-span-4 md:col-span-6 lg:order-2 lg:col-span-2 lg:mb-0"
        >
          <div className="flex max-w-150 flex-col items-center gap-3.25 text-center">
            <p className="text-lg font-light text-black lg:text-2xl">{content.eyebrow}</p>
            <h2 className="text-3xl leading-9 font-light text-black lg:leading-11">{content.heading}</h2>
            <p className="text-sm leading-4.25 text-black">{content.body}</p>
          </div>
        </SlideIn>
        {content.items.map((item, index) => (
          <ServiceTile key={item.slug} item={item} index={index} />
        ))}
      </div>

      <p className="mx-auto mt-7.5 max-w-5/6 text-center text-base leading-6.25 text-black lg:mt-10 lg:max-w-none">
        {content.helpBefore}
        <a href={phones.secondary.href} className="underline hover:no-underline">
          {phones.secondary.display}
        </a>
        {content.helpAfter}
      </p>
    </section>
  );
}

function ServiceTile({ item, index }: { item: ServiceCard; index: number }) {
  const motion = TILE_MOTION[item.slug] ?? { from: "bottom" as const, delay: 0 };
  return (
    <SlideIn
      from={motion.from}
      fromMobile={index % 2 ? "right" : "left"}
      delay={motion.delay}
      className={cn("sm:col-span-2", TILE_LAYOUT[index])}
    >
      <Link
        href={`/services/${item.slug}`}
        className="group relative flex min-h-67.5 flex-col overflow-hidden p-5 text-center"
      >
        <Image
          src={TILE_IMAGES[item.slug]}
          alt=""
          fill
          sizes="(min-width: 1280px) 390px, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-75"
        />

        <span className="relative flex min-h-45 w-full items-center justify-center">
          <span className="block text-sm leading-4.25 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {item.description}
          </span>
        </span>
        <span className="relative flex min-h-12.5 items-center justify-center">
          <Button
            variant="pill"
            size="pill"
            className="px-6.25 font-medium text-zinc-900 before:[--sweep-fill:var(--color-zinc-900)] hover:text-white"
            nativeButton={false}
            render={<span />}
          >
            {item.label}
          </Button>
        </span>
      </Link>
    </SlideIn>
  );
}
