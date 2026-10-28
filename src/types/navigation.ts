export type NavLink = {
  label: string;
  href: string;
  /** Opens in a new tab with rel="noopener noreferrer". */
  external?: boolean;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export type SocialIconKey = "facebook" | "youtube" | "yelp" | "zocdoc" | "google";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIconKey;
};

export type FooterColumn = {
  title?: string;
  links: NavLink[];
  /** The quick-links column on the new site renders its links in bold. */
  bold?: boolean;
};

export type FooterContent = {
  bookLabel: string;
  tagline: string;
  description: string;
  followLabel: string;
  columns: FooterColumn[];
};
