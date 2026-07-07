import type { Faq } from "@/types/faq";
import type { Language } from "@/types/language";

export const faqsByLanguage: Record<Language, Faq[]> = {
  en: [
    {
      question: "How much does it cost?",
      answer:
        "Nothing up front. We work on contingency - no fee unless we win your case. The consultation is always free.",
    },
    {
      question: "How long do I have to file?",
      answer:
        "Deadlines (statutes of limitation) vary by state and claim type, and they can be short. Call us early so you don't lose your right to recover.",
    },
    {
      question: "Should I call my insurance company?",
      answer:
        "Talk to us first. Insurers may try to minimize your claim - we'll make sure you don't say anything that hurts your case.",
    },
  ],
  es: [
    {
      question: "Cuanto cuesta?",
      answer:
        "Nada por adelantado. Trabajamos con honorarios de contingencia: no cobramos a menos que ganemos su caso. La consulta siempre es gratis.",
    },
    {
      question: "Cuanto tiempo tengo para presentar un reclamo?",
      answer:
        "Los plazos legales varian segun el estado y el tipo de reclamo, y pueden ser cortos. Llamenos pronto para no perder su derecho a recuperar compensacion.",
    },
    {
      question: "Debo llamar a mi compania de seguros?",
      answer:
        "Hable con nosotros primero. Las aseguradoras pueden intentar reducir su reclamo; nos aseguraremos de que no diga nada que perjudique su caso.",
    },
  ],
};

export const faqs = faqsByLanguage.en;
