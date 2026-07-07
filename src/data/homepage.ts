import type { HomepageContent } from "@/types/homepage";
import type { Language } from "@/types/language";

export const homepageContentByLanguage: Record<Language, HomepageContent> = {
  en: {
    heroVariant: "photo",
    hero: {
      eyebrow: "Personal Injury Attorney",
      headlineLead: "Injured?",
      headlineConnector: "Let's ",
      headlineAccent: "talk.",
      subhead:
        "Free consultation. No fee unless we win. You focus on healing - we handle the rest.",
    },
    heroPhoto: {
      headlineLine1: "You focus on healing.",
      headlineLine2: "We'll handle the rest.",
      subhead:
        "Your first conversation is free. We'll listen, answer your questions, and help you understand your options.",
      subheadEmphasis: "Without pressure.",
      trustLine: "No pressure. No obligation. We're here for you.",
      ctaPrimaryLabel: "Free Consultation",
      ctaSecondaryLabel: "Call Us Today",
      floatingChipEyebrow: "Call Us Today",
      floatingChipBody:
        "Dedicated to getting you the justice and compensation you deserve",
    },
    legalMatter: {
      heading: "Do you have a legal matter?",
      subheading: "We’re here for you. Just tell us where you're at.",
      yesReveal: {
        heading: "Let's talk. Tell us what happened ->",
        ctaLabel: "Tell us about it",
        ctaHref: "#contact",
      },
      noReveal: {
        heading: "No problem. Here's how we help - take a look.",
        ctaLabel: "Learn More",
        ctaHref: "#areas",
      },
    },
    whyChoose: [
      {
        name: "Always Accessible",
        body:
          "When you have questions, you'll speak with a real person who is ready to help. We respond promptly because clear communication matters every step of the way.",
        image: "/optimized/why-accessible.webp",
      },
      {
        name: "Personal Attention",
        body:
          "You'll work directly with your attorney from your first consultation through the resolution of your case. No unnecessary handoffs. Just consistent, personal guidance every step of the way.",
        image: "/optimized/why-personal-attention.webp",
      },
      {
        name: "Client-First Representation",
        body:
          "Every case deserves thoughtful preparation, honest guidance, and dedicated advocacy. From your first consultation to the resolution of your case, we're committed to protecting your rights and helping you move forward with confidence.",
        image: "/optimized/why-client-first.webp",
      },
    ],
  },
  es: {
    heroVariant: "photo",
    hero: {
      eyebrow: "Abogado de lesiones personales",
      headlineLead: "Lesionado?",
      headlineConnector: "Hablemos",
      headlineAccent: ".",
      subhead:
        "Consulta gratis. No cobramos honorarios a menos que ganemos. Usted se concentra en sanar - nosotros nos encargamos del resto.",
    },
    heroPhoto: {
      headlineLine1: "Usted se concentra en sanar.",
      headlineLine2: "Nosotros nos encargamos del resto.",
      subhead:
        "Su primera conversacion es gratis. Lo escucharemos, responderemos sus preguntas y le ayudaremos a entender sus opciones.",
      subheadEmphasis: "Sin presion.",
      trustLine: "Sin presion. Sin obligacion. Estamos aqui para ayudarle.",
      ctaPrimaryLabel: "Consulta gratis",
      ctaSecondaryLabel: "Llamenos hoy",
      floatingChipEyebrow: "Llamenos hoy",
      floatingChipBody:
        "Dedicados a conseguir la justicia y compensacion que usted merece",
    },
    legalMatter: {
      heading: "Tiene un asunto legal?",
      subheading: "Estamos aqui para ayudarle. Diganos en que situacion se encuentra.",
      yesReveal: {
        heading: "Hablemos. Cuentenos que paso ->",
        ctaLabel: "Cuentenos su caso",
        ctaHref: "#contact",
      },
      noReveal: {
        heading: "No hay problema. Asi podemos ayudarle - mire aqui.",
        ctaLabel: "Ver mas",
        ctaHref: "#areas",
      },
    },
    whyChoose: [
      {
        name: "Siempre accesibles",
        body:
          "Cuando tenga preguntas, hablara con una persona real lista para ayudarle. Respondemos con prontitud porque la comunicacion clara importa en cada paso.",
        image: "/optimized/why-accessible.webp",
      },
      {
        name: "Atencion personal",
        body:
          "Trabajara directamente con su abogado desde la primera consulta hasta la resolucion de su caso. Sin entregas innecesarias. Solo orientacion constante y personal en cada paso.",
        image: "/optimized/why-personal-attention.webp",
      },
      {
        name: "Representacion centrada en el cliente",
        body:
          "Cada caso merece preparacion cuidadosa, orientacion honesta y defensa dedicada. Desde su primera consulta hasta la resolucion de su caso, estamos comprometidos a proteger sus derechos y ayudarle a avanzar con confianza.",
        image: "/optimized/why-client-first.webp",
      },
    ],
  },
};

export const homepageContent = homepageContentByLanguage.en;
