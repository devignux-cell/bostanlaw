export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  url: string;
  phone: string;
  fax: string;
  /** Not yet available — leave undefined until the firm provides a real email. */
  email?: string;
  /** Display-facing location, e.g. shown in the hero eyebrow and footer. */
  location: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  /** Google Maps embed `src` for the "Find us" section. */
  mapsEmbedUrl: string;
  /** Google Business Profile rating, shown on the "Find us" info card. */
  googleRating: { value: number; count: number };
}
