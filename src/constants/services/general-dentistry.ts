import { serviceHeroGeneral } from "@/images";
import type { ServiceDetail } from "@/types";

/** /services/general-dentistry: copy and hero photo from the new site. */
export const GENERAL_DENTISTRY: ServiceDetail = {
  hero: {
    image: serviceHeroGeneral,
    imageAlt: "",
    body: [
      "From routine cleanings to restorative treatments, our general dentistry services are designed to protect your natural teeth, prevent future problems, and keep your smile strong and comfortable.",
    ],
  },
  tabs: [
    {
      id: "teeth-cleaning-gum-health",
      title: "Teeth Cleaning & Gum Health",
      heading: "Teeth Cleaning & Gum Health",
      html: '<p>There are essentially two types of professional cleanings:</p><p><strong>1. Preventive (Prophylactic) Cleaning:</strong> This cleaning is recommended every six months and is ideal for patients whose gums are free from inflammation. Its primary purpose is to maintain good oral health and prevent future dental problems.</p><p><strong>2. Therapeutic Cleaning (Scaling & Root Planing / Deep Cleaning):</strong> This type of cleaning is performed in areas of chronic inflammation. Inflammation occurs when bacteria continuously irritate the gums, leading to infection. This condition is known as Gingivitis, and its more advanced form is Periodontitis.</p><p>To determine the extent of gum disease, Dr. Aditi measures your gum "pocket depths." Based on this evaluation, she will recommend the most appropriate treatment.</p><p>If left untreated, gum disease (periodontitis) has been shown in some studies to contribute to heart disease. It has also been linked to low birth weight in pregnant women, and diabetic patients are more susceptible to it.</p><p>Gingivitis may be reversible with:</p><ul><li>Consistent oral hygiene</li><li>Regular recare appointments</li></ul><p>Severe periodontitis is more chronic and may require:</p><ul><li>Scaling/root planing (deep cleaning)</li><li>Antibiotic therapy</li><li>In severe cases, surgical treatment</li></ul><p>In general, both Gingivitis and Periodontitis can be prevented by:</p><ul><li>Brushing two times a day with a fluoride toothpaste</li><li>Flossing once a day</li><li>Regular dental check-ups</li><li>Do not use tobacco or its products</li><li>Eating a balanced diet</li></ul>',
    },
    {
      id: "tooth-colored-fillings",
      title: "Tooth-Colored Fillings",
      heading: "Tooth-Colored Fillings",
      html: "<p>Modern composite (white) fillings restore cavities and small fractures while preserving the natural look of your tooth.</p><p><strong>Benefits of composite fillings:</strong></p><ul><li>Bond directly to tooth structure</li><li>Require less removal of healthy enamel</li><li>No dark metal shadows</li><li>Reduced risk of tooth fracture over time</li></ul><p>They are a durable, esthetic alternative to traditional silver amalgam fillings.</p>",
    },
    {
      id: "root-canal-therapy-endodontics",
      title: "Root Canal Therapy (Endodontics)",
      heading: "Root Canal Therapy (Endodontics)",
      html: "<p>If decay (cavity) has been left unchecked in a tooth, it can reach the innermost layer of the tooth, called the pulp and the 'Nerve' of the tooth. Root canal therapy may also be required due to:</p><ul><li>Trauma</li><li>Large or deep fillings</li><li>Cracked or fractured teeth</li><li>Severe decay</li></ul><p>Modern techniques have made root canal treatment far more comfortable than its reputation suggests. In many cases, treatment can be completed in a single visit, and most patients report little to no discomfort.</p>",
    },
    {
      id: "crowns-bridges",
      title: "Crowns & Bridges",
      heading: "Crowns & Bridges",
      html: "<p>A dental crown is a restoration that fully covers and protects a weakened or damaged tooth. Crowns are custom-made in a dental laboratory and may be fabricated from <strong>Porcelain-fused-to-metal, All-Porcelain,</strong> or <strong>Full Gold</strong> materials depending on functional and esthetic needs.</p><p>Crowns are commonly recommended for teeth that have undergone root canal therapy, teeth with fractures or broken cusps, or teeth with large fillings that can no longer withstand normal biting forces.</p><p>Dental bridges are used to replace one or more missing teeth by anchoring crowns onto the adjacent teeth on either side of the gap. Together, crowns and bridges restore chewing ability, appearance, and dental stability.</p><p>The lifespan of crowns and bridges depends on oral hygiene, routine dental visits, cavity risk, bite forces, and overall health. With proper care, most crown and bridge restorations last up to ten years or longer.</p>",
    },
    {
      id: "veneers-smile-makeovers",
      title: "Veneers (Smile Makeovers)",
      heading: "Veneers (Smile Makeovers)",
      html: "<p>Porcelain veneers are thin, custom-crafted restorations bonded to the front surfaces of teeth to enhance shape, color, length, and alignment. Veneers can effectively address discoloration, minor spacing, uneven edges, and cosmetic imperfections.</p><p>Because veneers cover only the visible portion of the tooth, they offer exceptional esthetic results, particularly for front teeth, while preserving much of the natural structure.</p>",
    },
    {
      id: "full-partial-dentures",
      title: "Full & Partial Dentures",
      heading: "Full & Partial Dentures",
      html: "<p>Dentures are a reliable solution for replacing missing teeth and restoring function, appearance, and confidence. Treatment plans are carefully tailored to each patient's needs.</p><p><strong>Complete Dentures </strong>are used when all teeth in the upper or lower arch are missing. These can be of two types:</p><ul><li><strong>Conventional dentures</strong> are fabricated after all teeth are removed and the gums have fully healed.</li><li><strong>Immediate dentures</strong>, on the other hand, are placed the same day teeth are extracted, allowing patients to avoid time without teeth, though relining is often needed after healing due to natural bone changes.</li></ul><p><strong>Partial dentures</strong> are used when some natural teeth remain. Partial dentures are of 3 basic types:</p><ul><li><strong>Cast partial denture </strong>includes a metal framework for strength. It is used to replace one or more missing teeth in either the upper or lower arch.</li><li><strong>Full resin denture,</strong> also called <strong>VALPLAST </strong>are completely resin based dentures used to replace teeth mainly in the esthetic zone. These dentures are more flexible compared to the above.</li><li><strong>Interim partial dentures or flipper dentures </strong>are placed as an intermediate to more permanent treatment, and they can be used in most situations to replace missing teeth.</li></ul><p>Most dentures require multiple visits over four to six weeks to ensure proper fit, comfort, and appearance. Patients are advised to remove dentures at night, clean them daily with appropriate cleansers, and maintain excellent hygiene for any remaining natural teeth.</p><p>Dr. Aditi Agarwal welcomes patients interested in full or partial dentures for a personalized consultation. Flexible financial options are available to help make treatment accessible.</p>",
    },
  ],
  cta: {
    heading: "A healthier, more confident smile awaits!",
    lead: "Schedule your visit today | Call",
    showPhone: true,
  },
};
