export type Weekday = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

/** One open window. Times are 24-hour "HH:MM", as schema.org expects. */
export type OpeningHours = {
  dayOfWeek: Weekday;
  opens: string;
  closes: string;
};

export type Phone = {
  /** As shown to visitors, e.g. "425-298-6684". */
  display: string;
  /** For href, e.g. "tel:+14252986684". */
  href: string;
  /** For structured data, e.g. "+1-425-298-6684". */
  schema: string;
};

/** Mirrors schema.org PostalAddress. */
export type PostalAddress = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
};
