import { PATIENT_LINKS } from "@/constants/site";

/** Copy for /book-an-appointment, taken from the new site's Book an Appointment page. */
export const BOOK_PAGE = {
  firstVisit: {
    heading: "Get Ready for Your First Visit",
    body: "Once your appointment is scheduled, you can complete your new patient forms online before coming to the office. This helps us save time at check-in and makes your first visit smoother. Use the secure link below to access our patient portal. The forms typically take about 10 minutes to complete.",
    buttonLabel: "Book an Appointment",
    href: PATIENT_LINKS.bookAppointment,
    iconAlt: "",
  },
} as const;
