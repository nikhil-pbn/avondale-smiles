import { JsonLd, NextStepCta, PhotoHero, StatsRow, Testimonials, WhyChooseUs } from "@/components";
import { AwardBanner, ReviewsBlock } from "@/components/why-us";
import { WHY_US_PAGE } from "@/constants/why-us";
import { whyUsHero } from "@/images";
import { OPEN_GRAPH_DEFAULTS, SITE_NAME } from "@/constants/site";
import { pageGraph } from "@/lib/schema";
import type { Metadata } from "next";

// SEO carried over from https://www.avondalesmiles.com/testimonials/
const title = "Read our Reviews";
const description =
  "Reviews of Avondale Smiles and Dr. Aditi Agarwal. See why we have been voted Top Seattle Dentist since 2016.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/why-us" },
  openGraph: { ...OPEN_GRAPH_DEFAULTS, url: "/why-us" },
};

export default function WhyUsPage() {
  return (
    <>
      <main className="flex max-w-screen flex-1 flex-col overflow-x-clip">
        <PhotoHero
          image={whyUsHero}
          heading={WHY_US_PAGE.hero.heading}
          body={WHY_US_PAGE.hero.body}
          buttons={WHY_US_PAGE.hero.buttons}
        />
        <ReviewsBlock />
        <AwardBanner />
        <WhyChooseUs />
        <Testimonials />
        <StatsRow />
        <NextStepCta />
      </main>
      <JsonLd
        data={pageGraph({
          path: "/why-us",
          title: `${title} | ${SITE_NAME}`,
          description,
          datePublished: "2016-03-03T23:30:12+00:00",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "Why Us" }],
        })}
      />
    </>
  );
}
