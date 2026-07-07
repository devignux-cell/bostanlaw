import { siteConfig } from "@/data/site";
import { faqs } from "@/data/faqs";
import { practiceAreas } from "@/data/practiceAreas";
import { absoluteUrl } from "@/lib/seo";

export function buildLegalServiceJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteConfig.url}/#legal-service`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl("/optimized/hero-background.webp"),
    logo: absoluteUrl("/optimized/bostanlawlogo.webp"),
    telephone: siteConfig.phone,
    faxNumber: siteConfig.fax,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: "US",
    },
    areaServed: siteConfig.location,
    priceRange: "Free consultation. No fee unless we win.",
    description: siteConfig.description,
    knowsAbout: practiceAreas.map((area) => area.name),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.googleRating.value,
      reviewCount: siteConfig.googleRating.count,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function buildFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildHomePageJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [buildLegalServiceJsonLd(), buildFaqJsonLd()],
  };
}
