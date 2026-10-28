import { BUSINESS, SITE_LAUNCH_DATE, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/constants/site";
import type { PageGraphInput } from "@/types/seo";
import { absoluteUrl } from "@/lib/url";

export const WEBSITE_ID = `${SITE_URL}/#website`;
export const DENTIST_ID = `${SITE_URL}/#dentist`;

/**
 * Site-wide graph, rendered once in the root layout.
 * WebSite mirrors what Yoast emitted on the old site; Dentist (a LocalBusiness) is new.
 */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description: SITE_TAGLINE,
        publisher: { "@id": DENTIST_ID },
        inLanguage: "en-US",
      },
      {
        "@type": "Dentist",
        "@id": DENTIST_ID,
        name: BUSINESS.name,
        alternateName: BUSINESS.legalName,
        url: `${SITE_URL}/`,
        logo: absoluteUrl("/icon.png"),
        image: absoluteUrl("/opengraph-image.jpg"),
        telephone: [BUSINESS.phones.primary.schema, BUSINESS.phones.secondary.schema],
        address: { "@type": "PostalAddress", ...BUSINESS.address },
        geo: { "@type": "GeoCoordinates", ...BUSINESS.geo },
        hasMap: BUSINESS.mapUrl,
        openingHoursSpecification: BUSINESS.openingHours.map((hours) => ({
          "@type": "OpeningHoursSpecification",
          ...hours,
        })),
        areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "City", name })),
        medicalSpecialty: "Dentistry",
        founder: { "@type": "Person", ...BUSINESS.founder },
        sameAs: BUSINESS.sameAs,
      },
    ],
  };
}

/** Per-page graph (WebPage + BreadcrumbList), mirroring the old site's Yoast output. */
export function pageGraph(input: PageGraphInput) {
  const url = absoluteUrl(input.path);
  const breadcrumbId = `${url}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: input.title,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": DENTIST_ID },
        datePublished: input.datePublished,
        dateModified: SITE_LAUNCH_DATE,
        description: input.description,
        breadcrumb: { "@id": breadcrumbId },
        inLanguage: "en-US",
        potentialAction: [{ "@type": "ReadAction", target: [url] }],
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: input.breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          ...(crumb.path ? { item: absoluteUrl(crumb.path) } : {}),
        })),
      },
    ],
  };
}
