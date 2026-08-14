import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/anim";
import { Section } from "@/components/ui";
import {
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
} from "@/components/icons";
import { Faq } from "@/components/sections/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a written commercial pool management proposal. Tell us about your property and we will come back with schedule, staffing hours, inclusions and pricing.",
};

const nextSteps = [
  {
    step: "01",
    title: "We read the details",
    body: "Pool size, season dates, staffing expectations and anything that went wrong last year.",
  },
  {
    step: "02",
    title: "We walk the property",
    body: "A site visit tells us more in thirty minutes than a form ever will. Usually within the week.",
  },
  {
    step: "03",
    title: "You get it in writing",
    body: "A full agreement — schedule, staffing hours, inclusions and one price split into six payments.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your season."
        highlight={["your", "season."]}
        description="Send us the property details and we will come back with a written proposal — not a ballpark, not a callback to discuss a callback."
      />

      <Section className="bg-white pt-4 md:pt-8">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Details rail */}
          <div className="lg:col-span-4">
            <div className="space-y-4 lg:sticky lg:top-32">
              <Reveal>
                <a
                  href={site.phone.href}
                  className="group flex items-start gap-4 rounded-3xl bg-ink p-7 text-white transition-transform duration-400 hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-aqua-400">
                    <IconPhone className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Call us
                    </span>
                    <span className="mt-1.5 block font-display text-[1.18rem] font-extrabold">
                      {site.phone.display}
                    </span>
                    <span className="mt-1.5 block text-[0.85rem] text-slate-400">
                      Fastest way to reach an actual person
                    </span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.08}>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-4 rounded-3xl bg-white p-7 ring-1 ring-inset ring-slate-200/80 card-shadow transition-transform duration-400 hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-aqua-50 text-aqua-600 ring-1 ring-inset ring-aqua-100">
                    <IconMail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Email
                    </span>
                    <span className="mt-1.5 block break-all font-display text-[1.02rem] font-extrabold text-ink">
                      {site.email}
                    </span>
                    <span className="mt-1.5 block text-[0.85rem] text-slate-500">
                      Replies within one business day
                    </span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="rounded-3xl bg-white p-7 ring-1 ring-inset ring-slate-200/80 card-shadow">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-aqua-50 text-aqua-600 ring-1 ring-inset ring-aqua-100">
                    <IconClock className="h-5 w-5" />
                  </span>
                  <dl className="mt-6 space-y-4">
                    {site.hours.map((h) => (
                      <div key={h.label}>
                        <dt className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                          {h.label}
                        </dt>
                        <dd className="mt-1 text-[0.92rem] font-medium text-ink">
                          {h.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-6 flex items-start gap-2.5 border-t border-slate-100 pt-5 text-[0.86rem] text-slate-600">
                    <IconPin className="mt-[2px] h-4 w-4 shrink-0 text-aqua-500" />
                    {site.serviceArea}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <Reveal delay={0.1} direction="left">
              <ContactForm />
            </Reveal>

            {/* What happens next */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {nextSteps.map((s, i) => (
                <Reveal key={s.step} delay={0.1 + i * 0.08}>
                  <div className="h-full rounded-2xl bg-slate-50 p-6 ring-1 ring-inset ring-slate-200/70">
                    <span className="font-display text-[0.78rem] font-extrabold text-aqua-600">
                      {s.step}
                    </span>
                    <h3 className="mt-3 font-display text-[1rem] font-bold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[0.86rem] leading-[1.65] text-slate-600">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Faq />
    </>
  );
}
