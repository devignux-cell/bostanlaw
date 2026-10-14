# Internationalization

The canonical English homepage is `/`. The five translated homepages are `/es`, `/kea`, `/ht`, `/ru`, and `/fr`. `/en` permanently redirects to `/`. The URL determines the rendered language; `NEXT_LOCALE` records only an explicit switch and never overrides a direct URL.

`src/i18n/config.ts` owns locale codes, native labels, flag paths, and Open Graph locale codes. The English and Spanish dictionaries reuse the existing content in `src/data/`; the other dictionaries live in `src/i18n/dictionaries/`. `src/i18n/types.ts` defines the shared shape. `getDictionary` loads one locale on the server and passes it to the existing `LanguageProvider`. All initial page copy is rendered server-side. Add a key to the dictionary type, then fill it in for every language and render it from `useLanguage()` where needed. For a new language, add it to the config, create its dictionary and flag, then add a loader in `get-dictionary.ts`.

The English and localized routes use a shared `SiteDocument` so each page gets a server-rendered `<html lang>`. `buildMetadata` generates canonical, hreflang, Open Graph, and Twitter tags from the locale config and dictionary. `sitemap.ts` uses the same locale mapping. JSON-LD uses the same FAQ data that appears on the page.

The contact form remains a `mailto:` flow. The selected locale code is included in the email draft body alongside the visitor's message. There is no server submission endpoint or language acknowledgment email. The visual reCAPTCHA placeholder is unchanged and does not verify submissions.

Run `npm run build` followed by `npm run check:i18n` to verify the generated HTML, metadata, structured data, and sitemap for every locale.

Kriolu uses a draft Santiago-based variety with ALUPEC-style spelling. The legal terms listed in `localization-review.md`, and all four newly drafted language versions, require native-language and legal review before the firm treats them as approved copy. The existing Spanish copy received accent and punctuation corrections but also merits client review.
