export type Language = "en" | "es";

export const LANGUAGE_STORAGE_KEY = "bostan-language";

export interface LanguageOption {
  value: Language;
  label: string;
  shortLabel: string;
  flag: string;
}
