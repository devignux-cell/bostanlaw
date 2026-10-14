import type { MetadataRoute } from "next";
import { legalDisclaimerPath, localeOptions } from "@/i18n/config";
import { absoluteUrl, alternateLanguages, legalAlternateLanguages, localeUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = alternateLanguages();
  const legalLanguages = legalAlternateLanguages();
  return [
    ...localeOptions.map(({ code }) => ({
      url: localeUrl(code),
      alternates: { languages },
    })),
    ...localeOptions.map(({ code }) => ({
      url: absoluteUrl(legalDisclaimerPath(code)),
      alternates: { languages: legalLanguages },
    })),
  ];
}
