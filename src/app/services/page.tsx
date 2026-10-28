import type { Metadata } from "next";
import { JsonLd, NextStepCta, PageIntro, PhotoBanner, Testimonials, WelcomeOfferSection } from "@/components";
import { ServicesOverview } from "@/components/services";
import { SERVICES_WELCOME } from "@/constants/common";
import { SERVICES_PAGE } from "@/constants/services";
import { OPEN_GRAPH_DEFAULTS, SITE_NAME } from "@/constants/site";
import { servicesBanner } from "@/images";
import { pageGraph } from "@/lib/schema";

const title = "Services";
const description =
  "Avondale Smiles offers general, cosmetic, pediatric, sedation, orthodontic, emergency and dental implant services in Redmond, WA. Call us today at 425-298-6684.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { ...OPEN_GRAPH_DEFAULTS, url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <main className="flex max-w-screen flex-1 flex-col overflow-x-clip">
        <PhotoBanner heading={SERVICES_PAGE.banner.heading} image={servicesBanner} />
        <PageIntro
          heading={SERVICES_PAGE.intro.heading}
          body={SERVICES_PAGE.intro.body}
          className="bg-mist-light lg:py-20"
        />
        <ServicesOverview />
        <WelcomeOfferSection title={SERVICES_WELCOME.title} content={SERVICES_WELCOME} />
        <Testimonials />
        <NextStepCta />
      </main>
      <JsonLd
        data={pageGraph({
          path: "/services",
          title: `${title} | ${SITE_NAME}`,
          description,
          datePublished: "2016-03-03T23:28:05+00:00",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "Services" }],
        })}
      />
    </>
  );
}
