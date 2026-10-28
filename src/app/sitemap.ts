import type { MetadataRoute } from "next";
import { SITE_LAUNCH_DATE } from "@/constants/site";
import { absoluteUrl } from "@/lib/url";
import { SERVICE_SLUGS } from "@/app/services/[service]/services";

const STATIC_PATHS = [
  "/",
  "/about",
  "/services",
  "/why-us",
  "/book-an-appointment",
  "/contact-us",
  "/pay-bill-online",
  "/accessibility-statement",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE_LAUNCH_DATE);
  const paths = [...STATIC_PATHS, ...SERVICE_SLUGS.map((slug) => `/services/${slug}`)];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
