import { homepageContentByLanguage } from "@/data/homepage";
import { practiceAreasByLanguage } from "@/data/practiceAreas";
import { practiceAreaDetailsByLocale } from "@/data/practiceAreaDetails";
import type { Dictionary, LegalCopy, UiCopy } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import type { HeroContent, HeroPhotoContent, LegalMatterContent } from "@/types/homepage";
import type { Faq } from "@/types/faq";
import type { TeamCopy } from "@/i18n/types";

interface TranslationInput {
  locale: Locale;
  ui: UiCopy;
  hero: HeroContent;
  heroPhoto: HeroPhotoContent;
  legalMatter: LegalMatterContent;
  whyChoose: { name: string; body: string }[];
  practiceAreas: { name: string; description: string }[];
  faqs: Faq[];
  team: TeamCopy;
  legal: LegalCopy;
  seo: Dictionary["seo"];
}

export function createDictionary(input: TranslationInput): Dictionary {
  if (input.whyChoose.length !== 3 || input.practiceAreas.length !== 6 || input.faqs.length !== 3) {
    throw new Error("Incomplete localized content");
  }
  return {
    ui: input.ui,
    homepage: {
      heroVariant: "photo",
      hero: input.hero,
      heroPhoto: input.heroPhoto,
      legalMatter: input.legalMatter,
      whyChoose: input.whyChoose.map((item, index) => ({ ...item, image: homepageContentByLanguage.en.whyChoose[index].image })),
    },
    practiceAreas: input.practiceAreas.map((item, index) => {
      const source = practiceAreasByLanguage.en[index];
      return { ...item, id: source.id, image: source.image, details: practiceAreaDetailsByLocale[input.locale][source.id] };
    }),
    faqs: input.faqs,
    team: input.team,
    legal: input.legal,
    seo: input.seo,
  };
}
