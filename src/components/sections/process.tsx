"use client";

import { motion } from "motion/react";
import { EASE } from "@/components/anim";
import { Section, SectionHeading } from "@/components/ui";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <Section className="bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From first walkthrough to{" "}
              <span className="text-gradient-aqua">opening day</span>
            </>
          }
          description="Four steps, no mystery. Most properties go from site visit to signed agreement in under two weeks."
        />

        <div className="relative mt-20">
          {/* Connector */}
          <div className="absolute left-[1.85rem] top-4 hidden h-[calc(100%-3rem)] w-px bg-slate-200 sm:block lg:left-0 lg:top-[1.85rem] lg:h-px lg:w-full" />
          {/* Vertical draw (sm → lg) */}
          <motion.div
            className="absolute left-[1.85rem] top-4 hidden h-[calc(100%-3rem)] w-[2px] origin-top bg-gradient-to-b from-aqua-400 to-aqua-600 sm:block lg:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: EASE }}
          />
          {/* Horizontal draw (lg and up) */}
          <motion.div
            className="absolute left-0 top-[1.85rem] hidden h-[2px] w-full origin-left bg-gradient-to-r from-aqua-400 to-aqua-600 lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: EASE }}
          />

          <ol className="relative grid gap-10 sm:gap-12 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((s, i) => (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.75, delay: i * 0.14, ease: EASE }}
                className="relative flex gap-6 sm:pl-0 lg:block"
              >
                <div className="relative z-10 shrink-0">
                  <span className="flex h-[3.7rem] w-[3.7rem] items-center justify-center rounded-2xl bg-white font-display text-[1.05rem] font-extrabold text-aqua-700 ring-1 ring-inset ring-aqua-200 card-shadow">
                    {s.step}
                  </span>
                </div>

                <div className="lg:mt-7 lg:pr-6">
                  <h3 className="font-display text-[1.22rem] font-extrabold leading-snug text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[0.94rem] leading-[1.72] text-slate-600">
                    {s.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
