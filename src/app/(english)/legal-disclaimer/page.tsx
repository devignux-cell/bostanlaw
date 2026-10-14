import { LegalDisclaimerPage } from "@/components/LegalDisclaimerPage";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildLegalMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return buildLegalMetadata("en", await getDictionary("en"));
}

export default async function EnglishLegalDisclaimer() {
  const dictionary = await getDictionary("en");
  return <LegalDisclaimerPage copy={dictionary.legal} />;
}
