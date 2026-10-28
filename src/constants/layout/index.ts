import { SERVICES, SERVICE_SLUGS } from "@/app/services/[service]/services";
import { PATIENT_LINKS, SOCIAL_PROFILES } from "@/constants/site";
import type { FooterContent, NavItem, NavLink, SocialLink } from "@/types/navigation";

/** Header and footer content, taken from the new site. */

const SERVICE_LINKS: NavLink[] = SERVICE_SLUGS.map((slug) => ({
  label: SERVICES[slug].name,
  href: `/services/${slug}`,
}));

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", children: SERVICE_LINKS },
  { label: "Pay Bill Online", href: "/pay-bill-online" },
  { label: "Why us", href: "/why-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export const HEADER = {
  loginLabel: "Patient Login",
  menuLabel: "Menu",
  /** Scroll distance (px) after which the header gets its dark background. */
  scrollThreshold: 80,
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: SOCIAL_PROFILES.facebook, icon: "facebook" },
  { label: "YouTube", href: SOCIAL_PROFILES.youtube, icon: "youtube" },
  { label: "Yelp", href: SOCIAL_PROFILES.yelp, icon: "yelp" },
  { label: "Zocdoc", href: SOCIAL_PROFILES.zocdoc, icon: "zocdoc" },
  { label: "Google", href: SOCIAL_PROFILES.google, icon: "google" },
];

export const FOOTER: FooterContent = {
  bookLabel: "Book an Appointment",
  tagline: "General and Cosmetic Dentist, Redmond, WA ©",
  description:
    "Avondale Smiles is a Family and Cosmetic Dental Practice that wants to cater to the busy families of Redmond, Woodinville, Kirkland, Bellevue, Duvall, Carnation, and surrounding areas. We offer a convenient location, evening and Saturday appointments and also flexible financing options.",
  followLabel: "Follow us",
  columns: [
    { title: "Services", links: SERVICE_LINKS },
    {
      title: "About Us",
      links: [
        { label: "Meet our doctors", href: "/about" },
        { label: "Dental care team", href: "/about" },
        { label: "Office tour", href: "/about" },
      ],
    },
    {
      bold: true,
      links: [
        { label: "Pay bill online", href: "/pay-bill-online" },
        { label: "Forms", href: PATIENT_LINKS.patientForms, external: true },
        { label: "Contact us", href: "/contact-us" },
        { label: "Patient login", href: PATIENT_LINKS.patientLogin, external: true },
        { label: "Why us?", href: "/why-us" },
        { label: "Accessibility", href: "/accessibility-statement" },
      ],
    },
  ],
};

/** The "text us" floating button and form, bottom-right above the accessibility menu (new site). */
export const TEXT_US = {
  launcherLabel: "Text us",
  closeLabel: "Close the text-us form",
  greeting: "Hello from",
  intro: "Please enter your information and our team will text message you shortly.",
  nameLabel: "Name",
  phoneLabel: "Mobile Phone",
  messageLabel: "Message",
  note: "Standard message/data rates apply.",
  sendLabel: "Send",
  sendingLabel: "Sending…",
  bookLabel: "Book Appointment",
  successTitle: "Thanks, we got your message.",
  successBody: "Our team will text you shortly during office hours.",
  doneLabel: "Done",
  errorMessage: "Something went wrong. Please try again or call us.",
  nudgeText: "Hi there, have a question? Text us here.",
  nudgeCloseLabel: "Dismiss this message",
} as const;
