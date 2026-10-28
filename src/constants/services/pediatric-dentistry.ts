import { serviceHeroPediatric } from "@/images";
import type { ServiceDetail } from "@/types";

/** /services/pediatric-dentistry: copy and hero photo from the new site. */
export const PEDIATRIC_DENTISTRY: ServiceDetail = {
  hero: {
    image: serviceHeroPediatric,
    imageAlt: "",
    body: [
      "Healthy habits start early. We care for little smiles, and our goal is to treat, educate, and guide families as children grow, monitoring changing dentition, addressing oral habits, and helping parents understand how diet and nutrition impact oral health",
    ],
  },
  tabs: [
    {
      id: "complete-pediatric-dental-services",
      title: "Complete Pediatric Dental Services",
      heading: "Complete Pediatric Dental Services",
      html: "<p>As a mom herself, Dr. Aditi understands how important early dental care is, not just for healthy teeth, but for building lifelong habits and confidence. The American Academy of Pediatric Dentistry recommends a child's first dental visit by their first birthday or when the first tooth appears. We make that first visit calm, educational, and positive for both children and parents.</p><p>We provide comprehensive dental care for children of all ages in a safe, supportive environment, including:</p><ul><li>Dental exams and cleanings</li><li>Digital X-rays (as needed)</li><li>Fluoride treatments and dental sealants</li><li>Tooth-colored fillings</li><li>Guidance on oral habits, nutrition, and development</li></ul><p>We also offer complimentary exams for ages 6–24 months to help families establish great habits early.</p>",
    },
    {
      id: "a-child-friendly-dental-experience",
      title: "A Child-Friendly Dental Experience",
      heading: "A Child-Friendly Dental Experience",
      html: '<p>We go beyond clinical care to make dental visits something kids actually enjoy.</p><ul><li>A designated play area to ease pre-visit nerves</li><li>A fun toy box where kids choose a "prize" after their visit</li><li>Our popular "Cavity-Free Club", where kids earn special star status</li></ul>',
    },
  ],
  cta: {
    heading: "Start early. Build healthy habits.",
    body: "We proudly welcome children from Redmond, Bellevue, Woodinville, Kirkland, Duvall, and Carnation, as well as families from nearby schools and neighborhoods.",
    lead: "Schedule your visit today | Call",
    showPhone: true,
  },
};
