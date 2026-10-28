import { serviceHeroImplants } from "@/images";
import type { ServiceDetail } from "@/types";

/** /services/dental-implants: copy and hero photo from the new site. */
export const DENTAL_IMPLANTS: ServiceDetail = {
  hero: {
    image: serviceHeroImplants,
    imageAlt: "",
    body: [
      "Tooth loss can affect more than just your smile. Dental implants are a modern, reliable way to replace missing teeth while preserving jaw health and restoring everyday function.",
    ],
  },
  tabs: [
    {
      id: "a-long-lasting-solution-for-missing-teeth",
      title: "A Long-Lasting Solution for Missing Teeth",
      heading: "A Long-Lasting Solution for Missing Teeth",
      html: "<p>Dental implants are a reliable way to replace one or more missing teeth without relying on neighboring teeth or resting on the gums. Unlike bridges or dentures, implants replace the tooth from the root up, helping preserve jawbone health and restore natural chewing function. An implant consists of a small titanium post placed into the jawbone. Over time, it fuses with the bone through a process called osseointegration. Once healed, an abutment and custom crown are placed to complete a restoration that looks, feels, and functions like a natural tooth.</p><p>Dental implants are a highly successful option, but they do require time and planning. Healing can take several months, sometimes up to nine, before the final crown is placed. Implants are also a larger investment than traditional bridges or dentures and are not always fully covered by insurance. We're happy to discuss flexible payment options so finances don't stand in the way of your care.</p><p>Before treatment begins, Dr. Aditi Agarwal performs a thorough evaluation using digital X-rays and, when needed, advanced imaging such as a CT scan. This allows us to assess bone quality and determine whether preparatory procedures, such as bone grafting or sinus lifts, are needed to support long-term success.</p>",
    },
    {
      id: "are-dental-implants-right-for-me",
      title: "Are Dental Implants Right for Me?",
      heading: "Are Dental Implants Right for Me?",
      html: "<p>Successful implant placement depends on healthy gums, adequate jawbone, and good overall health. Most patients with good oral hygiene and sufficient healing capacity can be considered, whether replacing a single tooth or multiple teeth.</p><p>As with any surgical procedure, implant placement carries some risks, including infection, temporary nerve irritation, or sinus involvement in upper molar areas. Careful planning and precise placement help minimize these risks.</p><p>If you're exploring tooth replacement options, we'll walk you through the benefits, considerations, and alternatives so you can choose what's right for you.</p>",
    },
  ],
  cta: {
    heading: "Explore treatment options tailored to your needs!",
    lead: "Schedule your visit today | Call",
    showPhone: true,
  },
};
