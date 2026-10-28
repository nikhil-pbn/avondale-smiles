# Avondale Smiles

Marketing website for [Avondale Smiles](https://www.avondalesmiles.com), the family and cosmetic dental practice of Dr. Aditi Agarwal DMD in Redmond, WA. A rebuild of the practice's WordPress site as a static-first Next.js app: the old live site is the source of truth for SEO (titles, descriptions, URLs), the WordPress staging site is the source of truth for the design.

## Stack

| Area       | Choice                                                                         |
| ---------- | ------------------------------------------------------------------------------ |
| Framework  | Next.js 16 App Router with Cache Components and Partial Prefetching, Turbopack |
| UI         | React 19, TypeScript, Tailwind CSS v4, shadcn (Base UI primitives), Motion     |
| Icons      | lucide-react plus the practice's own SVG/PNG icons in `src/icons`              |
| Typography | Raleway via `next/font` (the only font on the site)                            |
| Tooling    | ESLint (next core-web-vitals + typescript), Prettier with the Tailwind plugin  |
| Hosting    | Vercel                                                                         |

## Getting started

Requires Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. There are no environment variables: the site URL, business details and third-party links are constants in `src/constants/site/index.ts`.

| Script                 | What it does                                      |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Development server with Turbopack                 |
| `npm run build`        | Production build (also runs the TypeScript check) |
| `npm run start`        | Serve the production build                        |
| `npm run lint`         | ESLint                                            |
| `npm run format`       | Prettier, write mode                              |
| `npm run format:check` | Prettier, check mode (use in CI)                  |

Before handing off a change, run `npm run lint`, `npx tsc --noEmit` and `npm run build`. For anything visual, check it in a real browser at phone, tablet and desktop widths; the layout switches from stacked to side by side at the `lg` breakpoint (1024px).

## Project structure

```
src/
  app/                  One folder per route. page.tsx composes sections and exports that page's metadata.
    services/[service]/ Dynamic service pages; services.ts holds per-service SEO, _og/ the OG images.
    sitemap.ts, robots.ts, opengraph-image.* per route, globals.css, layout.tsx
  components/
    common/             Header, Footer and every section rendered by more than one page.
    <page>/             Sections used by that page only, one file per section.
    ui/                 shadcn primitives (button, dialog, select, sheet, tabs).
  constants/
    site/               Business details, phones, address, social profiles, patient portal links, SITE_URL.
    office/             Opening hours and office cards.
    layout/             Navigation, header, footer and widget copy.
    common/             Copy for sections shared across pages.
    <page>/             All copy for one page.
  lib/                  hours (open/closed logic), schema (JSON-LD), url, utils, accessibility/
  hooks/                Small client hooks (media query, scroll, click outside, reduced motion).
  types/                Shared TypeScript types, re-exported from types/index.ts.
  fonts/ icons/ images/ Font setup, icons and imported images (next/image handles sizing).
public/videos/          Home hero video.
```

Every folder under `src` has an `index.ts` barrel. Import through the `@/` alias only; relative imports fail lint.

## Routes

| Route                      | Content                                                                     |
| -------------------------- | --------------------------------------------------------------------------- |
| `/`                        | Home: video hero, services grid, welcome offer, doctor, hours, testimonials |
| `/about`                   | Practice story, doctor profile with stats, team                             |
| `/services`                | Services overview                                                           |
| `/services/[service]`      | One page per service: hero, tabbed detail content, testimonials, offer, CTA |
| `/why-us`                  | Reasons to choose the practice, reviews                                     |
| `/book-an-appointment`     | First-visit guidance and booking links                                      |
| `/contact-us`              | Office info cards, map, hours                                               |
| `/pay-bill-online`         | Payment portal link and accepted payment methods                            |
| `/accessibility-statement` | Statement for the in-house accessibility menu                               |

Service slugs: general-dentistry, pediatric-dentistry, sedation-dentistry, orthodontic-services, dental-implants, emergency-dentistry. `/sitemap.xml` and `/robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts`; the sitemap picks up service slugs automatically.

## Conventions

These are the rules the codebase follows. Keep to them so the site stays consistent.

- **Pages compose, sections render.** A `page.tsx` only lists sections and exports metadata. Section components take their copy from `constants`, never hard-code it.
- **Where a component lives.** `components/common` is for Header, Footer and anything rendered from more than one file. Count the actual usages; do not move a section to common because it might be reused later.
- **SEO per page.** Each `page.tsx` owns its `metadata`. There is no central SEO file. Open Graph images sit in the route folder. JSON-LD comes from `src/lib/schema.ts` and is rendered once in the root layout.
- **Typography.** Raleway only, referenced by its CSS variable from `src/fonts`. Never `font-sans`, never a fallback font stack.
- **Sizing.** Tailwind scale classes only, no arbitrary `px` or `rem` values. The whole site scales from the `html` font-size in `globals.css`.
- **Responsive.** Mobile first. `lg` (1024px) is the stacking breakpoint; `sm` and `md` adjust density inside the stacked layout.
- **Motion.** Wrap entrances in `SlideIn` (animates once by default). Anything animated must honour `useReducedMotionPreference`, which combines the OS setting with the accessibility menu's "stop animations" switch.
- **Data reads.** With Cache Components on, anything that reads `params` or request data runs inside a `Suspense` boundary; shared sections stay outside it so they prerender.
- **shadcn.** Add primitives with `npx shadcn add <name>`. The CLI overwrites `components/ui/button.tsx`, so back up the custom pill variants before adding and restore them after.

## Editing content

| What                                 | Where                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| Phone numbers, address, social links | `src/constants/site/index.ts` (`BUSINESS`, `SOCIAL_PROFILES`)                |
| Booking, forms, portal, payment URLs | `src/constants/site/index.ts` (`PATIENT_LINKS`)                              |
| Opening hours                        | `src/constants/office/index.ts`                                              |
| Navigation and footer                | `src/constants/layout/index.ts`                                              |
| Copy for a page                      | `src/constants/<page>/index.ts`                                              |
| Service detail copy                  | `src/constants/services/<slug>.ts` (hero, tabs as HTML strings, closing CTA) |
| Service titles and descriptions      | `src/app/services/[service]/services.ts`                                     |
| Images                               | `src/images/<page>/`, exported from `src/images/index.ts`                    |

To add a service: add the slug to `ServiceSlug` in `src/types/service.ts`, create `src/constants/services/<slug>.ts` and register it in `SERVICE_DETAILS` and the overview list in `src/constants/services/index.ts`, add its SEO entry and OG image under `src/app/services/[service]/`, and drop its icon and hero image in `src/images/services/`. The sitemap and static params follow from the slug list.

## Accessibility menu

The round button at the bottom right opens the site's own accessibility menu (no third-party widget): profiles, text size and spacing, colour modes, reading mask, stop animations, big cursor and read-aloud. Code lives in `src/lib/accessibility` (settings, store, boot script) and `src/components/common/AccessibilityMenu.tsx` / `AccessibilityProvider.tsx`. Settings persist in `localStorage` under `avondale-smiles:accessibility` and are applied by an inline script before first paint, which is why `<html>` carries `suppressHydrationWarning`. The styles that respond to the settings are the `html[data-a11y-*]` rules at the end of `globals.css`.

The button sits in `FloatingActions`, a small dock with an `orientation` prop set in the root layout. A "Text us" widget (`TextUsWidget`, posting to `/api/text-requests`) is also in the codebase but commented out of the dock. Its store writes to `data/text-requests.json`, which only works on a host with a persistent disk; swap `src/lib/text-requests.ts` for Vercel Blob or a database before enabling it on Vercel.

## Deployment

The site deploys to Vercel from the `master` branch; a production build has no runtime dependencies beyond Next itself. `next.config.ts` sets `experimental.agentUpgrade` to `security`, so `next dev` and `next build` warn when the installed Next.js version has a published advisory. Apply such an upgrade with `npx next upgrade --agent=security`.
