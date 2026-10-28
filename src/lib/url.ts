import { SITE_URL } from "@/constants/site";

/** Absolute URL for a site path. "/" keeps its trailing slash, everything else does not (matches Next's default routing). */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}
