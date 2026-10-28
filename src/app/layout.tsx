import type { Metadata } from "next";
import { AccessibilityProvider, FloatingActions, Footer, Header, JsonLd } from "@/components";
import { raleway } from "@/fonts";
import { A11Y_BOOT_SCRIPT } from "@/lib/accessibility/boot";
import { siteGraph } from "@/lib/schema";
import { BUSINESS, GOOGLE_SITE_VERIFICATION, OPEN_GRAPH_DEFAULTS, SITE_NAME, SITE_URL } from "@/constants/site";
import "@/app/globals.css";
import { cn } from "@/lib/utils";

/**
 * Site-wide defaults. Each page sets its own title, description, canonical and og:url.
 * The title template reproduces the old site's "Page | General and Cosmetic Dentist, Redmond, WA" pattern.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  applicationName: BUSINESS.name,
  verification: { google: GOOGLE_SITE_VERIFICATION },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: OPEN_GRAPH_DEFAULTS,
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the boot script adds the visitor's saved accessibility attributes to <html> before React runs.
    <html lang="en" suppressHydrationWarning className={cn("h-full antialiased", raleway.variable)}>
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: A11Y_BOOT_SCRIPT }} />
        <AccessibilityProvider>
          <Header />
          {children}
          <Footer />
        </AccessibilityProvider>
        {/* orientation: "horizontal" side by side, "vertical" stacked */}
        <FloatingActions orientation="vertical" />
        <JsonLd data={siteGraph()} />
      </body>
    </html>
  );
}
