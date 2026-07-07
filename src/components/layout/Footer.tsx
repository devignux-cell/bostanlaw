"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/data/site";
import { toTelHref } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  const { ui } = useLanguage();

  return (
    <footer className="footer border-t border-line bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-7 pt-2">
        <Image
          src="/optimized/bostanlawlogo.webp"
          alt={siteConfig.name}
          width={512}
          height={341}
          className="h-18 w-auto"
        />
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-fg">
          <a
            href={toTelHref(siteConfig.phone)}
            className="font-bold text-ink"
          >
            {siteConfig.phone}
          </a>
          <span>{siteConfig.location}</span>
          <span>
            © {year} {siteConfig.name}
            <span className="sr-only"> {ui.footer.copyrightLabel}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
