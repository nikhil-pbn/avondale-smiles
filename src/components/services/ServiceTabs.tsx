"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import type { ServiceTab } from "@/types";

/** Styles for the WordPress-authored copy inside each panel: paragraphs, bold runs and dotted lists. */
const RICH_TEXT = [
  "[&_p]:mb-2.5 [&_p]:text-sm [&_p]:leading-5.25 [&_p]:text-ink-muted [&_p:last-child]:mb-0",
  "[&_strong]:font-semibold [&_strong]:text-ink",
  "[&_ul]:mb-4.5 [&_ul]:list-none [&_ul]:pl-0",
  "[&_li]:relative [&_li]:pl-3 [&_li]:text-sm [&_li]:leading-7.5 [&_li]:text-ink-muted",
  "[&_li]:before:absolute [&_li]:before:top-3.5 [&_li]:before:left-0 [&_li]:before:size-0.75 [&_li]:before:rounded-full [&_li]:before:bg-zinc-500",
].join(" ");

/** "01." style prefix shown before panel headings and dropdown labels, as on the new site. */
const number = (index: number) => `${String(index + 1).padStart(2, "0")}.`;

type ServiceTabsProps = {
  tabs: readonly ServiceTab[];
};

/**
 * The service's sub-topics: a vertical list of pill tabs beside the active topic's copy on desktop; on smaller
 * screens the list becomes a dropdown above the copy, as on the new site.
 */
export function ServiceTabs({ tabs }: ServiceTabsProps) {
  const [value, setValue] = useState<string>(tabs[0]?.id ?? "");

  if (!tabs.length) return null;

  return (
    <section className="mx-auto w-full max-w-300 px-5 py-12 lg:py-20">
      <Tabs
        value={value}
        onValueChange={(next) => setValue(String(next))}
        orientation="vertical"
        className="flex flex-col gap-8 lg:grid lg:grid-cols-10 lg:items-start lg:gap-12 xl:gap-20"
      >
        <Select
          value={value}
          onValueChange={(next) => setValue(String(next))}
          items={tabs.map((tab, index) => ({ value: tab.id, label: `${number(index)} ${tab.title}` }))}
        >
          <SelectTrigger
            aria-label="Choose a topic"
            className="h-auto w-full rounded-lg border-neutral-200 bg-neutral-100 px-6 py-5 text-sm font-medium whitespace-normal text-ink lg:hidden [&_svg]:text-ink"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false} className="rounded-lg ring-neutral-200">
            {tabs.map((tab) => (
              <SelectItem
                key={tab.id}
                value={tab.id}
                className="rounded-none border-b border-neutral-100 px-4.5 py-3.25 text-sm text-zinc-700 last:border-0 data-selected:font-medium data-selected:text-ink"
              >
                {number(tabs.indexOf(tab))} {tab.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <TabsList
          variant="line"
          className="hidden w-full flex-col items-stretch gap-0 rounded-none bg-transparent p-0 lg:col-span-3 lg:flex"
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="h-auto w-full justify-start rounded-full border-0 border-b border-neutral-200 px-4.5 py-4 text-left text-sm leading-snug font-normal whitespace-normal text-charcoal transition-colors after:hidden hover:text-ink data-active:bg-neutral-200 data-active:font-semibold data-active:text-charcoal data-active:shadow-none"
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab, index) => (
          <TabsContent key={tab.id} value={tab.id} className="lg:col-span-7">
            <h2 className="mb-5 text-2xl leading-tight font-normal text-ink lg:text-3xl">
              {number(index)} {tab.heading}
            </h2>
            <div className={RICH_TEXT} dangerouslySetInnerHTML={{ __html: tab.html }} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
