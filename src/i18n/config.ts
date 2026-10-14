export const locales = ["en", "es", "kea", "ht", "ru", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeOptions: ReadonlyArray<{
  code: Locale;
  label: string;
  flag: string;
  ogLocale: string;
}> = [
  { code: "en", label: "English", flag: "/flags/us.svg", ogLocale: "en_US" },
  { code: "es", label: "Español", flag: "/flags/es.svg", ogLocale: "es_ES" },
  { code: "kea", label: "Kriolu", flag: "/flags/cv.svg", ogLocale: "kea_CV" },
  { code: "ht", label: "Kreyòl", flag: "/flags/ht.svg", ogLocale: "ht_HT" },
  { code: "ru", label: "Русский", flag: "/flags/ru.svg", ogLocale: "ru_RU" },
  { code: "fr", label: "Français", flag: "/flags/fr.svg", ogLocale: "fr_FR" },
];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export function legalDisclaimerPath(locale: Locale): string {
  return `${locale === defaultLocale ? "" : `/${locale}`}/legal-disclaimer`;
}
