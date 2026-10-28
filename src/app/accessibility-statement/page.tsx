import type { Metadata } from "next";
import { JsonLd, PageBanner } from "@/components";
import { AccessibilityStatement } from "@/components/accessibility-statement";
import { OPEN_GRAPH_DEFAULTS, SITE_NAME } from "@/constants/site";
import { pageGraph } from "@/lib/schema";

const title = "Accessibility Statement";
const description =
  "How Avondale Smiles makes its website accessible: our WCAG 2.2 AA standard, the on-page accessibility menu, and how to reach us if something is not working for you.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/accessibility-statement" },
  openGraph: { ...OPEN_GRAPH_DEFAULTS, url: "/accessibility-statement" },
};

export default function AccessibilityStatementPage() {
  return (
    <>
      <main className="flex max-w-screen flex-1 flex-col overflow-x-clip">
        <PageBanner />
        <AccessibilityStatement />
      </main>
      <JsonLd
        data={pageGraph({
          path: "/accessibility-statement",
          title: `${title} | ${SITE_NAME}`,
          description,
          datePublished: "2026-10-12T00:00:00+00:00",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "Accessibility Statement" }],
        })}
      />
    </>
  );
}
