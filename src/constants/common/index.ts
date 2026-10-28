import {
  testimonialPoster1,
  testimonialPoster2,
  testimonialPoster3,
  testimonialPoster4,
  testimonialPoster5,
  testimonialPoster6,
  testimonialPoster7,
} from "@/images";
import { PATIENT_LINKS } from "@/constants/site";
import type { Feature, Stat, TestimonialVideo, WelcomeContent } from "@/types";

/** Copy for sections rendered on more than one page (why-us, home, services). */

export const WHY_CHOOSE_US = {
  eyebrow: "Why Choose Us",
  heading: "Committed to Your Long-Term Oral Health",
  imageAlt: "A modern dental treatment chair",
  features: [
    {
      heading: "Tight schedule? No worries.",
      body: "We offer evening and select Saturday appointments. Plus, we do our best to fit you in the same day when something urgent comes up.",
    },
    {
      heading: "Committed to safety.",
      body: "We follow modern infection-control practices and stay up to date with the latest clinical guidelines.",
    },
    {
      heading: "Smiles without stress.",
      body: "Honest explanations, comfort options when you need them, and a team that genuinely cares about how you feel.",
    },
  ] satisfies readonly Feature[],
} as const;

export const TESTIMONIALS = {
  eyebrow: "Testimonials",
  heading: "What Our Patients Say",
  videos: [
    { youtubeId: "9uELO8w3MoA", poster: testimonialPoster6, title: "Patient testimonial 1" },
    { youtubeId: "Um16SR9WCDs", poster: testimonialPoster7, title: "Patient testimonial 2" },
    { youtubeId: "KUgXDJe-smY", poster: testimonialPoster1, title: "Patient testimonial 3" },
    { youtubeId: "nNJwTnyOMzc", poster: testimonialPoster2, title: "Patient testimonial 4" },
    { youtubeId: "itZosr5OUmQ", poster: testimonialPoster3, title: "Patient testimonial 5" },
    { youtubeId: "yBrxCCgs-O8", poster: testimonialPoster4, title: "Patient testimonial 6" },
    { youtubeId: "NO5iDQ1uqrI", poster: testimonialPoster5, title: "Patient testimonial 7" },
  ] satisfies readonly TestimonialVideo[],
} as const;

export const PRACTICE_STATS = [
  { value: "<10", label: "Minutes average wait time for scheduled visits" },
  { value: "1-90+", label: "Ages treated under one roof" },
  { value: "05", label: "Treatment rooms with modern dental chairs" },
  { value: "0-1", label: "Day emergency appointment turnaround" },
  { value: "07", label: "Member full-time team" },
] as const satisfies readonly Stat[];

export const NEXT_STEP_CTA = {
  heading: "Ready to Take the Next Step?",
  body: "Whether you're due for a routine visit or exploring treatment options, we're here to help you move forward with confidence.",
  buttonLabel: "Book an Appointment",
  href: PATIENT_LINKS.bookAppointment,
  imageAlt: "Dr. Aditi Agarwal smiling with her arms crossed",
} as const;

/** "Our Way of Saying Welcome" as worded on the Services page and every service page (the home page has its own copy). */
export const SERVICES_WELCOME = {
  title: "Our Way of Saying Welcome",
  offer: {
    heading: "Exclusive New Patient Welcome Offer",
    body: "After your first visit, which includes cleaning, X-rays, and a full exam. No cash value. The offer must be mentioned at the time of your visit.",
    buttonLabel: "FREE Take-Home Teeth Whitening",
    href: PATIENT_LINKS.patientForms,
    photoAlt: "The reception area at Avondale Smiles",
  },
  forms: {
    heading: "Save Time at Your First Visit",
    body: "Filling out your paperwork ahead of time helps us get to know you better and makes your first appointment run smoothly.",
    buttonLabel: "Complete Your Forms Online",
    href: PATIENT_LINKS.patientForms,
    photoAlt: "An alarm clock on the front desk at Avondale Smiles",
  },
} as const satisfies { title: string } & WelcomeContent;
