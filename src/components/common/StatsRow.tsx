import { PRACTICE_STATS } from "@/constants/common";
import { cn } from "@/lib/utils";
import type { Stat } from "@/types";
import { SlideIn } from "@/components/common";

type StatsRowProps = {
  stats?: readonly Stat[];
};

/** Row of practice figures with thin dividers; stacks into a centred column with rules between on small screens. */
export function StatsRow({ stats = PRACTICE_STATS }: StatsRowProps) {
  return (
    <section className="mx-auto w-full max-w-300 px-5 py-12 lg:py-28">
      <SlideIn once={false} from="bottom" distance={60}>
        <ul className="mx-auto grid w-4/5 lg:w-full lg:grid-cols-5">
          {stats.map((stat, index) => (
            <li
              key={stat.label}
              className={cn(
                "flex flex-col items-center gap-3 border-b border-zinc-400 px-5 py-5 text-center lg:border-b-0 lg:py-0",
                index > 0 && "lg:border-l lg:border-zinc-400",
              )}
            >
              <p className="flex items-center text-4xl font-normal text-black lg:min-h-37.5 lg:text-6xl">
                {stat.value}
              </p>
              <p className="text-base leading-7.5 font-light text-ink-muted lg:text-xl">{stat.label}</p>
            </li>
          ))}
        </ul>
      </SlideIn>
    </section>
  );
}
