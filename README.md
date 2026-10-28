# Avondale Smiles

The website of **Avondale Smiles**, the family and cosmetic dental practice of **Dr. Aditi Agarwal, DMD** in Redmond, Washington.

- Live site: https://www.avondalesmiles.com
- Office: 11523 Avondale Rd NE, Suite 115, Redmond, WA 98052
- Phone: 425-298-6684 (main) and 425-970-9955
- Patients come from Redmond, Woodinville, Kirkland, Bellevue, Duvall, Carnation and the surrounding Eastside.

This is a full rebuild of the practice's previous WordPress site. The look and wording follow the approved new design; the page addresses, titles and descriptions were carried over from the old site so the practice keeps its search rankings.

## What the site does

The site has four jobs:

1. **Bring in new patients.** Every page leads to "Book an Appointment", which opens the practice's online scheduler. New patients also see the welcome offer and what to expect on a first visit.
2. **Explain the services.** An overview page plus a dedicated page for each service, written for patients rather than dentists.
3. **Build trust.** The doctor's story and credentials, the team, patient video testimonials, the Top Dentist award and a link to the practice's 500+ Google reviews.
4. **Serve existing patients.** Office hours, directions and a map, online forms, the patient portal and online bill pay, all reachable from the header and footer.

## Pages

| Page                    | What a visitor finds there                                                                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Home                    | Video welcome, the services at a glance, the new-patient welcome offer, Dr. Agarwal, hours and map, testimonials                                |
| About                   | The practice story, Dr. Agarwal's profile and experience, the extended team, where to find the office                                           |
| Services                | All services in one place, each linking to its own page                                                                                         |
| Service pages           | One page per service: an introduction, detailed sections a visitor can move between, testimonials, the welcome offer and a closing call to book |
| Why Us                  | The reasons patients choose the practice, reviews, the award                                                                                    |
| Book an Appointment     | What a first visit looks like, how to prepare, and the booking link                                                                             |
| Contact Us              | Phone numbers, address, opening hours, map and directions                                                                                       |
| Pay Bill Online         | The online payment portal and accepted payment methods                                                                                          |
| Accessibility Statement | What the site does for visitors with disabilities and how to get help                                                                           |

## Services

| Service              | Covers                                                                                                               |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| General Dentistry    | Check-ups, cleanings, fillings, crowns and the everyday care of the whole family                                     |
| Pediatric Dentistry  | Gentle, friendly care for children, with a focus on prevention and positive first experiences                        |
| Sedation Options     | Nitrous oxide and oral sedation for patients who feel anxious about dental visits                                    |
| Orthodontic Services | Clear aligners for teens and adults who want straighter teeth without braces                                         |
| Dental Implants      | Durable, natural-looking replacements for missing teeth that preserve jaw health                                     |
| Emergency Dentistry  | Fast relief for tooth pain, infections, broken or knocked-out teeth, lost fillings and crowns, swelling and injuries |

## Patient tools the site links to

These live outside the website and are run by the practice's existing providers; the site simply sends patients to them.

- Online appointment booking
- New-patient forms to complete online
- Patient login (portal)
- Pay a bill online
- Google reviews, plus the practice's Facebook, YouTube, Yelp and Zocdoc profiles

## Design

- Follows the practice's approved design: calm charcoal, sage and mist colours, generous photography, the Raleway typeface throughout.
- Works on phones, tablets and desktops. Phones and tablets get a stacked layout; desktops get the side-by-side layout.
- Subtle motion as sections come into view, which switches off for visitors who have asked their device for reduced motion.
- A short, compressed welcome video on the home page so it plays quickly on mobile data.

## Accessibility

The site includes its own accessibility menu, opened from the round button at the bottom right of every page. It was built in-house, so nothing is loaded from a third party and nothing about the visitor leaves the site. Visitors can:

- pick a profile that applies a set of adjustments at once: Seizure Safe, Blind, Visually Impaired, ADHD Friendly, Cognitive & Learning, or Motor Impaired;
- enlarge text, increase letter and line spacing, make text bolder, and highlight headings and links;
- switch to dark, light, high-contrast, monochrome or saturation-adjusted colours;
- use a reading mask that dims everything except the line being read, a bigger cursor, "stop animations", and read-aloud, which speaks whatever the pointer or keyboard focus rests on.

Choices are remembered on the visitor's device and applied before the page is drawn, so there is no flash. The whole site is keyboard-navigable, and an Accessibility Statement page explains all of this and gives a way to report problems.

## Search engines and sharing

- Page addresses, titles and descriptions match the old site, so existing rankings and links carry over.
- Every page has its own preview image and text for when a link is shared on Facebook, Messenger or in a text message.
- A sitemap and robots file are generated automatically and include every service page.
- Structured data describes the practice as a dentist with its address, phone numbers, opening hours and social profiles, which helps Google show rich results.
- Google Search Console verification is in place.

## Privacy

The site sets no cookies and loads no advertising or analytics trackers. The accessibility menu stores its settings in the visitor's own browser only. A "text us" form was built and then parked; it is not shown on the site and no messages are collected.

## Hosting and updates

The site is hosted on Vercel and deploys automatically from the `master` branch of the GitHub repository. Hosting needs no configuration: there are no environment variables or external services to set up.

Text, phone numbers, hours, links and images are all kept in one place in the project, grouped by page, so a wording change is a small edit followed by a deploy. Changes should be checked on a phone and a desktop before they go live.

## For developers

Built with Next.js, React, TypeScript and Tailwind CSS.

```bash
npm install
npm run dev      # local site at http://localhost:3000
npm run build    # production build with type checking
npm run lint
```

Copy lives under `src/constants`, pages under `src/app`, sections under `src/components`. Follow the conventions already in the code: copy in constants (never in components), one section per file, the `@/` import alias, Raleway only, and Tailwind scale classes rather than custom sizes.
