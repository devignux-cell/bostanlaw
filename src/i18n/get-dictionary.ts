import "server-only";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

const loaders: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  en: () => import("./dictionaries/en"),
  es: () => import("./dictionaries/es"),
  kea: () => import("./dictionaries/kea"),
  ht: () => import("./dictionaries/ht"),
  ru: () => import("./dictionaries/ru"),
  fr: () => import("./dictionaries/fr"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return (await loaders[locale]()).default;
}
