import { Hero } from "@/components/sections/Hero";
import { LegalMatterPrompt } from "@/components/sections/LegalMatterPrompt";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { AccidentResourceSection } from "@/components/sections/AccidentResourceSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TeamSection } from "@/components/sections/TeamSection";
import { FindUsSection } from "@/components/sections/FindUsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildHomePageJsonLd } from "@/lib/jsonLd";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function HomePage({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildHomePageJsonLd(locale, dictionary)).replace(/</g, "\\u003c") }} />
      <Hero />
      <LegalMatterPrompt />
      <PracticeAreas />
      <AccidentResourceSection />
      <WhyChooseUs />
      <TeamSection copy={dictionary.team} />
      <FindUsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
