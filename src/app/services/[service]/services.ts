/**
 * Per-service SEO data for /services/[service].
 * Titles and descriptions are carried over from the old site (typos fixed, truncated ones completed);
 * the H1s use the new site's hero wording.
 */

import type { Service, ServiceSlug } from "@/types/service";

const OFFICE_PHOTO = {
  width: 600,
  height: 400,
  alt: "Avondale Smiles Family Dentistry office at 11523 Avondale Rd NE, Redmond, WA",
};

export const SERVICES: Record<ServiceSlug, Service> = {
  "general-dentistry": {
    slug: "general-dentistry",
    name: "General Dentistry",
    title: "General Dentistry",
    description:
      "Avondale Smiles, Redmond, Woodinville, Kirkland has ample experience in all aspects of General Dentistry and uses all the latest technology.",
    h1: "General Dentistry",
    datePublished: "2016-03-03T23:28:50+00:00",
    ogImage: {
      file: "general-dentistry.jpg",
      width: 293,
      height: 247,
      alt: "Family brushing their teeth together",
    },
  },
  "pediatric-dentistry": {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    title: "Pediatric Dentistry",
    description:
      "Pediatric Dentistry in Redmond. Being a Mom herself, Dr. Agarwal knows how important it is to instill good oral hygiene in a child when they are still young.",
    h1: "Pediatric Dentistry in Redmond",
    datePublished: "2016-03-03T23:29:05+00:00",
    ogImage: {
      file: "pediatric-dentistry.jpg",
      width: 1000,
      height: 667,
      alt: "Smiling young girl at the dentist holding a toothbrush and a dental model",
    },
  },
  "sedation-dentistry": {
    slug: "sedation-dentistry",
    name: "Sedation Dentistry",
    title: "Aditi Agarwal DMD | Sedation Dentistry Redmond, Kirkland, Woodinville, WA",
    absoluteTitle: true,
    description:
      "Apprehensive about going to the dentist? Have you put off dental care for years because of anxiety? We have an answer for you: dental sedation in Redmond, WA.",
    h1: "Sedation Dentistry",
    datePublished: "2016-03-03T23:29:16+00:00",
    ogImage: {
      file: "sedation-dentistry.jpg",
      width: 358,
      height: 265,
      alt: "Woman relaxing in a dental chair with headphones under a blue sky",
    },
  },
  "orthodontic-services": {
    slug: "orthodontic-services",
    name: "Orthodontic Services",
    title: "Orthodontic Services",
    description:
      "Aditi Agarwal DMD and her dental team can help you get the smile you have always wanted using clear braces like Invisalign or ClearCorrect. Call us today.",
    h1: "Orthodontic Services",
    datePublished: "2016-03-03T23:29:39+00:00",
    // The old page used a 230x66 logo GIF, below the 200px minimum social networks accept, so this uses the office photo.
    ogImage: { ...OFFICE_PHOTO, file: "orthodontic-services.jpg" },
  },
  "dental-implants": {
    slug: "dental-implants",
    name: "Dental Implants",
    title: "Dental Implants",
    description:
      "If you are looking to understand how Dental Implants can help you replace missing teeth, call us today at Redmond Family and Cosmetic Dentistry.",
    h1: "Dental Implants",
    datePublished: "2016-03-03T23:29:58+00:00",
    ogImage: {
      file: "dental-implants.jpg",
      width: 300,
      height: 404,
      alt: "Smiling older couple embracing on the beach",
    },
  },
  "emergency-dentistry": {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    title: "Emergency",
    description:
      "Avondale Smiles General Dentist, Cosmetic Dentist, Emergency Dentist Redmond, Woodinville, Kirkland & Bellevue. Emergencies seen same day.",
    h1: "Emergency Dentistry in Redmond, WA",
    datePublished: "2016-04-25T02:01:34+00:00",
    ogImage: { ...OFFICE_PHOTO, file: "emergency-dentistry.jpg" },
  },
};

export type { Service, ServiceSlug };

export const SERVICE_SLUGS = Object.keys(SERVICES) as ServiceSlug[];

export function getService(slug: string): Service | undefined {
  return Object.hasOwn(SERVICES, slug) ? SERVICES[slug as ServiceSlug] : undefined;
}
