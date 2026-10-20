import { uiContent } from "@/data/language";
import { homepageContentByLanguage } from "@/data/homepage";
import { practiceAreasByLanguage } from "@/data/practiceAreas";
import { faqsByLanguage } from "@/data/faqs";
import type { Dictionary } from "@/i18n/types";
import { teamByLocale } from "@/i18n/team";
import { legalByLocale } from "@/i18n/legal";

const dictionary = {
  ui: {
    ...uiContent.es,
    language: { currentAriaLabel: "Elegir idioma del sitio", menuLabel: "Idiomas disponibles" },
    header: { consultation: "Consulta gratis", callAria: "Llamar al" },
    hero: { callNowFree: "Llame ahora, es gratis", callNow: "Llame ahora", yes: "Sí", no: "No", portraitAlt: "Abogado de BOSTAN LAW" },
    practiceAreas: { heading: "Áreas de práctica", subheading: "Si le causó daño, podemos ayudarle.", ctaIntro: "Si algo de esto le resulta familiar,", ctaStrong: "hablemos.", ctaLabel: "Obtenga su consulta gratis" },
    whyChoose: { headingLead: "Por qué los clientes confían en", subheading: "Atendemos a personas y familias en todo Boston." },
    faq: { heading: "Preguntas frecuentes" },
    findUs: { headingLead: "Dónde", headingStrong: "encontrarnos", mapTitle: "Ubicación de BOSTAN LAW", viewMapsAria: "Ver en Google Maps", directionsAria: "Obtener indicaciones" },
    contact: { headingLine1: "Cuéntenos", headingLine2: "su historia.", subheading: "Consulta gratis. Respondemos pronto. No cobramos honorarios a menos que ganemos su caso.", callNow: "Llame ahora", name: "Nombre", phone: "Teléfono", email: "Correo electrónico", message: "¿Qué pasó?", submit: "Enviar: obtener mi consulta gratis", mailSubject: "Solicitud de consulta gratis", mailMessageLabel: "Qué pasó", submitNote: "Al enviar, se abrirá su aplicación de correo con el mensaje preparado.", siteLanguage: "Idioma del sitio", requiredError: "Complete este campo.", emailError: "Introduzca una dirección de correo válida." },
    recaptcha: { checkbox: "No soy un robot", privacy: "Privacidad", terms: "Términos", confirm: "Confirme que no es un robot para continuar." },
  },
  homepage: homepageContentByLanguage.es,
  practiceAreas: practiceAreasByLanguage.es,
  faqs: faqsByLanguage.es,
  team: teamByLocale.es,
  legal: legalByLocale.es,
  seo: { title: "BOSTAN LAW | Abogado de lesiones personales en Boston", description: "Abogado de lesiones personales en Boston, Massachusetts. Consulta gratis. No cobramos honorarios a menos que ganemos su caso.", openGraphTitle: "BOSTAN LAW | Abogado de lesiones personales en Boston", openGraphDescription: "Ayuda legal tras una lesión en Boston. Consulta gratis.", priceRange: "Consulta gratis. No cobramos honorarios a menos que ganemos.", imageAlt: "Representación de BOSTAN LAW en casos de lesiones personales" },
} satisfies Dictionary;
export default dictionary;
