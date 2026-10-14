import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { legalDisclaimerPath, localeOptions, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function absoluteUrl(path = ""): string {
  return new URL(path, siteConfig.url).toString();
}

export function localeUrl(locale: Locale): string {
  return absoluteUrl(localePath(locale));
}

export function alternateLanguages(): Record<string, string> {
  return Object.fromEntries([
    ...localeOptions.map(({ code }) => [code, localeUrl(code)]),
    ["x-default", localeUrl("en")],
  ]);
}

export function buildMetadata(locale: Locale, dictionary: Dictionary): Metadata {
  const seo = dictionary.seo;
  const url = localeUrl(locale);
  return {
    metadataBase: new URL(siteConfig.url),
    title: seo.title,
    description: seo.description,
    applicationName: siteConfig.name,
    alternates: { canonical: url, languages: alternateLanguages() },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon.png", type: "image/png", sizes: "512x512" }], apple: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }] },
    openGraph: {
      title: seo.openGraphTitle,
      description: seo.openGraphDescription,
      url,
      siteName: siteConfig.name,
      locale: localeOptions.find((option) => option.code === locale)!.ogLocale,
      alternateLocale: localeOptions.filter((option) => option.code !== locale).map((option) => option.ogLocale),
      type: "website",
      images: [{ url: absoluteUrl("/optimized/hero-background.webp"), width: 1200, height: 630, alt: seo.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [absoluteUrl("/optimized/hero-background.webp")] },
  };
}

export function legalAlternateLanguages(): Record<string, string> {
  return Object.fromEntries([
    ...localeOptions.map(({ code }) => [code, absoluteUrl(legalDisclaimerPath(code))]),
    ["x-default", absoluteUrl(legalDisclaimerPath("en"))],
  ]);
}

export function buildLegalMetadata(locale: Locale, dictionary: Dictionary): Metadata {
  const title = dictionary.legal.seoTitle;
  const description = dictionary.legal.seoDescription;
  const url = absoluteUrl(legalDisclaimerPath(locale));
  const base = buildMetadata(locale, dictionary);
  return {
    ...base,
    title,
    description,
    alternates: { canonical: url, languages: legalAlternateLanguages() },
    openGraph: { ...base.openGraph, title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/optimized/hero-background.webp")] },
  };
}
