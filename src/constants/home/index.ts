import { OFFICE_CARDS } from "@/constants/office";
import { BUSINESS, PATIENT_LINKS } from "@/constants/site";
import type { HeroCard, ServiceCard } from "@/types";

/** Copy for the home page, taken from the new site. Why Choose Us, Testimonials and the stats row use constants/common. */
export const HOME_PAGE = {
  hero: {
    eyebrow: "Welcome to",
    heading: "Avondale Smiles",
    subheading: "Family & Cosmetic Dentistry in Redmond, WA",
    body: "We understand how packed your schedule can be. So, we work around your schedule with evening and weekend appointments, a convenient location, and flexible financing for families across Redmond, Woodinville, Kirkland, Bellevue, Duvall, Carnation, and beyond.",
    buttonLabel: "Book an Appointment",
    href: PATIENT_LINKS.bookAppointment,
    cards: [
      { label: "Plan Your Visit", href: "/contact-us", icon: "plan" },
      { label: "Talk to Our Team", href: BUSINESS.phones.primary.href, icon: "call" },
      { label: "Location", href: "/contact-us", icon: "location" },
    ] satisfies readonly HeroCard[],
  },
  doctor: {
    heading: "Meet Dr. Aditi",
    paragraphs: [
      "With over 22 years of experience, 5,000+ patients treated over the years, and 1000+ surgical procedures successfully performed, Dr. Aditi Agarwal blends advanced dental technology with gentle, personalized care, creating an experience where patients feel heard, supported, and confident about their smiles.",
      "“At Avondale Smiles, I believe that the heart and soul of our practice is our patients. Getting to know our patients as individuals and addressing their needs, concerns, and fears is integral to me and my practice. Current research shows that our general health is directly or indirectly impacted by our oral health, and it is my mission to restore each smile such that each person who comes to our practice leaves healthier and happier.",
      "Dentistry has changed dramatically. The focus has changed from aggressive restoration to early detection and prevention. Utilizing state-of-the-art technology, my educational and technical experience and genuine warmth and attention, I want to give my patients what dentistry has given to me….. A Reason to Smile.”",
    ],
    photoAlt: "Dr. Aditi Agarwal seated and smiling",
    signatureAlt: "Dr. Aditi Agarwal's signature",
  },
  services: {
    eyebrow: "Our Services",
    heading: "Complete Dental Care for Every Member of Your Family",
    body: "From routine checkups to smile transformations, we offer everything you need under one roof.",
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
    ] satisfies readonly ServiceCard[],
    helpBefore: "Have questions or need guidance? Call ",
    helpAfter: ", and our team will guide you to the best option.",
  },
  welcome: {
    offer: {
      heading: "Our Way of Saying Welcome",
      subheading: "FREE Take-Home Teeth Whitening",
      body: "After your first visit, which includes cleaning, X-rays, and a full exam. No cash value. The offer must be mentioned at the time of your visit.",
      buttonLabel: "Exclusive New Patient Welcome Offer",
      href: PATIENT_LINKS.patientForms,
      photoAlt: "The reception area at Avondale Smiles",
    },
    forms: {
      heading: "Save Time at Your First Visit",
      body: "Filling out your paperwork ahead of time helps us get to know you better and makes your first appointment run smoothly.",
      buttonLabel: "Complete Your Form Online",
      href: PATIENT_LINKS.patientForms,
      photoAlt: "An alarm clock on the front desk at Avondale Smiles",
    },
  },
  nextAppointment: {
    headingLines: ["Your Next Appointment", "Starts Here"],
    hoursLabel: OFFICE_CARDS.hoursHeading,
    addressNote: OFFICE_CARDS.addressNote,
    buttonLabel: "Book an Appointment",
    href: PATIENT_LINKS.bookAppointment,
  },
} as const;
