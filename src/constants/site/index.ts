import type { Metadata } from "next";
import type { OpeningHours } from "@/types/site";

export const SITE_URL = "https://www.avondalesmiles.com";

export const SITE_NAME = "General and Cosmetic Dentist, Redmond, WA";

export const SITE_TAGLINE = "Avondale Smiles | Redmond's Best Family and Cosmetic Dental Office";

export const GOOGLE_SITE_VERIFICATION = "yFDQmft-t0VPsmRb5vsAbuRIg_8w8OjwbIx5w6jVOpo";

export const SITE_LAUNCH_DATE = "2026-10-08";

export const OPEN_GRAPH_DEFAULTS = {
  type: "website",
  locale: "en_US",
  siteName: SITE_NAME,
} satisfies NonNullable<Metadata["openGraph"]>;

/** Public profiles. Used for the footer icons and as `sameAs` in the Dentist schema. */
export const SOCIAL_PROFILES = {
  facebook: "https://www.facebook.com/avondalesmiles",
  youtube: "https://www.youtube.com/@avondalesmiles6181",
  yelp: "https://www.yelp.com/biz/aditi-agarwal-dmd-redmond",
  zocdoc: "https://www.zocdoc.com/dentist/aditi-agarwal-dmd-171710",
  google: "https://www.google.com/maps/place/Avondale+Smiles/",
} as const;

export const BUSINESS = {
  name: "Avondale Smiles",
  legalName: "Avondale Smiles: Aditi Agarwal DMD",
  phones: {
    primary: { display: "425-298-6684", href: "tel:+14252986684", schema: "+1-425-298-6684" },
    secondary: { display: "425-970-9955", href: "tel:+14259709955", schema: "+1-425-970-9955" },
  },
  address: {
    streetAddress: "11523 Avondale Rd NE Ste 115",
    addressLocality: "Redmond",
    addressRegion: "WA",
    postalCode: "98052",
    addressCountry: "US",
  },
  /** Address as written on the site. */
  addressDisplay: "11523 Avondale Rd NE, Ste 115, Redmond, WA 98052",
  geo: { latitude: 47.7028015, longitude: -122.0934744 },
  mapUrl: "https://www.google.com/maps/place/Avondale+Smiles/",
  directionsUrl: "https://maps.google.com/?q=11523+Avondale+Rd+NE+Ste+115+Redmond+WA+98052",
  /** Google Maps "Embed a map" iframe URL for the office (free, no API key). */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2685.053362997659!2d-122.0934744!3d47.7028015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900cd97e93f983%3A0x96e4a2366865bfa2!2sAvondale%20Smiles!5e0!3m2!1sen!2sus!4v1774007265079!5m2!1sen!2sus",
  /**
   * Closed Tuesday. Saturday is every other week.
   * Monday and Thursday differ between the old and new sites; confirm with the client.
   */
  openingHours: [
    { dayOfWeek: "Monday", opens: "08:00", closes: "16:30" },
    { dayOfWeek: "Wednesday", opens: "08:30", closes: "17:00" },
    { dayOfWeek: "Thursday", opens: "08:30", closes: "17:00" },
    { dayOfWeek: "Friday", opens: "08:00", closes: "16:30" },
    { dayOfWeek: "Saturday", opens: "08:30", closes: "17:00" },
  ] satisfies readonly OpeningHours[],
  areaServed: ["Redmond", "Kirkland", "Woodinville", "Bellevue"],
  sameAs: Object.values(SOCIAL_PROFILES),
  founder: {
    name: "Dr. Aditi Agarwal",
    givenName: "Aditi",
    familyName: "Agarwal",
    honorificPrefix: "Dr.",
    honorificSuffix: "DMD",
    jobTitle: "Dentist",
  },
} as const;

export const PATIENT_LINKS = {
  /** "Book an Appointment" */
  bookAppointment: "https://www.patientsreach.com/schedule/avondalesmiles/?referrer=com",
  /** "Complete Your Forms Online" */
  patientForms: "https://r.patientsreach.io/review/l3NyBj",
  /** "Patient Login" */
  patientLogin: "https://portal.patientsreach.io/login?practice_slug=2061e235-88b0-4311-b010-29e831879862",
  /** "500+ Google reviews" (Google Maps, reviews tab) */
  googleReviews:
    "https://www.google.com/maps/place/Avondale+Smiles/@47.7028015,-122.0934744,17z/data=!4m8!3m7!1s0x54900cd97e93f983:0x96e4a2366865bfa2!8m2!3d47.7028015!4d-122.0934744!9m1!1b1!16s%2Fg%2F1tk4qvvw?hl=en&entry=ttu",
  /** "Pay My Bill" */
  payBillOnline: "https://www.patientsreach.com/payment/portal/avondalesmiles",
} as const;
