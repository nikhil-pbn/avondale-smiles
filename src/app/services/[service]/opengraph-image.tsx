import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ServiceSlug } from "@/types/service";
import { SERVICES, SERVICE_SLUGS, getService } from "@/app/services/[service]/services";

/**
 * Serves each service's own Open Graph image from ./_og.
 * Next resolves this into <meta property="og:image"> for /services/[service].
 *
 * The files are read once at module scope: they never depend on request data, and reading them
 * during render would count as uncached IO under Cache Components and fail the prerender.
 */

const OG_DIR = join(process.cwd(), "src", "app", "services", "[service]", "_og");

const OG_FILES = new Map<ServiceSlug, Uint8Array<ArrayBuffer>>(
  await Promise.all(
    SERVICE_SLUGS.map(async (slug) => {
      const file = await readFile(join(OG_DIR, SERVICES[slug].ogImage.file));
      return [slug, new Uint8Array(file)] as const;
    }),
  ),
);

export function generateImageMetadata({ params }: { params?: { service?: string } }) {
  const service = params?.service ? getService(params.service) : undefined;
  if (!service) return [];

  return [
    {
      id: service.slug,
      alt: service.ogImage.alt,
      size: { width: service.ogImage.width, height: service.ogImage.height },
      contentType: "image/jpeg",
    },
  ];
}

export default async function Image({ id }: { id: Promise<string | number> }) {
  const service = getService(String(await id));
  const file = service ? OG_FILES.get(service.slug) : undefined;
  if (!file) return new Response("Not Found", { status: 404 });

  return new Response(file, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
