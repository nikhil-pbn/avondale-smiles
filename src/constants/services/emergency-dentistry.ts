import { serviceHeroEmergency } from "@/images";
import type { ServiceDetail } from "@/types";

/** /services/emergency-dentistry: copy and hero photo from the new site. */
export const EMERGENCY_DENTISTRY: ServiceDetail = {
  hero: {
    image: serviceHeroEmergency,
    imageAlt: "",
    body: [
      "We provide prompt, compassionate care for urgent dental problems, whether they're caused by injury, sudden pain, infection, or long-standing dental issues. Addressing dental emergencies early helps prevent complications such as severe infection, tooth loss, and more extensive treatment later.",
    ],
  },
  tabs: [
    {
      id: "rapid-response",
      title: "Rapid Response",
      heading: "Here to Help When Dental Pain Can't Wait",
      html: "<p>Avondale Smiles treats a wide range of dental emergencies. With the services we offer, patients can receive immediate relief from toothaches, the pain of broken teeth, and other problems. Longstanding decay in any tooth can reach the nerve of the tooth, causing throbbing pain that gets worse until extraction or root canal treatment is performed. Untreated gum disease can also result in partial or total loss of teeth by destroying the gums and causing bone loss.</p><p>Avondale Smiles in Redmond, Washington, provides a full range of general, cosmetic, and emergency dentistry services to those in need of convenient dental care in the metro area. Our services include:</p><ul><li>Immediate Pain Relief Options</li><li>Diagnose and Suggest Treatment Plan</li><li>Abscess and Infection Treatment</li><li>Emergency Root Canals</li><li>Emergency Tooth Extractions</li><li>Emergency Dentures Repair</li><li>Broken Teeth</li><li>Wisdom Teeth</li><li>Toothaches</li><li>Crowns/Bridges</li><li>Cavities/Fillings</li><li>Swollen Jaw</li><li>Periodontal Scaling</li><li>Partials</li></ul><p>Some cases can be treated on the spot, while others may require follow-up care. We'll walk you through every option.</p>",
    },
  ],
  cta: {
    heading: "If you're experiencing an urgent dental issue, get help today!",
    lead: "Schedule Your Emergency Visit |",
    showPhone: true,
  },
};
