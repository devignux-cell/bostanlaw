export type HeroVariant = "statement" | "split" | "centered" | "photo";

export interface HeroContent {
  eyebrow: string;
  headlineLead: string;
  headlineConnector: string;
  headlineAccent: string;
  subhead: string;
}

export interface HeroPhotoContent {
  headlineLine1: string;
  headlineLine2: string;
  subhead: string;
  subheadEmphasis: string;
  trustLine: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  floatingChipEyebrow: string;
  floatingChipBody: string;
}

export interface LegalMatterReveal {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface LegalMatterContent {
  heading: string;
  subheading: string;
  yesReveal: LegalMatterReveal;
  noReveal: LegalMatterReveal;
}

export interface WhyChooseItem {
  name: string;
  body: string;
  /** Public path to the card's background photo. */
  image: string;
}

export interface HomepageContent {
  heroVariant: HeroVariant;
  hero: HeroContent;
  heroPhoto: HeroPhotoContent;
  legalMatter: LegalMatterContent;
  whyChoose: WhyChooseItem[];
}
