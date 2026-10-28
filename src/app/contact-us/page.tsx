import type { Metadata } from "next";
import { JsonLd, PageBanner } from "@/components";
import { ContactSection } from "@/components/contact";
import { OPEN_GRAPH_DEFAULTS, SITE_NAME } from "@/constants/site";
import { pageGraph } from "@/lib/schema";

const title = "Contact";
const description =
  "Ask Aditi Agarwal a question or email her with your comments or concerns about your dental care at Cosmetic and Family Dentist Redmond, WA";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact-us" },
  openGraph: { ...OPEN_GRAPH_DEFAULTS, url: "/contact-us" },
};

export default function ContactUsPage() {
  return (
    <>
      <main className="flex max-w-screen flex-1 flex-col overflow-x-clip">
        <PageBanner />
        <ContactSection />
      </main>
      <JsonLd
        data={pageGraph({
          path: "/contact-us",
          title: `${title} | ${SITE_NAME}`,
          description,
          datePublished: "2016-03-03T23:32:18+00:00",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "Contact Us" }],
        })}
      />
    </>
  );
}
