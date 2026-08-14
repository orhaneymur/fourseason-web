"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE, Reveal } from "@/components/anim";
import { Section, SectionHeading } from "@/components/ui";
import { IconChevron, IconMail, IconPhone } from "@/components/icons";
import { faqs, site } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="bg-slate-50/80">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                align="left"
                eyebrow="Questions"
                title={
                  <>
                    Things property managers{" "}
                    <span className="text-gradient-aqua">ask us first</span>
                  </>
                }
                description="If your question isn't here, ask it directly — you'll get a straight answer, not a callback script."
              />

              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-col gap-3">
                  <a
                    href={site.phone.href}
                    className="group inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 ring-1 ring-inset ring-slate-200/80 card-shadow transition-all duration-300 hover:-translate-y-0.5 hover:ring-aqua-200"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-aqua-50 text-aqua-600">
                      <IconPhone className="h-[1.1rem] w-[1.1rem]" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-slate-400">
                        Call
                      </span>
                      <span className="font-semibold text-ink">
                        {site.phone.display}
                      </span>
                    </span>
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 ring-1 ring-inset ring-slate-200/80 card-shadow transition-all duration-300 hover:-translate-y-0.5 hover:ring-aqua-200"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-aqua-50 text-aqua-600">
                      <IconMail className="h-[1.1rem] w-[1.1rem]" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-slate-400">
                        Email
                      </span>
                      <span className="truncate font-semibold text-ink">
                        {site.email}
                      </span>
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-inset ring-slate-200/80 card-shadow">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={item.q}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start gap-3.5 px-5 py-5 text-left transition-colors duration-300 hover:bg-aqua-50/40 sm:gap-5 sm:px-6 sm:py-6 md:px-8"
                      >
                        <span
                          className={`mt-[2px] font-display text-[0.78rem] font-extrabold tabular-nums transition-colors duration-300 ${
                            isOpen ? "text-aqua-600" : "text-slate-300"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`flex-1 font-display text-[1.02rem] font-bold leading-snug transition-colors duration-300 md:text-[1.08rem] ${
                            isOpen ? "text-aqua-800" : "text-ink"
                          }`}
                        >
                          {item.q}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.4, ease: EASE }}
                          className={`mt-[1px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                            isOpen
                              ? "bg-aqua-500 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <IconChevron className="h-4 w-4" strokeWidth={2.2} />
                        </motion.span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.42, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-6 text-[0.93rem] leading-[1.72] text-slate-600 sm:px-6 sm:pb-7 sm:pl-[3.6rem] sm:text-[0.95rem] md:px-8 md:pl-[4.4rem]">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
