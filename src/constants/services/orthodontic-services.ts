import { serviceHeroOrthodontic } from "@/images";
import type { ServiceDetail } from "@/types";

/** /services/orthodontic-services: copy and hero photo from the new site. */
export const ORTHODONTIC_SERVICES: ServiceDetail = {
  hero: {
    image: serviceHeroOrthodontic,
    imageAlt: "",
    body: [
      "Looking for a modern alternative to metal braces? ClearCorrect™ Clear aligner uses a series of clear, custom-made, removable trays to gradually straighten your teeth without wires, brackets, or bands.",
    ],
  },
  tabs: [
    {
      id: "comfortable-smile-alignment",
      title: "Comfortable Smile Alignment",
      heading: "The Clear Choice for Comfortable Smile Alignment",
      html: "<p>Your treatment begins with a comprehensive evaluation to determine if ClearCorrect™ is right for your<br>smile. Once planned, you'll receive a series of aligners that are worn most of the day and removed only for<br>eating, drinking, brushing, and flossing.</p><p>You'll have to visit periodically so we can monitor progress and ensure your teeth are moving as planned.<br>Each new aligner continues the gradual process until your final alignment is achieved. Treatment length<br>varies depending on the complexity of your case, but many patients appreciate the predictable,<br>step-by-step approach. A free initial consultation is available to help you explore your options.</p>",
    },
    {
      id: "clear-aligners-vs-traditional-orthodontics",
      title: "Clear Aligners vs. Traditional Orthodontics",
      heading: "Clear Aligners vs. Traditional Orthodontics",
      html: "<p>Clear aligners and traditional braces both straighten teeth effectively, but the experience is very different. Traditional braces are fixed to the teeth for the entire treatment period and require periodic adjustments. They may also make brushing, flossing, eating, and speaking more challenging.</p><p>ClearCorrect™ aligners, on the other hand, are removable and custom-fit, allowing for easier hygiene and greater comfort. In some complex bite or alignment cases, traditional orthodontics may still be the better option. We'll help you choose the solution that best fits your needs, goals, and lifestyle.</p>",
    },
  ],
  cta: {
    heading: "Take the first step towards your best smile!",
    lead: "Schedule your visit today | Call",
    showPhone: true,
  },
};
