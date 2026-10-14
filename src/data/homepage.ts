import type { HomepageContent } from "@/types/homepage";

export const homepageContentByLanguage: Record<"en" | "es", HomepageContent> = {
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
      headlineLead: "¿Lesionado?",
      headlineConnector: "Hablemos",
      headlineAccent: ".",
      subhead:
        "Consulta gratis. No cobramos honorarios a menos que ganemos. Usted se concentra en sanar - nosotros nos encargamos del resto.",
    },
    heroPhoto: {
      headlineLine1: "Usted se concentra en sanar.",
      headlineLine2: "Nosotros nos encargamos del resto.",
      subhead:
        "Su primera conversación es gratis. Lo escucharemos, responderemos sus preguntas y le ayudaremos a entender sus opciones.",
      subheadEmphasis: "Sin presión.",
      trustLine: "Sin presión. Sin obligación. Estamos aquí para ayudarle.",
      ctaPrimaryLabel: "Consulta gratis",
      ctaSecondaryLabel: "Llámenos hoy",
      floatingChipEyebrow: "Llámenos hoy",
      floatingChipBody:
        "Dedicados a conseguir la justicia y compensación que usted merece",
    },
    legalMatter: {
      heading: "¿Tiene un asunto legal?",
      subheading: "Estamos aquí para ayudarle. Díganos en qué situación se encuentra.",
      yesReveal: {
        heading: "Hablemos. Cuéntenos qué pasó →",
        ctaLabel: "Cuéntenos su caso",
        ctaHref: "#contact",
      },
      noReveal: {
        heading: "No hay problema. Así podemos ayudarle - mire aquí.",
        ctaLabel: "Ver más",
        ctaHref: "#areas",
      },
    },
    whyChoose: [
      {
        name: "Siempre accesibles",
        body:
          "Cuando tenga preguntas, hablará con una persona real lista para ayudarle. Respondemos con prontitud porque la comunicación clara importa en cada paso.",
        image: "/optimized/why-accessible.webp",
      },
      {
        name: "Atención personal",
        body:
          "Trabajará directamente con su abogado desde la primera consulta hasta la resolución de su caso. Sin cambios innecesarios de representante. Solo orientación constante y personal en cada paso.",
        image: "/optimized/why-personal-attention.webp",
      },
      {
        name: "Representación centrada en el cliente",
        body:
          "Cada caso merece preparación cuidadosa, orientación honesta y defensa dedicada. Desde su primera consulta hasta la resolución de su caso, estamos comprometidos a proteger sus derechos y ayudarle a avanzar con confianza.",
        image: "/optimized/why-client-first.webp",
      },
    ],
  },
};

export const homepageContent = homepageContentByLanguage.en;
