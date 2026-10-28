import { BUSINESS } from "@/constants/site";

/** Copy for /accessibility-statement. Update `lastReviewed` whenever the measures change. */
export const ACCESSIBILITY_STATEMENT = {
  heading: "Accessibility Statement",
  intro: `${BUSINESS.name} is committed to making our website usable by as many people as possible, whatever their abilities or the technology they use. We want every patient and family to be able to find our hours, learn about our services and book a visit without barriers.`,
  lastReviewed: "October 12, 2026",
  sections: [
    {
      heading: "Our standard",
      paragraphs: [
        "We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA, the standard referenced by the Americans with Disabilities Act for websites. We review the site against these guidelines as we add or change content.",
      ],
    },
    {
      heading: "What we have done",
      bullets: [
        "Built the site with meaningful headings, landmarks and lists so screen readers can navigate it.",
        "Written text alternatives for the photographs that carry information, and marked decorative images so they are skipped.",
        "Made every menu, link and button reachable and operable with a keyboard, with a visible focus indicator.",
        "Chosen text colours and sizes that meet contrast requirements and that scale with your browser's text settings.",
        'Respected the "reduce motion" preference in your operating system, and offered a switch to stop animations entirely.',
      ],
    },
    {
      heading: "The accessibility menu",
      paragraphs: [
        "Every page has an accessibility menu, opened from the round button in the bottom-right corner. It lets you adjust the site to your needs, and remembers your choices on this device:",
      ],
      bullets: [
        "Text size, letter spacing, line height and font weight.",
        "A dyslexia-friendly font, and highlighting for titles and links.",
        "Dark, light and high contrast modes, plus saturation and monochrome options.",
        "A reading guide, a larger cursor, a stop-animations switch and a read-aloud mode.",
        "Ready-made profiles for seizure safety, blindness, low vision, ADHD, cognitive and learning needs, and motor impairments.",
      ],
    },
    {
      heading: "Third-party content",
      paragraphs: [
        "Some features are provided by other companies: patient testimonial videos are hosted on YouTube, the office map is provided by Google Maps, and online booking, forms, payments and the patient portal are provided by our practice-management partner. We choose partners that take accessibility seriously, but we cannot control their content. If any of these services gives you trouble, call us and we will help you another way.",
      ],
    },
    {
      heading: "Tell us if something is not working",
      paragraphs: [
        `If you have difficulty using any part of this website, or need information in another format, please let us know. Call ${BUSINESS.phones.primary.display} during office hours, or use the contact page, and we will do our best to help promptly.`,
      ],
    },
  ],
} as const;
