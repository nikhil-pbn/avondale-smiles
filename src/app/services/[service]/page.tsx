import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { JsonLd, PhotoHero, Testimonials, WelcomeOfferSection } from "@/components";
import { ServiceCta, ServiceTabs } from "@/components/services";
import { SERVICES_WELCOME } from "@/constants/common";
import { SERVICE_DETAILS, SERVICE_HERO_BUTTONS } from "@/constants/services";
import { OPEN_GRAPH_DEFAULTS, SITE_NAME } from "@/constants/site";
import { pageGraph } from "@/lib/schema";
import { SERVICE_SLUGS, getService } from "@/app/services/[service]/services";

const HERO_EYEBROW = "Services";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((service) => ({ service }));
}

export async function generateMetadata({ params }: PageProps<"/services/[service]">): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const path = `/services/${service.slug}`;
  return {
    title: service.absoluteTitle ? { absolute: service.title } : service.title,
    description: service.description,
    alternates: { canonical: path },
    openGraph: { ...OPEN_GRAPH_DEFAULTS, url: path },
  };
}

/**
 * Only the hero, the tabbed copy and the closing card change per service; Testimonials and the welcome band are
 * the same on every service page, so they sit outside the Suspense boundaries that read the route params.
 */
export default function ServicePage({ params }: PageProps<"/services/[service]">) {
  return (
    <main className="flex max-w-screen flex-1 flex-col overflow-x-clip">
      <Suspense fallback={<HeroSkeleton />}>
        <ServiceIntro params={params} />
      </Suspense>
      <Testimonials tone="light" />
      <WelcomeOfferSection title={SERVICES_WELCOME.title} content={SERVICES_WELCOME} />
      <Suspense fallback={null}>
        <ServiceClosing params={params} />
      </Suspense>
    </main>
  );
}

type ServiceParams = Pick<PageProps<"/services/[service]">, "params">;

async function ServiceIntro({ params }: ServiceParams) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const detail = SERVICE_DETAILS[service.slug];
  const path = `/services/${service.slug}`;
  const fullTitle = service.absoluteTitle ? service.title : `${service.title} | ${SITE_NAME}`;

  return (
    <>
      <PhotoHero
        image={detail.hero.image}
        imageAlt={detail.hero.imageAlt}
        eyebrow={HERO_EYEBROW}
        heading={service.h1}
        body={
          detail.hero.body.length ? detail.hero.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : undefined
        }
        buttons={SERVICE_HERO_BUTTONS}
      />
      <ServiceTabs tabs={detail.tabs} />
      <JsonLd
        data={pageGraph({
          path,
          title: fullTitle,
          description: service.description,
          datePublished: service.datePublished,
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.name }],
        })}
      />
    </>
  );
}

async function ServiceClosing({ params }: ServiceParams) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return null;

  return <ServiceCta content={SERVICE_DETAILS[service.slug].cta} />;
}

function HeroSkeleton() {
  return <div aria-busy="true" aria-label="Loading service" className="min-h-112.5 bg-charcoal lg:min-h-125" />;
}
