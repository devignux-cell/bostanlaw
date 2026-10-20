import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { absoluteUrl, localeUrl } from "@/lib/seo";

export function buildHomePageJsonLd(locale: Locale, dictionary: Dictionary): Record<string, unknown> {
  const url = localeUrl(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${siteConfig.url}/#legal-service`,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: locale,
        image: absoluteUrl("/optimized/hero-background.webp"),
        logo: absoluteUrl("/optimized/bostanlawlogo.webp"),
        telephone: siteConfig.phone,
        faxNumber: siteConfig.fax,
        ...(siteConfig.email ? { email: siteConfig.email } : {}),
        address: { "@type": "PostalAddress", streetAddress: siteConfig.streetAddress, addressLocality: siteConfig.addressLocality, addressRegion: siteConfig.addressRegion, postalCode: siteConfig.postalCode, addressCountry: "US" },
        areaServed: siteConfig.location,
        priceRange: dictionary.seo.priceRange,
        description: dictionary.seo.description,
        knowsAbout: dictionary.practiceAreas.map((area) => area.name),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dictionary.ui.practiceAreas.heading,
          itemListElement: dictionary.practiceAreas.map((area) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: area.name, description: area.details.introduction },
          })),
        },
        founder: { "@id": `${siteConfig.url}/#stanislav-yatskar` },
        employee: [
          {
            "@type": "Person",
            "@id": `${siteConfig.url}/#stanislav-yatskar`,
            name: "Stanislav Yatskar",
            jobTitle: dictionary.team.stan.role,
            description: dictionary.team.stan.paragraphs[0],
            image: absoluteUrl("/optimized/stan-bio.webp"),
            inLanguage: locale,
          },
          {
            "@type": "Person",
            "@id": `${siteConfig.url}/#paulina-duarte`,
            name: dictionary.team.paulina.name,
            jobTitle: dictionary.team.paulina.role,
            description: dictionary.team.paulina.paragraphs[0],
            inLanguage: locale,
          },
        ],
        aggregateRating: { "@type": "AggregateRating", ratingValue: siteConfig.googleRating.value, reviewCount: siteConfig.googleRating.count, bestRating: 5, worstRating: 1 },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: locale,
        mainEntity: dictionary.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
    ],
  };
}
