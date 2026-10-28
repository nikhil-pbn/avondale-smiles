import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SlideIn } from "@/components/common";
import { Button } from "@/components/ui";
import { HOME_PAGE } from "@/constants/home";
import { heroPoster, locationPinIcon, planVisitIcon, talkTeamIcon } from "@/images";
import type { HeroCard } from "@/types";

/** Served from /public so the browser streams it; next/image is for stills only. */
const HERO_VIDEO = "/videos/home-hero.mp4";
const RISE = 24;

const CARD_ICONS: Record<HeroCard["icon"], typeof planVisitIcon> = {
  plan: planVisitIcon,
  call: talkTeamIcon,
  location: locationPinIcon,
};

type HomeHeroProps = {
  content?: typeof HOME_PAGE.hero;
};

/**
 * Full-screen video hero from the new site: welcome copy and booking button over a looping clinic video, with
 * three quick links in a translucent bar on desktop and as a stacked list on smaller screens.
 */
export function HomeHero({ content = HOME_PAGE.hero }: HomeHeroProps) {
  return (
    <section className="relative flex min-h-112.5 flex-col items-center justify-end gap-5 overflow-hidden px-5 pt-25 pb-7.5 text-center lg:min-h-screen lg:justify-center lg:gap-7.5 lg:py-12">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        poster={heroPoster.src}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-black/70 to-black opacity-75" />

      <div className="relative mx-auto flex w-full max-w-300 flex-col items-center gap-2.5 lg:gap-4">
        <SlideIn from="bottom" distance={RISE} delay={0.05}>
          <p className="text-xl font-light text-white lg:text-4xl">{content.eyebrow}</p>
        </SlideIn>
        <SlideIn from="bottom" distance={RISE} delay={0.15}>
          <h1 className="text-4xl leading-tight font-normal text-white lg:text-7xl lg:leading-20">{content.heading}</h1>
        </SlideIn>
        <SlideIn from="bottom" distance={RISE} delay={0.25}>
          <h2 className="text-sm font-normal text-white lg:text-3xl">{content.subheading}</h2>
        </SlideIn>
        <SlideIn from="bottom" distance={RISE} delay={0.35} className="lg:max-w-2/3">
          <p className="text-sm leading-5 text-white lg:text-lg lg:leading-7">{content.body}</p>
        </SlideIn>
        <SlideIn from="bottom" distance={RISE} delay={0.45}>
          <Button
            variant="pill-outline"
            size="pill-wide"
            nativeButton={false}
            render={<a href={content.href} target="_blank" rel="noopener noreferrer" />}
          >
            {content.buttonLabel}
          </Button>
        </SlideIn>
      </div>

      {/* Quick links: a bar on desktop, a list below lg */}
      <SlideIn from="bottom" distance={RISE} delay={0.55} className="relative w-full max-w-300">
        <ul className="mx-auto hidden w-9/10 grid-cols-3 rounded-2xl bg-black/65 lg:grid">
          {content.cards.map((card, index) => (
            <li key={card.label} className={index === 1 ? "border-x border-white/20" : undefined}>
              <CardLink
                card={card}
                className="flex min-h-27.5 items-center justify-center gap-2.5 text-xl font-medium text-white transition-colors hover:text-sage"
              >
                <Image src={CARD_ICONS[card.icon]} alt="" className="h-7.5 w-auto" />
                {card.label}
              </CardLink>
            </li>
          ))}
        </ul>
        <ul className="rounded-lg bg-neutral-600/80 px-7.5 py-2.5 text-left backdrop-blur-md lg:hidden">
          {content.cards.map((card) => (
            <li key={card.label} className="border-b border-white/25 last:border-0">
              <CardLink card={card} className="flex items-center justify-between gap-4 py-3.5 text-xl text-white">
                {card.label}
                <span className="flex h-8.75 w-8.75 shrink-0 items-center justify-center rounded-full bg-zinc-700">
                  <ChevronRight className="size-4.5" />
                </span>
              </CardLink>
            </li>
          ))}
        </ul>
      </SlideIn>
    </section>
  );
}

function CardLink({ card, className, children }: { card: HeroCard; className: string; children: React.ReactNode }) {
  return card.href.startsWith("/") ? (
    <Link href={card.href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={card.href} className={className}>
      {children}
    </a>
  );
}
