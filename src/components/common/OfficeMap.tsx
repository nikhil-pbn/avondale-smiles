import { BUSINESS } from "@/constants/site";

type OfficeMapProps = {
  className?: string;
};

/** Google Maps embed of the office. Free iframe embed, no API key. */
export function OfficeMap({ className = "" }: OfficeMapProps) {
  return (
    <div className={`overflow-hidden rounded ${className}`}>
      <iframe
        title={`Map showing ${BUSINESS.name} at ${BUSINESS.addressDisplay}`}
        src={BUSINESS.mapEmbedUrl}
        className="block h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
