import { existsSync, readFileSync, readdirSync } from "node:fs";
import assert from "node:assert/strict";
import { join } from "node:path";

const dir = join(process.cwd(), ".next/server/app");
const origin = "https://bostanlaw.com";
const pages = {
  en: ["index.html", "You focus on healing."],
  es: ["es.html", "Usted se concentra en sanar."],
  kea: ["kea.html", "Konsentra na bu midjora."],
  ht: ["ht.html", "Konsantre w sou geri."],
  ru: ["ru.html", "Главное — ваше здоровье."],
  fr: ["fr.html", "Concentrez-vous sur votre guérison."],
};
const codes = Object.keys(pages);
const teamCopy = {
  en: ["Meet the Team", "Before founding Bostan Law"],
  es: ["Conozca al equipo", "Antes de fundar Bostan Law"],
  kea: ["Konxê nos ekipa", "Antis di funda Bostan Law"],
  ht: ["Fè konesans ak ekip la", "Anvan li te fonde Bostan Law"],
  ru: ["Наша команда", "До основания Bostan Law"],
  fr: ["Rencontrez notre équipe", "Avant de fonder Bostan Law"],
};
const legalCopy = {
  en: ["Injured in a Car Accident?", "Legal Disclaimer", "Submitting this form does not"],
  es: ["¿Sufrió lesiones en un accidente de auto?", "Aviso legal", "Enviar este formulario no crea"],
  kea: ["Bu fika feridu na un asidenti di karu?", "Avisu legal", "Manda es formuláriu ka ta kria"],
  ht: ["Ou te blese nan yon aksidan machin?", "Avi legal", "Voye fòm sa a pa"],
  ru: ["Пострадали в автомобильной аварии?", "Юридическая оговорка", "Отправка этой формы сама"],
  fr: ["Blessé dans un accident de voiture ?", "Avertissement juridique", "L’envoi de ce formulaire ne crée"],
};

for (const [code, [file, hero]] of Object.entries(pages)) {
  const page = readFileSync(join(dir, file), "utf8");
  const canonical = `${origin}${code === "en" ? "" : `/${code}`}`;
  assert.match(page, new RegExp(`<html[^>]+lang="${code}"`), `${code} html lang`);
  assert.ok(page.includes(hero), `${code} translated hero`);
  assert.ok(page.includes(teamCopy[code][0]), `${code} team heading`);
  assert.ok(page.includes(teamCopy[code][1]), `${code} full bio is server rendered`);
  assert.ok(page.includes(legalCopy[code][0]), `${code} resource heading`);
  assert.ok(page.includes(legalCopy[code][2]), `${code} contact warning`);
  assert.ok(page.indexOf('id="areas"') < page.indexOf('id="accident-information"'), `${code} resource after practice areas`);
  assert.ok(page.indexOf('id="accident-information"') < page.indexOf('class="why-choose-us'), `${code} resource before values`);
  assert.ok(!page.includes('<iframe src="/documents/bostan-law-accident-information.pdf"'), `${code} PDF not loaded in initial HTML`);
  assert.match(page, /aria-expanded="false" aria-controls="[^"]+" class="mt-5/);
  assert.match(page, /<div id="[^"]+" hidden="" class="mt-5 space-y-5">/);
  assert.ok(page.indexOf('class="why-choose-us') < page.indexOf('id="team"'), `${code} team after values`);
  assert.ok(page.indexOf('id="team"') < page.indexOf('class="find-us'), `${code} team before location`);
  assert.equal((page.match(/<link rel="canonical"/g) ?? []).length, 1, `${code} canonical count`);
  assert.ok(page.includes(`<link rel="canonical" href="${canonical}"`), `${code} canonical URL`);
  for (const alternate of [...codes, "x-default"]) {
    assert.equal((page.match(new RegExp(`<link rel="alternate" hrefLang="${alternate}"`, "g")) ?? []).length, 1, `${code} alternate ${alternate}`);
  }
  const json = page.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1];
  assert.ok(json, `${code} structured data`);
  const graph = JSON.parse(json)["@graph"];
  const legal = graph.find((item) => item["@type"] === "LegalService");
  const faq = graph.find((item) => item["@type"] === "FAQPage");
  assert.equal(legal.inLanguage, code);
  assert.equal(legal.knowsAbout.length, 6);
  assert.equal(legal.employee.length, 2);
  assert.equal(legal.founder["@id"], legal.employee[0]["@id"]);
  assert.ok(legal.employee.every((person) => person["@type"] === "Person" && person.jobTitle && person.description && person.inLanguage === code));
  assert.equal(faq.inLanguage, code);
  assert.equal(faq.mainEntity.length, 3);
  assert.ok(faq.mainEntity.every((item) => item.name.trim() && item.acceptedAnswer.text.trim()), `${code} populated FAQ`);
  for (const item of faq.mainEntity) {
    assert.ok(page.includes(item.name), `${code} FAQ question matches rendered content`);
    assert.ok(page.includes(item.acceptedAnswer.text), `${code} FAQ answer matches rendered content`);
  }
  if (code !== "en") assert.ok(!page.includes("You focus on healing."), `${code} has no English hero`);

  const legalFile = code === "en" ? "legal-disclaimer.html" : join(code, "legal-disclaimer.html");
  const legalPage = readFileSync(join(dir, legalFile), "utf8");
  const legalUrl = `${origin}${code === "en" ? "" : `/${code}`}/legal-disclaimer`;
  assert.match(legalPage, new RegExp(`<html[^>]+lang="${code}"`), `${code} legal html lang`);
  assert.ok(legalPage.includes(legalCopy[code][1]), `${code} legal heading`);
  assert.ok(legalPage.includes(`<link rel="canonical" href="${legalUrl}"`), `${code} legal canonical`);
  assert.ok(legalPage.includes(`href="${code === "en" ? "/" : `/${code}`}#contact"`), `${code} legal consultation returns home`);
  for (const alternate of [...codes, "x-default"]) {
    assert.equal((legalPage.match(new RegExp(`<link rel="alternate" hrefLang="${alternate}"`, "g")) ?? []).length, 1, `${code} legal alternate ${alternate}`);
  }
}

const sitemap = readFileSync(join(dir, "sitemap.xml.body"), "utf8");
for (const code of codes) {
  const url = `${origin}${code === "en" ? "/" : `/${code}`}`;
  assert.ok(sitemap.includes(`<loc>${url}</loc>`), `${code} sitemap URL`);
  const legalUrl = `${origin}${code === "en" ? "" : `/${code}`}/legal-disclaimer`;
  assert.ok(sitemap.includes(`<loc>${legalUrl}</loc>`), `${code} legal sitemap URL`);
}
assert.equal((sitemap.match(/<loc>/g) ?? []).length, 12, "six home and six legal sitemap entries");
assert.ok(!sitemap.includes(`<loc>${origin}/en</loc>`), "no duplicate English route");
const documentDir = join(process.cwd(), "public/documents");
assert.deepEqual(readdirSync(documentDir).filter((file) => file.endsWith(".pdf")), ["bostan-law-accident-information.pdf"], "one shared English PDF");
for (const page of [1, 2]) {
  assert.ok(existsSync(join(documentDir, `accident-letter-page-${page}.webp`)), `preview page ${page} exists`);
}
console.log("Localized home and legal HTML, SEO, JSON-LD, sitemap, and PDF asset verified for six languages.");
