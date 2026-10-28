import type { Metadata } from "next";
import { JsonLd, PageBanner } from "@/components";
import { PayBillSection } from "@/components/pay-bill-online";
import { OPEN_GRAPH_DEFAULTS, SITE_NAME } from "@/constants/site";
import { pageGraph } from "@/lib/schema";

const title = "Payment Options";
const description =
  "We want to make sure you have financial options to take care of your dental care needs. We want to become your preferred Redmond Dentist.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pay-bill-online" },
  openGraph: { ...OPEN_GRAPH_DEFAULTS, url: "/pay-bill-online" },
};

export default function PayBillOnlinePage() {
  return (
    <>
      <main className="flex max-w-screen flex-1 flex-col overflow-x-clip">
        <PageBanner />
        <PayBillSection />
      </main>
      <JsonLd
        data={pageGraph({
          path: "/pay-bill-online",
          title: `${title} | ${SITE_NAME}`,
          description,
          datePublished: "2016-03-03T23:30:51+00:00",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "Pay Bill Online" }],
        })}
      />
    </>
  );
}
