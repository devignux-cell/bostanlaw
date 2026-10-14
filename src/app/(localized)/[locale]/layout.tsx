import { notFound } from "next/navigation";
import { SiteDocument } from "@/components/SiteDocument";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import "../../globals.css";

export default async function LocalizedLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <SiteDocument locale={locale} dictionary={await getDictionary(locale)}>{children}</SiteDocument>;
}
