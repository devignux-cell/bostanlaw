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
import { useScrollReveal } from "@/hooks/useScrollReveal";

const darkFieldClass =
  "h-auto rounded-[7px] border border-[#333] bg-[rgba(26,26,26,0.6)] px-4 py-3.5 text-base text-white backdrop-blur-[2px] placeholder:text-[#7A7A7A] focus-visible:border-brand focus-visible:ring-0";

export function ContactSection() {
  const ref = useScrollReveal<HTMLElement>();
  const { ui } = useLanguage();

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
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n\n` +
      `${ui.contact.mailMessageLabel}:\n${message}\n`;

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
      <div className="relative mx-auto grid max-w-[1080px] grid-cols-1 items-start gap-14 px-7 py-22 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="m-0 text-[clamp(34px,5vw,60px)] leading-none font-black tracking-[-0.02em] opacity-40">
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
              <span className="block text-2xl font-extrabold tracking-[-0.01em]">
                {siteConfig.phone}
              </span>
            </span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-3.5">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div>
              <Label htmlFor="name" className="sr-only">
                {ui.contact.name}
              </Label>
              <Input
                id="name"
                name="name"
                required
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
          <Button
            type="submit"
            className="h-auto rounded-[7px] py-4.5 text-lg font-extrabold tracking-[0.01em]"
          >
            {ui.contact.submit}
          </Button>
          <RecaptchaPlaceholder />
        </form>
      </div>
    </section>
  );
}
