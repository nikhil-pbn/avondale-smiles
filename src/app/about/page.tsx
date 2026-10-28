import type { Metadata } from "next";
import { JsonLd, PageIntro, PhotoBanner } from "@/components";
import { DoctorSection, ExtendedTeamSection, FindUsSection, TeamSection } from "@/components/about";
import { ABOUT_PAGE } from "@/constants/about";
import { OPEN_GRAPH_DEFAULTS, SITE_NAME } from "@/constants/site";
import { aboutBanner } from "@/images";
import { pageGraph } from "@/lib/schema";

const title = "Meet Dr. Agarwal";
const description =
  "Dr. Aditi Agarwal DMD is a top Family and Cosmetic Dentist in Redmond, WA. Call us today at 425-298-6684 for an appointment with a top Redmond Dentist.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { ...OPEN_GRAPH_DEFAULTS, url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <main className="flex max-w-screen flex-1 flex-col overflow-x-clip">
        <PhotoBanner heading={ABOUT_PAGE.banner.heading} image={aboutBanner} />
        <PageIntro heading={ABOUT_PAGE.intro.headingLines} body={ABOUT_PAGE.intro.body} />
        <DoctorSection />
        <TeamSection />
        <ExtendedTeamSection />
        <FindUsSection />
      </main>
      <JsonLd
        data={pageGraph({
          path: "/about",
          title: `${title} | ${SITE_NAME}`,
          description,
          datePublished: "2016-03-03T23:27:19+00:00",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "About" }],
        })}
      />
    </>
  );
}
