import { createDictionary } from "@/i18n/create-dictionary";
import { teamByLocale } from "@/i18n/team";
import { legalByLocale, resourceByLocale } from "@/i18n/legal";

export default createDictionary({
  team: teamByLocale.fr,
  resource: resourceByLocale.fr,
  legal: legalByLocale.fr,
  ui: {
    language: { currentAriaLabel: "Choisir la langue du site", menuLabel: "Langues disponibles" },
    header: { consultation: "Consultation gratuite", callAria: "Appeler le" },
    footer: { copyrightLabel: "Tous droits réservés" },
    hero: { callNowFree: "Appelez, c’est gratuit", callNow: "Appeler", yes: "Oui", no: "Non", portraitAlt: "Avocat de BoStan Law" },
    practiceAreas: { heading: "Domaines de pratique", subheading: "Si vous avez subi un préjudice, nous pouvons vous aider.", ctaIntro: "Si l’une de ces situations vous concerne,", ctaStrong: "parlons-en.", ctaLabel: "Obtenez une consultation gratuite" },
    whyChoose: { headingLead: "Pourquoi nos clients font confiance à", subheading: "Au service des personnes et des familles de Boston." },
    faq: { heading: "Questions fréquentes" },
    findUs: { headingLead: "Où nous", headingStrong: "trouver", mapTitle: "Emplacement de BoStan Law", viewMapsAria: "Voir sur Google Maps", directionsAria: "Obtenir l’itinéraire" },
    contact: { headingLine1: "Racontez-nous", headingLine2: "votre histoire.", subheading: "Consultation gratuite. Réponse rapide. Aucun honoraire si nous ne gagnons pas votre dossier.", callNow: "Appelez maintenant", name: "Nom", phone: "Téléphone", email: "Adresse e-mail", message: "Que s’est-il passé ?", submit: "Envoyer — demander ma consultation gratuite", mailSubject: "Demande de consultation gratuite", mailMessageLabel: "Ce qui s’est passé", submitNote: "L’envoi ouvrira votre application de messagerie avec un message prêt à être envoyé.", siteLanguage: "Langue du site", requiredError: "Veuillez remplir ce champ.", emailError: "Veuillez saisir une adresse e-mail valide." },
    recaptcha: { checkbox: "Je ne suis pas un robot", privacy: "Confidentialité", terms: "Conditions", confirm: "Veuillez confirmer que vous n’êtes pas un robot pour continuer." },
  },
  hero: { eyebrow: "Avocat en dommages corporels", headlineLead: "Blessé ?", headlineConnector: "Parlons", headlineAccent: "-en.", subhead: "Consultation gratuite. Aucun honoraire si nous ne gagnons pas. Concentrez-vous sur votre guérison, nous nous occupons du reste." },
  heroPhoto: { headlineLine1: "Concentrez-vous sur votre guérison.", headlineLine2: "Nous nous occupons du reste.", subhead: "Votre première conversation est gratuite. Nous vous écouterons, répondrons à vos questions et vous aiderons à comprendre vos options.", subheadEmphasis: "Sans pression.", trustLine: "Sans pression. Sans engagement. Nous sommes là pour vous.", ctaPrimaryLabel: "Consultation gratuite", ctaSecondaryLabel: "Appelez-nous aujourd’hui", floatingChipEyebrow: "Appelez-nous aujourd’hui", floatingChipBody: "À vos côtés pour obtenir la justice et l’indemnisation que vous méritez" },
  legalMatter: { heading: "Avez-vous un problème juridique ?", subheading: "Nous sommes là pour vous. Dites-nous où vous en êtes.", yesReveal: { heading: "Parlons-en. Racontez-nous ce qui s’est passé →", ctaLabel: "Racontez-nous", ctaHref: "#contact" }, noReveal: { heading: "Pas de problème. Découvrez comment nous pouvons vous aider.", ctaLabel: "En savoir plus", ctaHref: "#areas" } },
  whyChoose: [
    { name: "Toujours disponibles", body: "Si vous avez des questions, une personne sera là pour vous aider. Nous répondons rapidement, car une communication claire compte à chaque étape." },
    { name: "Un accompagnement personnel", body: "Vous travaillerez directement avec votre avocat, de la première consultation à la résolution de votre dossier. Sans relais inutiles, avec un accompagnement constant et personnel." },
    { name: "Vos intérêts d’abord", body: "Chaque dossier mérite une préparation attentive, des conseils honnêtes et une défense engagée. De votre première consultation à la résolution du dossier, nous veillons à protéger vos droits et à vous aider à avancer avec confiance." },
  ],
  practiceAreas: [
    { name: "Accidents de voiture", description: "Collisions, chocs arrière et délits de fuite. Nous cherchons à obtenir l’indemnisation qui vous revient." },
    { name: "Accidents de moto", description: "Les blessures graves exigent une représentation juridique sérieuse." },
    { name: "Accidents de camion", description: "Nous faisons face aux sociétés de transport et à leurs assureurs." },
    { name: "Glissades et chutes", description: "Lieu dangereux ? Les propriétaires peuvent être tenus responsables." },
    { name: "Décès dû à la faute d’autrui", description: "Un soutien attentif quand la perte d’un proche résulte de la faute d’autrui." },
    { name: "Morsures de chien", description: "Si un chien vous a mordu, nous réunirons les preuves nécessaires pour défendre vos droits." },
  ],
  faqs: [
    { question: "Combien cela coûte-t-il ?", answer: "Rien à payer d’avance. Nous travaillons aux honoraires conditionnels : aucun honoraire si nous ne gagnons pas votre dossier. La consultation est toujours gratuite." },
    { question: "De combien de temps dispose-t-on pour déposer une demande ?", answer: "Les délais de prescription varient selon l’État et le type de demande, et ils peuvent être courts. Appelez-nous rapidement pour éviter de perdre votre droit à une indemnisation." },
    { question: "Dois-je appeler mon assureur ?", answer: "Parlez-nous d’abord. Les assureurs peuvent chercher à réduire votre demande ; nous vous aiderons à éviter des déclarations qui pourraient nuire à votre dossier." },
  ],
  seo: { title: "BoStan Law | Avocat en dommages corporels à Boston", description: "Avocat en dommages corporels à Boston, Massachusetts. Consultation gratuite. Aucun honoraire si nous ne gagnons pas votre dossier.", openGraphTitle: "BoStan Law | Avocat en dommages corporels à Boston", openGraphDescription: "Aide juridique après une blessure à Boston. Consultation gratuite.", priceRange: "Consultation gratuite. Aucun honoraire si nous ne gagnons pas.", imageAlt: "Représentation juridique de BoStan Law en dommages corporels" },
});
