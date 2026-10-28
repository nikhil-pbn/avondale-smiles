import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { PAY_BILL_PAGE } from "@/constants/pay-bill-online";
import { PATIENT_LINKS } from "@/constants/site";
import { paymentIcons } from "@/images";
import { SlideIn } from "@/components/common";

type PayBillSectionProps = {
  content?: typeof PAY_BILL_PAGE;
};

/** The pay-bill page body: copy and the "Pay My Bill" button on the left, card logos and payment options on the right. */
export function PayBillSection({ content = PAY_BILL_PAGE }: PayBillSectionProps) {
  const { heading, intro, secure, payLabel, cardsAlt, options } = content;

  return (
    <section className="mx-auto w-full max-w-300 px-5 py-10 md:py-24">
      <div className="grid gap-12 md:grid-cols-5 md:items-center lg:grid-cols-10">
        <SlideIn from="left" className="md:col-span-3 lg:col-span-6">
          <h1 className="mb-5 text-3xl leading-tight font-light tracking-tight text-ink md:text-4xl">{heading}</h1>
          <div className="space-y-4">
            {intro.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-normal text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>

          <h2 className="mt-7.5 mb-2 text-2xl leading-tight font-light tracking-tight text-ink">{secure.heading}</h2>
          <p className="mb-5 text-sm leading-normal text-ink-soft">{secure.body}</p>
          <Button
            variant="pill-dark"
            size="pill"
            className="px-7.5"
            nativeButton={false}
            render={<a href={PATIENT_LINKS.payBillOnline} target="_blank" rel="noopener noreferrer" />}
          >
            {payLabel}
          </Button>
        </SlideIn>

        <SlideIn from="right" delay={0.12} className="md:col-span-2 md:pt-2 lg:col-span-3 lg:col-start-8">
          <Image
            src={paymentIcons}
            alt={cardsAlt}
            loading="eager"
            sizes="256px"
            className="mb-3.75 h-auto w-64 max-w-full"
          />
          <h2 className="mb-3.5 text-xl font-normal text-ink">{options.heading}</h2>
          <p className="text-sm leading-relaxed text-ink-soft">
            {options.bodyBefore}
            <Link href="/contact-us" className="text-zinc-800 underline hover:text-black hover:no-underline">
              {options.contactLabel}
            </Link>
            {options.bodyMiddle}
            {options.policyLabel}
            {options.bodyAfter}
          </p>
        </SlideIn>
      </div>
    </section>
  );
}
