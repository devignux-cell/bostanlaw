import { createDictionary } from "@/i18n/create-dictionary";
import { teamByLocale } from "@/i18n/team";
import { legalByLocale, resourceByLocale } from "@/i18n/legal";

export default createDictionary({
  team: teamByLocale.ht,
  resource: resourceByLocale.ht,
  legal: legalByLocale.ht,
  ui: {
    language: { currentAriaLabel: "Chwazi lang sit la", menuLabel: "Lang ki disponib" },
    header: { consultation: "Konsiltasyon gratis", callAria: "Rele nan" },
    footer: { copyrightLabel: "Tout dwa rezève" },
    hero: { callNowFree: "Rele kounye a, se gratis", callNow: "Rele kounye a", yes: "Wi", no: "Non", portraitAlt: "Avoka BoStan Law" },
    practiceAreas: { heading: "Kalite dosye nou okipe", subheading: "Si ou sibi domaj, nou ka ede w.", ctaIntro: "Si youn nan sitiyasyon sa yo rive w,", ctaStrong: "ann pale.", ctaLabel: "Jwenn konsiltasyon gratis ou a" },
    whyChoose: { headingLead: "Poukisa kliyan fè", subheading: "N ap sèvi moun ak fanmi nan tout Boston." },
    faq: { heading: "Kesyon moun poze souvan" },
    findUs: { headingLead: "Kote pou", headingStrong: "jwenn nou", mapTitle: "Kote BoStan Law ye", viewMapsAria: "Gade sou Google Maps", directionsAria: "Jwenn direksyon" },
    contact: { headingLine1: "Rakonte nou", headingLine2: "sa k pase a.", subheading: "Konsiltasyon gratis. Nou reponn vit. Ou pa peye frè avoka si nou pa genyen dosye w la.", callNow: "Rele kounye a", name: "Non", phone: "Telefòn", email: "Imèl", message: "Kisa k te pase?", submit: "Voye demann konsiltasyon gratis mwen an", mailSubject: "Demann konsiltasyon gratis", mailMessageLabel: "Sa k te pase", submitNote: "Lè w voye fòm nan, aplikasyon imèl ou ap ouvri ak yon mesaj ki pare pou voye.", siteLanguage: "Lang sit la", requiredError: "Tanpri ranpli chan sa a.", emailError: "Tanpri antre yon adrès imèl ki valab." },
    recaptcha: { checkbox: "Mwen pa yon robo", privacy: "Konfidansyalite", terms: "Kondisyon", confirm: "Tanpri konfime ou pa yon robo pou kontinye." },
  },
  hero: { eyebrow: "Avoka pou blesi pèsonèl", headlineLead: "Ou blese?", headlineConnector: "Ann", headlineAccent: " pale.", subhead: "Konsiltasyon gratis. Ou pa peye frè avoka si nou pa genyen. Konsantre w sou geri; n ap okipe rès la." },
  heroPhoto: { headlineLine1: "Konsantre w sou geri.", headlineLine2: "N ap okipe rès la.", subhead: "Premye konvèsasyon an gratis. N ap koute w, reponn kesyon w yo, epi ede w konprann chwa ou genyen.", subheadEmphasis: "San presyon.", trustLine: "San presyon. San obligasyon. Nou la pou ou.", ctaPrimaryLabel: "Konsiltasyon gratis", ctaSecondaryLabel: "Rele nou jodi a", floatingChipEyebrow: "Rele nou jodi a", floatingChipBody: "Nou la pou ede w chèche jistis ak konpansasyon ou merite a" },
  legalMatter: { heading: "Èske ou gen yon pwoblèm legal?", subheading: "Nou la pou ou. Di nou ki sitiyasyon ou ye.", yesReveal: { heading: "Ann pale. Rakonte nou sa k te pase →", ctaLabel: "Rakonte nou", ctaHref: "#contact" }, noReveal: { heading: "Pa gen pwoblèm. Gade kijan nou ka ede w.", ctaLabel: "Aprann plis", ctaHref: "#areas" } },
  whyChoose: [
    { name: "Nou toujou disponib", body: "Lè ou gen kesyon, w ap pale ak yon moun ki pare pou ede w. Nou reponn vit paske kominikasyon klè enpòtan nan chak etap." },
    { name: "Atansyon pèsonèl", body: "W ap travay dirèkteman ak avoka w depi premye konsiltasyon an jouk dosye w la fini. Pa gen transfè ki pa nesesè. Se menm sipò pèsonèl la nan chak etap." },
    { name: "Kliyan an an premye", body: "Chak dosye merite bon preparasyon, konsèy onèt, ak yon defans serye. Depi premye konsiltasyon an jouk dosye a fini, nou pran angajman pou pwoteje dwa w epi ede w avanse ak konfyans." },
  ],
  practiceAreas: [
    { name: "Aksidan machin", description: "Kolizyon, frap dèyè, ak chofè ki kouri kite plas aksidan an. N ap chèche konpansasyon ou gen dwa resevwa." },
    { name: "Aksidan motosiklèt", description: "Blesi grav mande yon defans legal serye." },
    { name: "Aksidan kamyon", description: "Nou fè fas ak konpayi transpò ak konpayi asirans yo." },
    { name: "Glise epi tonbe", description: "Yon kote ki pa an sekirite? Pwopriyetè yo ka responsab." },
    { name: "Lanmò akoz fot yon lòt moun", description: "Èd ak konpasyon lè yon moun ou renmen mouri akoz fot yon lòt moun." },
    { name: "Mòde chen", description: "Si yon chen mòde w, n ap rasanble prèv pou pwoteje dwa w." },
  ],
  faqs: [
    { question: "Konbyen sa koute?", answer: "Ou pa peye anyen davans. Nou travay ak frè ki depann de rezilta dosye a: pa gen frè avoka si nou pa genyen dosye w la. Konsiltasyon an toujou gratis." },
    { question: "Konbyen tan mwen genyen pou depoze yon demann?", answer: "Dat limit legal yo varye selon eta a ak kalite demann nan, epi yo ka rive vit. Rele nou bonè pou w pa pèdi dwa w pou jwenn konpansasyon." },
    { question: "Èske mwen ta dwe rele konpayi asirans mwen an?", answer: "Pale avèk nou anvan. Konpayi asirans yo ka eseye diminye demann ou an; n ap ede w evite di yon bagay ki ta ka nuizib pou dosye w la." },
  ],
  seo: { title: "BoStan Law | Avoka pou blesi pèsonèl nan Boston", description: "Avoka pou moun ki blese nan Boston, Massachusetts. Konsiltasyon gratis. Ou pa peye frè avoka si nou pa genyen dosye a.", openGraphTitle: "BoStan Law | Avoka pou blesi pèsonèl nan Boston", openGraphDescription: "Èd legal apre yon blesi nan Boston. Konsiltasyon gratis.", priceRange: "Konsiltasyon gratis. Pa gen frè avoka si nou pa genyen.", imageAlt: "Èd legal BoStan Law pou blesi pèsonèl" },
});
