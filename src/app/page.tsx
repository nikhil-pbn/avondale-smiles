import type { Metadata } from "next";
import { JsonLd, StatsRow, Testimonials, WelcomeOfferSection, WhyChooseUs } from "@/components";
import { HomeHero, MeetDoctorSection, NextAppointmentSection, ServicesGrid } from "@/components/home";
import { OPEN_GRAPH_DEFAULTS, SITE_NAME } from "@/constants/site";
import { pageGraph } from "@/lib/schema";

// SEO carried over from https://www.avondalesmiles.com/
const title = "Redmond Dentist";
const description =
  "Avondale Smiles is dedicated to family and cosmetic dentistry in Redmond, WA. We are your first choice Redmond Dentist for both general and cosmetic needs.";

export const metadata: Metadata = {
  // The root layout's title template does not apply to this page (same segment), so the suffix is spelled out.
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: "/" },
  openGraph: { ...OPEN_GRAPH_DEFAULTS, url: "/" },
};

export default function Home() {
  return (
    <>
      <main className="flex max-w-screen flex-1 flex-col overflow-x-clip">
        <HomeHero />
        <MeetDoctorSection />
        <ServicesGrid />
        <WhyChooseUs />
        <Testimonials />
        <StatsRow />
        <WelcomeOfferSection />
        <NextAppointmentSection />
      </main>
      <JsonLd
        data={pageGraph({
          path: "/",
          title: `${title} | ${SITE_NAME}`,
          description,
          datePublished: "2013-10-15T18:04:06+00:00",
          breadcrumbs: [{ name: "Home" }],
        })}
      />
    </>
  );
}
