import { PATIENT_LINKS, SOCIAL_PROFILES } from "@/constants/site";
import type { HeroButton } from "@/types";

/** Copy for /why-us, taken from the new site's Why Us page. Why Choose Us, Testimonials, the stats row and the next-step CTA use constants/common. */
export const WHY_US_PAGE = {
  hero: {
    heading: "Patient Stories & Reviews",
    body: "Real words from real patients in Redmond and neighboring communities. If you're new to Avondale Smiles, we hope these stories help you feel at ease about your first visit.",
    buttons: [
      { label: "Book an Appointment", href: PATIENT_LINKS.bookAppointment, external: true },
      { label: "Contact Us", href: "/contact-us" },
    ] satisfies readonly HeroButton[],
  },
} as const;

export const REVIEWS_BLOCK = {
  heading: "500+ Google reviews and counting.",
  linkLabel: "See what patients are saying and leave yours.",
  href: PATIENT_LINKS.googleReviews,
  alsoLabel: "Also check us out on",
  facebookHref: SOCIAL_PROFILES.facebook,
  yelpHref: SOCIAL_PROFILES.yelp,
} as const;

export const TOP_DENTIST_AWARD = {
  heading: "Voted as Seattle's Top Dentist",
  years: "2017, 2018, 2019",
  plaqueAlt:
    "Top Dentists plaque awarded to Aditi Agarwal, DMD, as chosen by her peers and featured in Seattle Met Magazine",
} as const;
