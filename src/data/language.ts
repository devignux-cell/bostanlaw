import type { LanguageOption } from "@/types/language";

export const languageOptions: LanguageOption[] = [
  {
    value: "en",
    label: "English",
    shortLabel: "EN",
    flag: "🇺🇸",
  },
  {
    value: "es",
    label: "Español",
    shortLabel: "ES",
    flag: "🇪🇸",
  },
];

export const uiContent = {
  en: {
    language: {
      currentAriaLabel: "Choose site language",
      menuLabel: "Language options",
      modalTitle: "Choose your preferred language",
      modalDescription:
        "You can change this anytime from the language menu in the header.",
      closeLabel: "Close language preference modal",
      continueEnglish: "Continue in English",
      continueSpanish: "Continue in Spanish",
    },
    header: {
      consultation: "Free Consultation",
    },
    footer: {
      copyrightLabel: "Copyright",
    },
    hero: {
      callNowFree: "Call now - it's free",
      callNow: "Call Now",
      yes: "Yes",
      no: "No",
    },
    practiceAreas: {
      heading: "Practice Areas",
      subheading: "If it caused you harm, we handle it.",
      ctaIntro: "If Any of These Sound Familiar,",
      ctaStrong: "Let's Talk.",
      ctaLabel: "Get your free consultation",
    },
    whyChoose: {
      headingLead: "Why Clients Trust",
      subheading: "Serving individuals and families throughout Boston.",
    },
    faq: {
      heading: "Common questions",
    },
    findUs: {
      headingLead: "Where to",
      headingStrong: "Find us",
      mapTitle: "BoStan Law location",
      viewMapsAria: "View on Google Maps",
      directionsAria: "Get directions",
    },
    contact: {
      headingLine1: "Tell us",
      headingLine2: "your story.",
      subheading:
        "Free consultation. We respond fast. No fee unless we win your case.",
      callNow: "Call now",
      name: "Name",
      phone: "Phone",
      email: "Email",
      message: "What happened?",
      submit: "Send - Get My Free Consultation",
      mailSubject: "Free Consultation Request",
      mailMessageLabel: "What happened",
      submitNote:
        "Submitting opens your email app with the message ready to send to our team.",
    },
    recaptcha: {
      checkbox: "I'm not a robot",
      privacy: "Privacy",
      terms: "Terms",
      confirm: "Please confirm you're not a robot to continue.",
    },
  },
  es: {
    language: {
      currentAriaLabel: "Elegir idioma del sitio",
      menuLabel: "Opciones de idioma",
      modalTitle: "Elija su idioma preferido",
      modalDescription:
        "Puede cambiarlo en cualquier momento desde el menu de idioma en el encabezado.",
      closeLabel: "Cerrar modal de preferencia de idioma",
      continueEnglish: "Continuar en inglés",
      continueSpanish: "Continuar en español",
    },
    header: {
      consultation: "Consulta gratis",
    },
    footer: {
      copyrightLabel: "Derechos de autor",
    },
    hero: {
      callNowFree: "Llame ahora - es gratis",
      callNow: "Llame ahora",
      yes: "Sí",
      no: "No",
    },
    practiceAreas: {
      heading: "Areas de practica",
      subheading: "Si le causo dano, podemos ayudarle.",
      ctaIntro: "Si algo de esto le suena familiar,",
      ctaStrong: "hablemos.",
      ctaLabel: "Obtenga su consulta gratis",
    },
    whyChoose: {
      headingLead: "Por que los clientes confian en",
      subheading: "Sirviendo a personas y familias en todo Boston.",
    },
    faq: {
      heading: "Preguntas frecuentes",
    },
    findUs: {
      headingLead: "Donde",
      headingStrong: "encontrarnos",
      mapTitle: "Ubicacion de BoStan Law",
      viewMapsAria: "Ver en Google Maps",
      directionsAria: "Obtener direcciones",
    },
    contact: {
      headingLine1: "Cuéntenos",
      headingLine2: "su historia.",
      subheading:
        "Consulta gratis. Respondemos rapido. No cobramos honorarios a menos que ganemos su caso.",
      callNow: "Llame ahora",
      name: "Nombre",
      phone: "Telefono",
      email: "Correo electronico",
      message: "Que paso?",
      submit: "Enviar - Obtener mi consulta gratis",
      mailSubject: "Solicitud de consulta gratis",
      mailMessageLabel: "Que paso",
      submitNote:
        "Al enviar, se abrira su aplicacion de correo con el mensaje listo para nuestro equipo.",
    },
    recaptcha: {
      checkbox: "No soy un robot",
      privacy: "Privacidad",
      terms: "Terminos",
      confirm: "Confirme que no es un robot para continuar.",
    },
  },
} as const;
