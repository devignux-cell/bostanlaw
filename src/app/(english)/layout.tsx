import { SiteDocument } from "@/components/SiteDocument";
import { getDictionary } from "@/i18n/get-dictionary";
import "../globals.css";

export default async function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="en" dictionary={await getDictionary("en")}>{children}</SiteDocument>;
}
