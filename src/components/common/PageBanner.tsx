/**
 * Dark band at the top of inner pages. The header is transparent and sits over it,
 * matching the new site's inner-page layout.
 */
export function PageBanner() {
  return (
    <div aria-hidden="true" className="relative h-20 bg-charcoal lg:h-25">
      <div className="absolute inset-0 bg-linear-to-b from-black to-transparent" />
    </div>
  );
}
