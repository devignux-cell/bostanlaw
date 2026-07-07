import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "BoStan Law",
  shortName: "BoStan Law",
  description:
    "Personal injury attorney serving Boston, MA. Free consultation. No fee unless we win.",
  // Placeholder domain — update once the firm's real domain is known.
  url: "https://bostanlaw.com",
  phone: "617-600-2005",
  fax: "617-600-2001",
  location: "Boston, MA",
  streetAddress: "56 Warren St, Suite 301",
  addressLocality: "Roxbury",
  addressRegion: "MA",
  postalCode: "02119",
  // Plain address embed (no place-id highlight) — the highlighted-place embed
  // format always renders Google's own persistent place-details overlay card,
  // which can't be hidden from our page (it lives inside a cross-origin iframe).
  // This format shows just a pin, no overlay card.
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=56+Warren+St+Suite+301%2C+Roxbury%2C+MA+02119&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleRating: { value: 5.0, count: 2 },
};
