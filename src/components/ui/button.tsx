import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

/**
 * The new site's pill hover: a circle of the fill colour (`--sweep-fill`) grows from the bottom-left corner over the
 * resting colour (`before:bg-*`). Both are painted on one pseudo-element inside the padding box, so the button's own
 * border stays visible around the sweep and no hairline of the resting colour shows at the curved edges.
 */
const SWEEP =
  "relative isolate duration-300 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-full before:[--sweep:0%] before:[background-image:radial-gradient(circle_at_0%_100%,var(--sweep-fill)_var(--sweep),transparent_calc(var(--sweep)_+_1px))] before:transition-[--sweep] before:duration-500 before:ease-in-out hover:before:[--sweep:100%]";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
        pill: `${SWEEP} rounded-full border-white bg-transparent font-light text-charcoal before:bg-white before:[--sweep-fill:var(--color-sage-light)]`,
        "pill-outline": `${SWEEP} rounded-full border-white/55 bg-transparent font-medium tracking-wide text-white before:[--sweep-fill:white] hover:border-white/80 hover:text-zinc-900`,
        "pill-dark": `${SWEEP} rounded-full border-zinc-400 bg-transparent font-medium tracking-wide text-zinc-800 before:[--sweep-fill:var(--color-zinc-800)] hover:border-zinc-800 hover:text-white`,
        "pill-solid": `${SWEEP} rounded-full border-charcoal bg-transparent font-medium text-white before:bg-charcoal before:[--sweep-fill:var(--color-zinc-700)]`,
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
        pill: "h-auto px-6 py-2.5 text-sm",
        "pill-sm": "h-auto px-4.5 py-3 text-sm",
        "pill-lg": "h-auto px-9 py-3.75 text-base",
        "pill-wide": "h-auto w-55 px-5 py-3.25 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return <ButtonPrimitive data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
