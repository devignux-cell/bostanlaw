import { homepageContentByLanguage } from "@/data/homepage";
import { practiceAreasByLanguage } from "@/data/practiceAreas";
import type { Dictionary, LegalCopy, ResourceCopy, UiCopy } from "@/i18n/types";
import type { HeroContent, HeroPhotoContent, LegalMatterContent } from "@/types/homepage";
import type { Faq } from "@/types/faq";
import type { TeamCopy } from "@/i18n/types";

interface TranslationInput {
  ui: UiCopy;
  hero: HeroContent;
  heroPhoto: HeroPhotoContent;
  legalMatter: LegalMatterContent;
  whyChoose: { name: string; body: string }[];
  practiceAreas: { name: string; description: string }[];
  faqs: Faq[];
  team: TeamCopy;
  resource: ResourceCopy;
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
    practiceAreas: input.practiceAreas.map((item, index) => ({ ...item, image: practiceAreasByLanguage.en[index].image })),
    faqs: input.faqs,
    team: input.team,
    resource: input.resource,
    legal: input.legal,
    seo: input.seo,
  };
}
