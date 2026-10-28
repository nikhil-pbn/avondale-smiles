import Link from "next/link";
import { ACCESSIBILITY_STATEMENT } from "@/constants/accessibility-statement";
import { BUSINESS } from "@/constants/site";

type AccessibilityStatementProps = {
  content?: typeof ACCESSIBILITY_STATEMENT;
};

/** The accessibility statement: our standard, what the site does, the accessibility menu, and how to get help. */
export function AccessibilityStatement({ content = ACCESSIBILITY_STATEMENT }: AccessibilityStatementProps) {
  return (
    <section className="mx-auto w-full max-w-200 px-5 py-12 lg:py-20">
      <h1 className="text-3xl leading-tight font-light text-black lg:text-5xl">{content.heading}</h1>
      <p className="mt-3 text-sm text-zinc-500">Last reviewed {content.lastReviewed}</p>
      <p className="mt-6 text-base leading-7 text-ink-muted">{content.intro}</p>

      {content.sections.map((section) => (
        <div key={section.heading} className="mt-10">
          <h2 className="text-2xl font-light text-black lg:text-3xl">{section.heading}</h2>
          {"paragraphs" in section
            ? section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-7 text-ink-muted">
                  {paragraph}
                </p>
              ))
            : null}
          {"bullets" in section ? (
            <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-ink-muted">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}

      <p className="mt-10 text-base leading-7 text-ink-muted">
        <a href={BUSINESS.phones.primary.href} className="font-medium text-ink underline underline-offset-4">
          {BUSINESS.phones.primary.display}
        </a>
        {" · "}
        <Link href="/contact-us" className="font-medium text-ink underline underline-offset-4">
          Contact us
        </Link>
      </p>
    </section>
  );
}
