import { Hero } from "@/components/sections/Hero";
import { LegalMatterPrompt } from "@/components/sections/LegalMatterPrompt";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FindUsSection } from "@/components/sections/FindUsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildHomePageJsonLd } from "@/lib/jsonLd";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildHomePageJsonLd()) }}
      />
      <Hero />
      <LegalMatterPrompt />
      <PracticeAreas />
      <WhyChooseUs />
      <FindUsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
