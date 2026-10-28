import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { SlideIn } from "@/components/common";
import { SERVICES_PAGE } from "@/constants/services";
import {
  serviceIconEmergency,
  serviceIconGeneral,
  serviceIconImplants,
  serviceIconOrthodontic,
  serviceIconPediatric,
  serviceIconSedation,
} from "@/images";
import type { ServiceCard } from "@/types";

const RISE = 60;

const ICONS: Record<string, StaticImageData> = {
  "general-dentistry": serviceIconGeneral,
  "pediatric-dentistry": serviceIconPediatric,
  "sedation-dentistry": serviceIconSedation,
  "orthodontic-services": serviceIconOrthodontic,
  "dental-implants": serviceIconImplants,
  "emergency-dentistry": serviceIconEmergency,
};

type ServicesOverviewProps = {
  content?: typeof SERVICES_PAGE.overview;
};

/**
 * "Care Built Around You": intro copy over a hairline grid of the six services, each linking to its own page.
 * The hairlines are the grid's 1px gaps showing the zinc background through the white cells, so they work at
 * any column count: one per row on phones, two on sm and md, three on lg.
 */
export function ServicesOverview({ content = SERVICES_PAGE.overview }: ServicesOverviewProps) {
  return (
    <section className="mx-auto w-full max-w-300 px-5 py-12 lg:py-20">
      <div className="mx-auto flex max-w-200 flex-col items-center gap-2.5 text-center lg:gap-3.5">
        <SlideIn from="bottom" distance={RISE}>
          <p className="text-lg font-light text-black lg:text-2xl">{content.eyebrow}</p>
        </SlideIn>
        <SlideIn from="bottom" distance={RISE} delay={0.1}>
          <h2 className="text-3xl leading-tight font-light text-black lg:text-4xl">{content.heading}</h2>
        </SlideIn>
        <SlideIn from="bottom" distance={RISE} delay={0.18}>
          <p className="text-sm leading-normal text-ink-muted">{content.body}</p>
        </SlideIn>
      </div>

      <ul className="mt-7.5 grid gap-px bg-zinc-200 sm:grid-cols-2 lg:mt-12.5 lg:grid-cols-3">
        {content.items.map((item, index) => (
          <ServiceSummary key={item.slug} item={item} index={index} />
        ))}
      </ul>
    </section>
  );
}

function ServiceSummary({ item, index }: { item: ServiceCard; index: number }) {
  return (
    <li className="bg-white">
      <SlideIn from={index % 2 ? "right" : "left"} delay={0.1 * (index % 3)} className="h-full" innerClassName="h-full">
        <Link
          href={`/services/${item.slug}`}
          className="group flex h-full flex-col items-center gap-3.5 px-6.25 py-6.25 text-center lg:px-10 lg:py-7.5"
        >
          <Image src={ICONS[item.slug]} alt="" className="h-10 w-auto" />
          <h3 className="text-lg font-medium text-zinc-900 underline-offset-4 group-hover:underline">{item.label}</h3>
          <p className="text-sm leading-5.5 text-zinc-600">{item.description}</p>
        </Link>
      </SlideIn>
    </li>
  );
}
