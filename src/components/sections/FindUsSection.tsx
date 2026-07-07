"use client";

import { ArrowSquareOut, NavigationArrow, Star } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/data/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const searchQuery = `${siteConfig.name} ${siteConfig.streetAddress}, ${siteConfig.addressLocality}, ${siteConfig.addressRegion} ${siteConfig.postalCode}`;
const viewOnMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(searchQuery)}`;

export function FindUsSection() {
  const ref = useScrollReveal<HTMLElement>();
  const { ui } = useLanguage();

  return (
    <section ref={ref} className="find-us bg-white">
      <div className="mx-auto max-w-[1200px] px-7 py-22">
        <h2 className="m-0 mb-9.5 text-center text-[clamp(24px,3vw,28px)] tracking-[-0.02em]">
          {ui.findUs.headingLead} <span className="font-bold">{ui.findUs.headingStrong}</span>
        </h2>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] sm:aspect-[16/9]">
          <iframe
            src={siteConfig.mapsEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title={ui.findUs.mapTitle}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(178.9deg, rgba(36,36,36,0.08) 10%, rgba(255,255,255,0) 55%, rgb(255,255,255) 86%)",
            }}
          />
          <div className="absolute top-6 left-6 flex max-w-[calc(100%-3rem)] gap-4 rounded-xl bg-white/50 p-6 shadow-[4px_4px_15px_rgba(0,0,0,0.15)] backdrop-blur-[8px] sm:max-w-[320px] hidden">
            <div className="flex flex-col gap-4">
              <p className="m-0 text-lg font-bold text-[#333]">
                {siteConfig.name.toUpperCase()}
              </p>
              <p className="m-0 text-base leading-[1.4] text-[rgba(51,51,51,0.8)]">
                {siteConfig.streetAddress},
                <br />
                {siteConfig.addressLocality}, {siteConfig.addressRegion} {siteConfig.postalCode}
              </p>
              <div className="flex items-center gap-1 text-base text-[rgba(51,51,51,0.5)]">
                <span>{siteConfig.googleRating.value.toFixed(1)}</span>
                <Star weight="fill" size={20} className="text-[#333]" />
                <span>({siteConfig.googleRating.count})</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={viewOnMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={ui.findUs.viewMapsAria}
                  className="text-[#333] hover:text-brand"
                >
                  <ArrowSquareOut size={24} />
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={ui.findUs.directionsAria}
                  className="text-[#333] hover:text-brand"
                >
                  <NavigationArrow size={24} weight="fill" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
