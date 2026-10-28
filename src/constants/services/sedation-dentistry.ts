import { serviceHeroSedation } from "@/images";
import type { ServiceDetail } from "@/types";

/** /services/sedation-dentistry: copy and hero photo from the new site. */
export const SEDATION_DENTISTRY: ServiceDetail = {
  hero: {
    image: serviceHeroSedation,
    imageAlt: "",
    body: [
      "Dental anxiety is more common than you think, and it shouldn't keep you from the care you need.",
      "Whether your anxiety is mild or more significant, we tailor sedation options to help you feel at ease every step of the way.",
    ],
  },
  tabs: [
    {
      id: "relaxed-visits-better-care-healthier-smiles",
      title: "Relaxed Visits. Better Care. Healthier Smiles.",
      heading: "Relaxed Visits. Better Care. Healthier Smiles.",
      html: "<p>Sedation dentistry helps you relax during treatment, making your visit feel easier, shorter, and far less stressful. Many patients who once avoided the dentist are now able to complete their care comfortably and confidently. We offer safe, effective sedation methods based on your comfort level and treatment needs:</p><p><strong>1. Nitrous Oxide (Laughing Gas)</strong></p><p>A gentle form of relaxation that works quickly and wears off fast, so you can usually return to normal activities the same day.</p><p><strong>2. Oral Sedation</strong></p><p>Prescription medication taken before your appointment to promote deeper relaxation, with careful monitoring throughout your visit.</p><p>Both options are designed to help you stay relaxed while remaining responsive and safe during treatment. Most patients say their visit felt shorter and easier, and many complete multiple treatments in a single appointment.</p>",
    },
  ],
  cta: {
    heading: "Let's make your dental visit comfortable!",
    lead: "Schedule your visit today | Call",
    showPhone: true,
  },
};
