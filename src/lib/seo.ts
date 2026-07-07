import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function absoluteUrl(path: string = ""): string {
  return new URL(path, siteConfig.url).toString();
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Personal Injury Attorney in ${siteConfig.location}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Boston personal injury attorney",
    "Boston personal injury lawyer",
    "Roxbury personal injury lawyer",
    "car accident lawyer Boston",
    "motorcycle accident attorney Boston",
    "truck accident lawyer Boston",
    "slip and fall attorney Boston",
    "wrongful death attorney Boston",
    "dog bite lawyer Boston",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: `${siteConfig.name} | Personal Injury Attorney in ${siteConfig.location}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absoluteUrl("/optimized/hero-background.webp"),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} personal injury legal representation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Personal Injury Attorney in ${siteConfig.location}`,
    description: siteConfig.description,
    images: [absoluteUrl("/optimized/hero-background.webp")],
  },
};
