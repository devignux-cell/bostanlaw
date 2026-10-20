import { uiContent } from "@/data/language";
import { homepageContentByLanguage } from "@/data/homepage";
import { practiceAreasByLanguage } from "@/data/practiceAreas";
import { faqsByLanguage } from "@/data/faqs";
import type { Dictionary } from "@/i18n/types";
import { teamByLocale } from "@/i18n/team";
import { legalByLocale } from "@/i18n/legal";

const dictionary = {
  ui: {
    ...uiContent.en,
    header: { ...uiContent.en.header, callAria: "Call" },
    hero: { ...uiContent.en.hero, portraitAlt: "BOSTAN LAW attorney" },
    contact: { ...uiContent.en.contact, siteLanguage: "Site language", requiredError: "Please complete this field.", emailError: "Please enter a valid email address." },
  },
  homepage: homepageContentByLanguage.en,
  practiceAreas: practiceAreasByLanguage.en,
  faqs: faqsByLanguage.en,
  team: teamByLocale.en,
  legal: legalByLocale.en,
  seo: {
    title: "BOSTAN LAW | Boston Personal Injury Attorney",
    description: "Personal injury attorney serving Boston, MA. Free consultation. No fee unless we win.",
    openGraphTitle: "BOSTAN LAW | Boston Personal Injury Attorney",
    openGraphDescription: "Personal injury help in Boston. Free consultation. No fee unless we win.",
    priceRange: "Free consultation. No fee unless we win.",
    imageAlt: "BOSTAN LAW personal injury legal representation",
  },
} satisfies Dictionary;
export default dictionary;
