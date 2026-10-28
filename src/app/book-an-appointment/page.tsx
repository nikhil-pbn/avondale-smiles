import { JsonLd, PageBanner } from "@/components";
import { FirstVisitSection } from "@/components/book-an-appointment";
import { OPEN_GRAPH_DEFAULTS, SITE_NAME } from "@/constants/site";
import { pageGraph } from "@/lib/schema";
import type { Metadata } from "next";

const title = "Your First Visit";
const description =
  "What should you expect at your first visit to Avondale Smiles? Nothing less than excellence. If you want to increase your health and improve your appearance, trust us.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/book-an-appointment" },
  openGraph: { ...OPEN_GRAPH_DEFAULTS, url: "/book-an-appointment" },
};

export default function BookAnAppointmentPage() {
  return (
    <>
      <main className="flex max-w-screen flex-1 flex-col overflow-x-clip">
        <PageBanner />
        <FirstVisitSection />
      </main>
      <JsonLd
        data={pageGraph({
          path: "/book-an-appointment",
          title: `${title} | ${SITE_NAME}`,
          description,
          datePublished: "2016-04-20T20:39:34+00:00",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "Book an Appointment" }],
        })}
      />
    </>
  );
}
