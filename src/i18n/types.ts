import type { HomepageContent } from "@/types/homepage";
import type { PracticeArea } from "@/types/practiceArea";
import type { Faq } from "@/types/faq";

export interface UiCopy {
  language: { currentAriaLabel: string; menuLabel: string };
  header: { consultation: string; callAria: string };
  footer: { copyrightLabel: string };
  hero: { callNowFree: string; callNow: string; yes: string; no: string; portraitAlt: string };
  practiceAreas: { heading: string; subheading: string; ctaIntro: string; ctaStrong: string; ctaLabel: string };
  practiceAreaDialog: { learnMore: string; eyebrow: string; whatToKnow: string; close: string; disclaimer: string };
  whyChoose: { headingLead: string; subheading: string };
  faq: { heading: string };
  findUs: { headingLead: string; headingStrong: string; mapTitle: string; viewMapsAria: string; directionsAria: string };
  contact: {
    headingLine1: string; headingLine2: string; subheading: string; callNow: string;
    name: string; phone: string; email: string; message: string; submit: string;
    mailSubject: string; mailMessageLabel: string; submitNote: string; siteLanguage: string;
    requiredError: string; emailError: string;
  };
  recaptcha: { checkbox: string; privacy: string; terms: string; confirm: string };
}

export interface Dictionary {
  ui: UiCopy;
  homepage: HomepageContent;
  practiceAreas: PracticeArea[];
  faqs: Faq[];
  team: TeamCopy;
  legal: LegalCopy;
  seo: { title: string; description: string; openGraphTitle: string; openGraphDescription: string; priceRange: string; imageAlt: string };
}

export interface LegalCopy {
  heading: string;
  seoTitle: string;
  seoDescription: string;
  paragraphs: [string, string, string, string, string, string];
  contactWarning: string;
}

export interface TeamCopy {
  heading: string;
  subtitle: string;
  readFullBio: string;
  showLess: string;
  stan: { name: string; role: string; organization: string; imageAlt: string; paragraphs: [string, string, string, string] };
  paulina: { name: string; role: string; organization: string; paragraphs: [string, string] };
}
