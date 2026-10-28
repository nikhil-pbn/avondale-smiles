import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { FOOTER, SOCIAL_LINKS } from "@/constants/layout";
import { BUSINESS, PATIENT_LINKS } from "@/constants/site";
import { facebookIcon, googleIcon, yelpIcon, youtubeIcon, zocdocIcon } from "@/icons";
import { logo } from "@/images";
import type { NavLink, SocialIconKey } from "@/types/navigation";

const SOCIAL_ICONS: Record<SocialIconKey, typeof facebookIcon> = {
  facebook: facebookIcon,
  youtube: youtubeIcon,
  yelp: yelpIcon,
  zocdoc: zocdocIcon,
  google: googleIcon,
};

export function Footer() {
  return (
    <footer className="bg-charcoal py-7.5 text-white md:pb-20">
      <div className="mx-auto max-w-325 px-5 py-7.5 md:px-7 md:py-0 xl:px-10">
        <div className="hidden items-end justify-between pt-14 pb-5 md:flex">
          <Link href="/" className="inline-block leading-none" aria-label={`${BUSINESS.name} home`}>
            <Image src={logo} alt={BUSINESS.name} sizes="200px" className="h-17.5 w-auto" />
          </Link>
          <BookButton size="pill-lg" className="text-sm font-normal" />
        </div>

        <div className="grid gap-9 md:pt-7.5 md:pb-9.25 lg:grid-cols-2 lg:gap-15">
          <div className="lg:max-w-105">
            <Image src={logo} alt={BUSINESS.name} sizes="200px" className="mx-auto mb-8 h-17.5 w-auto md:hidden" />
            <p className="mx-auto mb-3.5 w-4/5 text-center text-base leading-normal font-medium md:mx-0 md:w-auto md:text-left">
              {FOOTER.tagline}
            </p>
            <p className="mb-6.5 text-center text-sm leading-snug text-footer-text/80 md:mb-9.5 md:text-left md:leading-relaxed">
              {FOOTER.description}
            </p>
            <BookButton size="pill-sm" className="mx-auto flex w-fit text-xs font-semibold md:hidden" />
            <SocialLinks className="hidden md:flex" />
          </div>

          <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {FOOTER.columns.map((column, index) => (
              <div
                key={column.title ?? index}
                className="mx-auto w-1/2 border-b border-white/47 pb-5 text-center md:mx-0 md:w-auto md:border-0 md:pb-0 md:text-left"
              >
                {column.title ? (
                  <h3 className="mb-3.75 text-lg leading-snug font-semibold tracking-wide md:mb-4.5">{column.title}</h3>
                ) : null}
                <ul>
                  {column.links.map((item) => (
                    <li key={item.label} className={column.bold ? "mb-2.5" : "mb-1"}>
                      <FooterLink item={item} bold={column.bold} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="text-center md:hidden">
              <h3 className="mb-4 text-lg font-semibold">{FOOTER.followLabel}</h3>
              <SocialLinks className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function BookButton({ size, className }: { size: "pill-sm" | "pill-lg"; className?: string }) {
  return (
    <Button
      variant="pill"
      size={size}
      className={className}
      nativeButton={false}
      render={<a href={PATIENT_LINKS.bookAppointment} target="_blank" rel="noopener noreferrer" />}
    >
      {FOOTER.bookLabel}
    </Button>
  );
}

function FooterLink({ item, bold }: { item: NavLink; bold?: boolean }) {
  const className = bold
    ? "text-sm font-medium text-footer-text md:text-base transition-colors hover:text-white md:font-bold"
    : "text-sm font-medium text-footer-text/80 transition-colors hover:text-white md:text-base md:font-normal";

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 md:gap-5 ${className}`}>
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.icon}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="flex transition-transform duration-300 hover:-translate-y-0.5"
        >
          <Image src={SOCIAL_ICONS[social.icon]} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
        </a>
      ))}
    </div>
  );
}
