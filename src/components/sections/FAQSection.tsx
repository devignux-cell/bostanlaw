"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { faqsByLanguage } from "@/data/faqs";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FAQSection() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: true });
  const { language, ui } = useLanguage();
  const faqs = faqsByLanguage[language];

  return (
    <section className="faq">
      <div className="mx-auto max-w-[1200px] px-7 py-22">
        <h2 className="m-0 mb-8.5 text-[clamp(30px,4.5vw,50px)] font-black tracking-[-0.02em]">
          {ui.faq.heading}
        </h2>
        <Accordion ref={ref} className="border-t border-line-strong">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="border-line-strong py-1"
            >
              <AccordionTrigger className="py-5.5 text-[19px] font-bold tracking-[-0.01em]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5.5 text-base leading-[1.6] text-[#5A5A5A]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
