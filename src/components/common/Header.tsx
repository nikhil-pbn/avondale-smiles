"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import { Button, Sheet, SheetContent, SheetTitle } from "@/components/ui";
import { HEADER, NAV_ITEMS } from "@/constants/layout";
import { BUSINESS, PATIENT_LINKS } from "@/constants/site";
import { useDisclosure, useMediaQuery, useReducedMotionPreference, useScrolled } from "@/hooks";
import { logo } from "@/images";

const CONTAINER = "mx-auto mb-auto max-w-325 px-5 lg:px-7 xl:px-10";
const EASE = { duration: 0.3, ease: "easeInOut" } as const;
const INSTANT = { duration: 0 } as const;
/** Tailwind `sm`: from here up the mobile menu is a right-hand drawer; below it slides up from the bottom. */
const SIDE_DRAWER = "(min-width: 640px)";

const MENU_SHEET =
  "gap-0 overflow-y-auto border-white/10 bg-charcoal-deep/95 text-white shadow-2xl backdrop-blur-md duration-300 data-starting-style:opacity-100 data-ending-style:opacity-100 data-[side=bottom]:max-h-5/6 data-[side=bottom]:rounded-t-2xl data-[side=bottom]:data-starting-style:translate-y-full data-[side=bottom]:data-ending-style:translate-y-full data-[side=right]:w-80 data-[side=right]:data-starting-style:translate-x-full data-[side=right]:data-ending-style:translate-x-full";

export function Header() {
  const scrolled = useScrolled(HEADER.scrollThreshold);
  const ease = useReducedMotionPreference() ? INSTANT : EASE;
  const menu = useDisclosure();
  const sideDrawer = useMediaQuery(SIDE_DRAWER);

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-white/10 bg-charcoal/90 shadow-xl backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className={`${CONTAINER} flex h-20 items-center justify-between gap-6 lg:h-25 lg:gap-8`}>
        <Link href="/" className="shrink-0 leading-none" aria-label={`${BUSINESS.name} home`}>
          <Image src={logo} alt={BUSINESS.name} priority sizes="160px" className="h-12 w-auto lg:h-13.75" />
        </Link>

        <nav aria-label="Main" className="hidden flex-1 justify-center lg:flex">
          <Suspense fallback={<DesktopNav />}>
            <ActiveDesktopNav />
          </Suspense>
        </nav>

        <Button
          variant="pill-outline"
          size="pill"
          className="hidden shrink-0 lg:inline-flex"
          nativeButton={false}
          render={<a href={PATIENT_LINKS.patientLogin} target="_blank" rel="noopener noreferrer" />}
        >
          {HEADER.loginLabel}
        </Button>

        <button
          type="button"
          onClick={menu.toggle}
          aria-expanded={menu.isOpen}
          aria-controls="mobile-menu"
          aria-label={HEADER.menuLabel}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.25 rounded-md border border-white/40 transition-all duration-700 hover:border-white/80 lg:hidden"
        >
          <motion.span
            className={BAR}
            animate={menu.isOpen ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
            transition={ease}
          />
          <motion.span
            className={BAR}
            animate={menu.isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={ease}
          />
          <motion.span
            className={BAR}
            animate={menu.isOpen ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }}
            transition={ease}
          />
        </button>
      </div>

      <Sheet open={menu.isOpen} onOpenChange={(open) => (open ? menu.open() : menu.close())}>
        <SheetContent id="mobile-menu" side={sideDrawer ? "right" : "bottom"} className={MENU_SHEET}>
          <SheetTitle className="sr-only">{HEADER.menuLabel}</SheetTitle>
          {sideDrawer ? null : (
            <span aria-hidden="true" className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-white/30" />
          )}
          <MobileNav onNavigate={menu.close} className="pt-10 pb-8" />
        </SheetContent>
      </Sheet>
    </header>
  );
}

const BAR = "block h-0.5 w-5 origin-center rounded-sm bg-white";

const DESKTOP_LINK =
  "flex min-h-11 items-center rounded px-4 py-2 text-sm tracking-wide whitespace-nowrap transition-colors duration-300 hover:text-sage";

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function ActiveDesktopNav() {
  const pathname = usePathname();
  return <DesktopNav pathname={pathname} />;
}

function DesktopNav({ pathname = null }: { pathname?: string | null }) {
  return (
    <ul className="flex items-center gap-0.5">
      {NAV_ITEMS.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href} className="group relative">
            <Link
              href={item.href}
              className={`${DESKTOP_LINK} ${active ? "text-sage" : "text-white"}`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
              {item.children ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 12 8"
                  className="ml-1.5 h-2 w-3 fill-current transition-transform duration-300 group-hover:rotate-180"
                >
                  <path d="M6 7.4 0 1.4 1.4 0 6 4.575 10.6 0 12 1.4 6 7.4Z" />
                </svg>
              ) : null}
            </Link>

            {item.children ? (
              <div className="invisible absolute top-full left-0 z-10 translate-y-2 pt-2.5 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="min-w-50 rounded-lg border border-white/10 bg-charcoal-deep/95 py-2 shadow-2xl">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-footer-text transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

const MOBILE_LINK = "block px-7 py-3.5 text-base text-white transition-colors hover:bg-white/5 hover:text-sage";

function MobileNav({ onNavigate, className }: { onNavigate: () => void; className?: string }) {
  const ease = useReducedMotionPreference() ? INSTANT : EASE;
  // Items with children (Services) collapse into an accordion so the menu is not one long list.
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <nav aria-label="Mobile" className={className}>
      <ul>
        {NAV_ITEMS.map((item) => {
          const isOpen = expanded === item.href;
          const panelId = `mobile-sub${item.href.replaceAll("/", "-")}`;
          return (
            <li key={item.href} className="border-b border-white/5">
              {item.children ? (
                <div className="flex items-stretch">
                  <Link href={item.href} onClick={onNavigate} className={`${MOBILE_LINK} flex-1`}>
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : item.href)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    aria-label={`${isOpen ? "Hide" : "Show"} ${item.label} pages`}
                    className="flex w-14 shrink-0 items-center justify-center border-l border-white/5 text-white transition-colors hover:bg-white/5 hover:text-sage"
                  >
                    <motion.svg
                      aria-hidden="true"
                      viewBox="0 0 12 8"
                      className="h-2 w-3 fill-current"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={ease}
                    >
                      <path d="M6 7.4 0 1.4 1.4 0 6 4.575 10.6 0 12 1.4 6 7.4Z" />
                    </motion.svg>
                  </button>
                </div>
              ) : (
                <Link href={item.href} onClick={onNavigate} className={MOBILE_LINK}>
                  {item.label}
                </Link>
              )}

              {item.children ? (
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.ul
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={ease}
                      className="overflow-hidden bg-white/3"
                    >
                      {item.children.map((child) => (
                        <li key={child.href} className="border-t border-white/5">
                          <Link
                            href={child.href}
                            onClick={onNavigate}
                            className={`${MOBILE_LINK} pl-12 text-sm opacity-80`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  ) : null}
                </AnimatePresence>
              ) : null}
            </li>
          );
        })}
      </ul>
      <Button
        variant="pill-outline"
        size="pill"
        className="mx-7 mt-4.5 flex w-auto py-3"
        nativeButton={false}
        render={<a href={PATIENT_LINKS.patientLogin} target="_blank" rel="noopener noreferrer" />}
      >
        {HEADER.loginLabel}
      </Button>
    </nav>
  );
}
