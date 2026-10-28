/** Copy for /about, taken from the new site's About page. */
export const ABOUT_PAGE = {
  banner: { heading: "About Us" },
  intro: {
    headingLines: ["A Practice Built on Experience,", "Care, and Consistency."],
    body: "Choosing a dentist is personal. You're trusting someone with your health, your comfort, and your smile. At our Redmond practice, we've built a team that patients stay with for years, not because of flashy promises, but because of steady, thoughtful care and people who genuinely listen.",
  },
  doctor: {
    eyebrow: "Where Care Begins",
    heading: "Your Dentist & Practice Owner",
    paragraphs: [
      "When Dr. Aditi Agarwal relocated to the United States, she already had a solid foundation in dentistry, having completed her dental education and practiced general dentistry in India. Wanting to fully understand and work within the U.S. system of care, she chose to continue her education and earned her Doctor of Dental Medicine (DMD) degree from Boston University in 2003.",
      "Since then, Dr. Agarwal has practiced in Washington, earning the trust of families who value thorough, compassionate dentistry. Her approach blends prevention, minimally invasive treatment, and smile-first aesthetics.",
    ],
    stats: [
      { value: "22+", label: "Years of clinical dental experience" },
      { value: "5,000+", label: "Patients treated over the years" },
      { value: "1,000", label: "Surgical procedures performed" },
    ],
    photoAlt: "Dr. Aditi Agarwal smiling in a treatment room at Avondale Smiles",
  },
  team: {
    eyebrow: "Our Team",
    heading: "The People Who Make Every Visit Run Smoothly",
    body: "Behind every great dental experience is a great team. From your first phone call to your final follow-up, our staff works together to make every visit smooth, welcoming, and stress-free.",
    photoAlt: "The dental care team at Avondale Smiles",
  },
  coverage: {
    heading: "Your Care, Always Covered!",
    body: "While Dr. Aditi is away contributing to the dental community through education and mentorship, she has personally brought in trusted dental providers to ensure your experience remains seamless and uninterrupted.",
    subheading: "Our extended team includes:",
    providers: ["Dr. Kenza Houki", "Dr. Madhuri Yakkali"],
    photoAlt: "A dentist talking with a patient in the treatment chair",
  },
  findUs: {
    heading: "Where to Find Us",
    body: "Avondale Smiles is conveniently located at the intersection of Avondale Road and 116th Street in North Redmond, WA, within the same shopping complex as PCC Community Markets, making your dental visits easy to find and easy to fit into your day. From routine checkups to advanced treatments, we offer comprehensive general and family dentistry, along with select cosmetic dental services, all under one roof.",
  },
} as const;
