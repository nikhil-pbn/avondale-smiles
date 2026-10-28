import type { StaticImageData } from "next/image";

/** A call-to-action button in a page hero. */
export type HeroButton = {
  label: string;
  href: string;
  /** Opens in a new tab when true. */
  external?: boolean;
};

/** One point in a "why choose us" style list. */
export type Feature = {
  heading: string;
  body: string;
};

/** One figure in a stats row. */
export type Stat = {
  value: string;
  label: string;
};

/** One of the quick links in the home hero's card bar. */
export type HeroCard = {
  label: string;
  href: string;
  icon: "plan" | "call" | "location";
};

/** A service tile in the home page grid. */
export type ServiceCard = {
  slug: string;
  label: string;
  description: string;
};

/** A patient testimonial video in the carousel. */
export type TestimonialVideo = {
  youtubeId: string;
  poster: StaticImageData;
  title: string;
};

/** One row of the "Our Way of Saying Welcome" band: copy beside a photo. */
export type WelcomeRow = {
  heading: string;
  subheading?: string;
  body: string;
  buttonLabel: string;
  href: string;
  photoAlt: string;
};

/** Copy for the two-row welcome band (home, services). */
export type WelcomeContent = {
  offer: WelcomeRow;
  forms: WelcomeRow;
};
