import { Raleway } from "next/font/google";

/** The only font on the site. Exposed as the `--font-raleway` CSS variable; globals.css makes it the default for everything. */
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
  adjustFontFallback: false,
  fallback: [],
});
