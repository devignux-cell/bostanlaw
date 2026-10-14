import { notFound } from "next/navigation";
import { LegalDisclaimerPage } from "@/components/LegalDisclaimerPage";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildLegalMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/legal-disclaimer">) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return buildLegalMetadata(locale, await getDictionary(locale));
}

export default async function LocalizedLegalDisclaimer({ params }: PageProps<"/[locale]/legal-disclaimer">) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  const dictionary = await getDictionary(locale);
  return <LegalDisclaimerPage copy={dictionary.legal} />;
}
