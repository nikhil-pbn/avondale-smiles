import type { StaticImageData } from "next/image";

export type ServiceSlug =
  | "general-dentistry"
  | "pediatric-dentistry"
  | "sedation-dentistry"
  | "orthodontic-services"
  | "dental-implants"
  | "emergency-dentistry";

export type ServiceOgImage = {
  /** File name inside src/app/services/[service]/_og. */
  file: string;
  width: number;
  height: number;
  alt: string;
};

export type Service = {
  slug: ServiceSlug;
  /** Nav label and breadcrumb name. */
  name: string;
  /** <title> from the old site. With `absoluteTitle` the site-wide suffix is not appended. */
  title: string;
  absoluteTitle?: boolean;
  description: string;
  h1: string;
  /** ISO date the page first existed on the old site. */
  datePublished: string;
  ogImage: ServiceOgImage;
};

/** One sub-topic tab on a service page. */
export type ServiceTab = {
  id: string;
  /** Label in the tab list / dropdown. */
  title: string;
  /** Heading above the copy; the "01." prefix is added when rendered. */
  heading: string;
  /** Copy authored on the new site: only p, strong, ul, li and br tags. */
  html: string;
};

/** Closing call-to-action card on a service page. */
export type ServiceCta = {
  heading: string;
  /** Optional paragraph under the heading (the pediatric page has one). */
  body?: string;
  /** The schedule line, e.g. "Schedule your visit today | Call"; the phone number follows when `showPhone` is set. */
  lead: string;
  /** Appends the office phone number after the lead. */
  showPhone: boolean;
};

/** The page-specific parts of /services/[service]; everything else is shared. */
export type ServiceDetail = {
  hero: {
    image: StaticImageData;
    imageAlt: string;
    body: readonly string[];
  };
  tabs: readonly ServiceTab[];
  cta: ServiceCta;
};
