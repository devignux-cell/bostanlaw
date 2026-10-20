"use client";

import Image from "next/image";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RecaptchaPlaceholder } from "@/components/sections/RecaptchaPlaceholder";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/data/site";
import { toTelHref } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { legalDisclaimerPath } from "@/i18n/config";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const darkFieldClass =
  "h-auto rounded-[7px] border border-[#333] bg-[rgba(26,26,26,0.6)] px-4 py-3.5 text-base text-white backdrop-blur-[2px] placeholder:text-[#7A7A7A] focus-visible:border-brand focus-visible:ring-0";

export function ContactSection() {
  const ref = useScrollReveal<HTMLElement>();
  const { ui, language, dictionary } = useLanguage();

  function handleInvalid(event: React.FormEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    input.setCustomValidity(
      input.validity.valueMissing ? ui.contact.requiredError : ui.contact.emailError,
    );
  }

  function clearValidation(event: React.FormEvent<HTMLInputElement>) {
    event.currentTarget.setCustomValidity("");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    trackEvent("contact_form_submit");

    const subject = ui.contact.mailSubject + (name ? ` - ${name}` : "");
    const body =
      `${ui.contact.name}: ${name}\n` +
      `${ui.contact.phone}: ${phone}\n` +
      `${ui.contact.email}: ${email}\n\n` +
      `${ui.contact.mailMessageLabel}:\n${message}\n\n` +
      `${ui.contact.siteLanguage}: ${language}\n`;

    window.location.href =
      `mailto:${siteConfig.email ?? ""}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  return (
    <section ref={ref} id="contact" className="contact relative overflow-hidden text-white">
      <Image
        src="/optimized/contact-background.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90.93deg, rgba(15,15,15,0.8) 0%, rgba(15,15,15,0.7) 100%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1080px] grid-cols-1 items-start gap-14 px-7 py-22 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="m-0 text-[clamp(36px,5vw,60px)] leading-[1.05] opacity-80">
            {ui.contact.headingLine1}
            <br />
            {ui.contact.headingLine2}
          </h2>
          <p className="mt-5 mb-7.5 max-w-[340px] text-lg leading-[1.5] text-[#B9B9B9]">
            {ui.contact.subheading}
          </p>
          <a
            href={toTelHref(siteConfig.phone)}
            className="inline-flex items-center gap-3 text-white"
          >
            <span className="flex size-11.5 shrink-0 items-center justify-center rounded-full bg-brand">
              <Phone weight="fill" size={20} />
            </span>
            <span>
              <span className="block text-xs tracking-[0.08em] text-subtle-fg uppercase">
                {ui.contact.callNow}
              </span>
              <span className="block text-2xl font-semibold">
                {siteConfig.phone}
              </span>
            </span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="grid min-w-0 gap-3.5">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div>
              <Label htmlFor="name" className="sr-only">
                {ui.contact.name}
              </Label>
              <Input
                id="name"
                name="name"
                required
                onInvalid={handleInvalid}
                onInput={clearValidation}
                placeholder={ui.contact.name}
                className={darkFieldClass}
              />
            </div>
            <div>
              <Label htmlFor="phone" className="sr-only">
                {ui.contact.phone}
              </Label>
              <Input
                id="phone"
                name="phone"
                required
                onInvalid={handleInvalid}
                onInput={clearValidation}
                placeholder={ui.contact.phone}
                className={darkFieldClass}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="sr-only">
              {ui.contact.email}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              onInvalid={handleInvalid}
              onInput={clearValidation}
              placeholder={ui.contact.email}
              className={darkFieldClass}
            />
          </div>
          <div>
            <Label htmlFor="message" className="sr-only">
              {ui.contact.message}
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder={ui.contact.message}
              className={`${darkFieldClass} min-h-32 resize-y`}
            />
          </div>
          <p className="m-0 text-left text-[13px] leading-[1.55] text-white/80">
            {dictionary.legal.contactWarning}{" "}
            <a href={legalDisclaimerPath(language)} className="font-semibold text-white underline decoration-white/70 underline-offset-2 hover:text-white/90 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {dictionary.legal.heading}
            </a>
          </p>
          <Button
            type="submit"
            className="h-auto min-w-0 rounded-[7px] px-3 py-4.5 text-center text-base leading-tight font-semibold whitespace-normal sm:text-lg"
          >
            {ui.contact.submit}
          </Button>
          <RecaptchaPlaceholder />
        </form>
      </div>
    </section>
  );
}
