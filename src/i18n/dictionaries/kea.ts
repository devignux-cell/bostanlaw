import { createDictionary } from "@/i18n/create-dictionary";
import { teamByLocale } from "@/i18n/team";
import { legalByLocale, resourceByLocale } from "@/i18n/legal";

// Draft Santiago-based Kriolu using ALUPEC-style spelling. Legal terminology needs native review.
export default createDictionary({
  team: teamByLocale.kea,
  resource: resourceByLocale.kea,
  legal: legalByLocale.kea,
  ui: {
    language: { currentAriaLabel: "Skodji lingua di site", menuLabel: "Linguas dispunível" },
    header: { consultation: "Konsulta di grasa", callAria: "Txoma pa númeru" },
    footer: { copyrightLabel: "Tudu direitu rezervadu" },
    hero: { callNowFree: "Txoma gosi, é di grasa", callNow: "Txoma gosi", yes: "Sin", no: "Nau", portraitAlt: "Advogadu di BoStan Law" },
    practiceAreas: { heading: "Kazu ki nu ta trata", subheading: "Si bu sufri un danu, nu pode djuda-bu.", ctaIntro: "Si algun di es situason li é di bo,", ctaStrong: "nu ta konversa.", ctaLabel: "Pidi bu konsulta di grasa" },
    whyChoose: { headingLead: "Pamodi klientis ta konfia na", subheading: "Nu ta djuda pesoas y famílias na tudu Boston." },
    faq: { heading: "Purguntas más frequenti" },
    findUs: { headingLead: "Undi bu ta", headingStrong: "atxa-nu", mapTitle: "Lokalizason di BoStan Law", viewMapsAria: "Odja na Google Maps", directionsAria: "Atxa kaminhu" },
    contact: { headingLine1: "Konta-nu", headingLine2: "bu stória.", subheading: "Konsulta di grasa. Nu ta responde rápidu. Bu ka ta paga honoráriu si nu ka ganha bu kazu.", callNow: "Txoma gosi", name: "Nomi", phone: "Telefoni", email: "Email", message: "Kuzé ki kontise?", submit: "Manda pididu di konsulta di grasa", mailSubject: "Pididu di konsulta di grasa", mailMessageLabel: "Kuzé ki kontise", submitNote: "Kantu bu manda, bu aplikason di email ta abri ku mensajen prontu pa manda.", siteLanguage: "Lingua di site", requiredError: "Prenxi es kampu li.", emailError: "Skrebe un email válidu." },
    recaptcha: { checkbox: "N ka é un robô", privacy: "Privasidadi", terms: "Kondisons", confirm: "Konfirma ma bu ka é un robô pa kontinua." },
  },
  hero: { eyebrow: "Advogadu pa ferimentu pesual", headlineLead: "Bu fika feridu?", headlineConnector: "Nu ta", headlineAccent: " konversa.", subhead: "Konsulta di grasa. Bu ka ta paga honoráriu si nu ka ganha. Bu ta konsentra na bu midjora; nu ta kuida di restu." },
  heroPhoto: { headlineLine1: "Konsentra na bu midjora.", headlineLine2: "Nu ta kuida di restu.", subhead: "Priméru konversa é di grasa. Nu ta skuta-bu, responde bu purguntas y djuda-bu intende bu opsons.", subheadEmphasis: "Sen preson.", trustLine: "Sen preson. Sen obrigason. Nu sta li pa bo.", ctaPrimaryLabel: "Konsulta di grasa", ctaSecondaryLabel: "Txoma-nu oji", floatingChipEyebrow: "Txoma-nu oji", floatingChipBody: "Nu ta djuda-bu buska justisa y kompensason ki bu ten direitu" },
  legalMatter: { heading: "Bu ten un problema di lei?", subheading: "Nu sta li pa bo. Konta-nu kuzé ki kontise.", yesReveal: { heading: "Nu ta konversa. Konta-nu kuzé ki kontise →", ctaLabel: "Konta-nu", ctaHref: "#contact" }, noReveal: { heading: "Ka ten problema. Odja modi ki nu pode djuda-bu.", ctaLabel: "Sabe más", ctaHref: "#areas" } },
  whyChoose: [
    { name: "Nu sta senpri dispunível", body: "Kantu bu ten purguntas, bu ta papia ku un pesoa ki sta prontu pa djuda-bu. Nu ta responde rápidu pamodi komunikason klaru é importanti na kada pasu." },
    { name: "Atenson pesual", body: "Bu ta trabadja dretu ku bu advogadu desdi priméru konsulta ti fin di bu kazu. Sen muda di pesoa sen nesesidadi. Ku orientason pesual na kada pasu." },
    { name: "Klienti na priméru lugar", body: "Kada kazu merese preparason ku kuidado, konsedju onestu y difeza ku dedikason. Desdi priméru konsulta ti fin di kazu, nu ta trabadja pa protêje bu direitus y djuda-bu siga ku konfiansa." },
  ],
  practiceAreas: [
    { name: "Asidenti di karu", description: "Kolizon, batida di tras y motorista ki fuji. Nu ta buska kompensason ki bu ten direitu." },
    { name: "Asidenti di mota", description: "Ferimentus gravi meste un difeza legal sériu." },
    { name: "Asidenti di kamion", description: "Nu ta trata ku inprazas di transporti y sis seguradoras." },
    { name: "Skorrega y kai", description: "Un lugar sen seguransa? Donus pode ser responsavel." },
    { name: "Morti pa kulpa di otu pesoa", description: "Djuda ku respeitu kantu un pesoa mori pa kulpa di otu pesoa." },
    { name: "Mordida di kaxoru", description: "Si un kaxoru morde-bu, nu ta djunta provas pa protêje bu direitus." },
  ],
  faqs: [
    { question: "Kantu ki ta kusta?", answer: "Bu ka ta paga nada antis. Nu ta trabadja ku honoráriu ki ta dipende di rezultadu: si nu ka ganha bu kazu, bu ka ta paga honoráriu. Konsulta é senpri di grasa." },
    { question: "Kantu tenpu N ten pa manda un pididu legal?", answer: "Prazu di lei ta varia sigundu stadu y tipu di kazu, y pode ser kurtu. Txoma-nu sedu pa bu ka perde bu direitu di pidi kompensason." },
    { question: "N debe txoma nha seguradora?", answer: "Papia ku nos priméru. Seguradoras pode tenta diminui bu pididu; nu ta djuda-bu evita fla algun kuza ki pode prejudika bu kazu." },
  ],
  seo: { title: "BoStan Law | Advogadu pa ferimentu na Boston", description: "Djuda legal pa pesoas feridu na Boston, Massachusetts. Konsulta di grasa. Sen honoráriu si nu ka ganha bu kazu.", openGraphTitle: "BoStan Law | Advogadu pa ferimentu na Boston", openGraphDescription: "Djuda legal dipos di un ferimentu na Boston. Konsulta di grasa.", priceRange: "Konsulta di grasa. Sen honoráriu si nu ka ganha.", imageAlt: "Djuda legal di BoStan Law pa ferimentu pesual" },
});
