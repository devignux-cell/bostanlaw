import { HomePage } from "@/components/HomePage";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return buildMetadata("en", await getDictionary("en"));
}

export default async function Home() {
  return <HomePage locale="en" dictionary={await getDictionary("en")} />;
}
