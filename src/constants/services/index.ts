import { PATIENT_LINKS } from "@/constants/site";
import type { HeroButton, ServiceCard, ServiceDetail, ServiceSlug } from "@/types";
import { DENTAL_IMPLANTS } from "@/constants/services/dental-implants";
import { EMERGENCY_DENTISTRY } from "@/constants/services/emergency-dentistry";
import { GENERAL_DENTISTRY } from "@/constants/services/general-dentistry";
import { ORTHODONTIC_SERVICES } from "@/constants/services/orthodontic-services";
import { PEDIATRIC_DENTISTRY } from "@/constants/services/pediatric-dentistry";
import { SEDATION_DENTISTRY } from "@/constants/services/sedation-dentistry";

/** Copy for /services, taken from the new site's Services page. The welcome band, Testimonials and the next-step CTA use constants/common. */
export const SERVICES_PAGE = {
  banner: { heading: "Services" },
  intro: {
    heading: "Complete Dental Care for Every Smile",
    body: "Trusted by families, designed for comfort, and focused on long-term oral health.",
  },
  overview: {
    eyebrow: "Care Built Around You",
    heading: "Thoughtful. Modern. Patient-First.",
    body: "Every patient's needs are different. That's why our approach to dentistry is personal, preventive, and focused on long-term health, not just quick fixes. We take the time to listen, explain your options clearly, and deliver care that feels comfortable, thoughtful, and precise. Whether you're here for routine maintenance or advanced treatment, every recommendation is tailored to your risk factors, lifestyle, and long-term outcomes, so your smile stays healthy for years to come.",
    items: [
      {
        slug: "general-dentistry",
        label: "General Dentistry",
        description:
          "Our general dentistry services focus on keeping your smile healthy and strong. From routine exams and professional cleanings to fillings and gum care, we help prevent problems early and maintain long-term oral health.",
      },
      {
        slug: "pediatric-dentistry",
        label: "Pediatric Dentistry",
        description:
          "We provide gentle, compassionate dental care for children in a comfortable, friendly environment. Our pediatric services emphasize prevention, education, and positive experiences that build healthy dental habits for life.",
      },
      {
        slug: "sedation-dentistry",
        label: "Sedation Options",
        description:
          "For patients who feel anxious about dental visits, we offer safe and effective sedation options, including nitrous oxide and oral sedation. These options help you feel relaxed and comfortable throughout your treatment.",
      },
      {
        slug: "orthodontic-services",
        label: "Orthodontic Services",
        description:
          "We offer clear aligner orthodontic solutions for teens and adults who want straighter teeth without traditional braces. Our discreet, custom-fitted aligners help improve alignment while fitting seamlessly into your lifestyle.",
      },
      {
        slug: "dental-implants",
        label: "Dental Implants",
        description:
          "Dental implants provide a durable, natural-looking solution for replacing missing teeth. Designed to restore function and confidence, implants help preserve jaw health while giving you a smile that looks and feels complete.",
      },
      {
        slug: "emergency-dentistry",
        label: "Emergency Dentistry",
        description:
          "Dental emergencies need immediate care. We provide fast relief and clear next steps for tooth pain, infections, broken or knocked-out teeth, lost restorations, swelling, and dental trauma.",
      },
    ] satisfies readonly ServiceCard[],
  },
} as const;

/** The two outline buttons in every service page hero. */
export const SERVICE_HERO_BUTTONS = [
  { label: "Book an Appointment", href: PATIENT_LINKS.bookAppointment, external: true },
  { label: "Contact Us", href: "/contact-us" },
] as const satisfies readonly HeroButton[];

/** Page-specific copy and photo for each /services/[service] page, one file per service. */
export const SERVICE_DETAILS: Record<ServiceSlug, ServiceDetail> = {
  "general-dentistry": GENERAL_DENTISTRY,
  "pediatric-dentistry": PEDIATRIC_DENTISTRY,
  "sedation-dentistry": SEDATION_DENTISTRY,
  "orthodontic-services": ORTHODONTIC_SERVICES,
  "dental-implants": DENTAL_IMPLANTS,
  "emergency-dentistry": EMERGENCY_DENTISTRY,
};
