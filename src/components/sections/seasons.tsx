"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { EASE } from "@/components/anim";
import { Eyebrow } from "@/components/ui";
import { IconCheck } from "@/components/icons";
import { seasons } from "@/lib/site";

/** The four arcs of the logo, reused as a year dial. */
const ARCS = [
  "M25.74 4.08 A20 20 0 0 1 43.92 22.26", // spring — top right
  "M43.92 25.74 A20 20 0 0 1 25.74 43.92", // summer — bottom right
  "M22.26 43.92 A20 20 0 0 1 4.08 25.74", // fall — bottom left
  "M4.08 22.26 A20 20 0 0 1 22.26 4.08", // winter — top left
];

export function Seasons() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });
  const trackScale = useTransform(progress, [0, 1], [0.02, 1]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(seasons.length - 1, Math.floor(p * seasons.length + 0.12));
    setActive(next < 0 ? 0 : next);
  });

  const current = seasons[active];

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink text-white">
      {/* Season-tinted ambience */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[-14%] top-[12%] h-[42rem] w-[42rem] rounded-full blur-[110px] opacity-[0.28]"
        animate={{ backgroundColor: current.accent }}
        transition={{ duration: 1.2, ease: EASE }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] bottom-[6%] h-[32rem] w-[32rem] rounded-full blur-[120px] opacity-[0.2]"
        animate={{ backgroundColor: current.accent }}
        transition={{ duration: 1.6, ease: EASE }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.10) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-12">
        {/* Sticky rail */}
        <div className="lg:col-span-5">
          <div className="pt-24 md:pt-32 lg:sticky lg:top-[7.5rem] lg:pb-24">
            <Eyebrow tone="light">Why we are called Four Seasons</Eyebrow>

            <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] text-white">
              A pool is a{" "}
              <span className="relative inline-block">
                <span className="relative z-10">twelve-month</span>
                <motion.span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 z-0 h-[0.42em] rounded-sm opacity-45"
                  animate={{ backgroundColor: current.accent }}
                  transition={{ duration: 1, ease: EASE }}
                />
              </span>{" "}
              responsibility.
            </h2>

            <p className="mt-5 max-w-md text-[1.02rem] leading-[1.75] text-slate-400">
              Most contractors show up in June and disappear in September. We
              structure the whole year — because the reason a pool opens late in
              May is almost always something that happened in November.
            </p>

            {/* Year dial */}
            <div className="mt-9 flex items-center gap-5 sm:mt-11 sm:gap-7">
              <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
                <svg viewBox="0 0 48 48" className="h-full w-full">
                  {ARCS.map((d, i) => (
                    <motion.path
                      key={d}
                      d={d}
                      fill="none"
                      strokeWidth="3.4"
                      strokeLinecap="round"
                      animate={{
                        stroke: i === active ? current.accent : "rgba(255,255,255,0.16)",
                        opacity: i === active ? 1 : 0.75,
                      }}
                      transition={{ duration: 0.7, ease: EASE }}
                    />
                  ))}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={current.season}
                      initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="font-display text-[0.72rem] font-extrabold uppercase tracking-[0.16em]"
                      style={{ color: current.accent }}
                    >
                      {current.season}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-500">
                      {current.window}
                    </p>
                    <p className="mt-1.5 font-display text-[1.35rem] font-extrabold leading-tight text-white sm:text-[1.5rem]">
                      {current.title}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Progress track — full width so the four labels never collide */}
            <div className="mt-7">
              <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/12">
                <motion.div
                  className="h-full w-full origin-left rounded-full"
                  style={{ scaleX: trackScale, backgroundColor: current.accent }}
                />
              </div>
              <div className="mt-3 flex justify-between gap-2">
                {seasons.map((s, i) => (
                  <span
                    key={s.season}
                    className={`text-[0.62rem] font-bold uppercase tracking-[0.1em] transition-colors duration-500 sm:text-[0.66rem] sm:tracking-[0.14em] ${
                      i <= active ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {s.season}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling panels */}
        <div className="space-y-6 pb-24 pt-6 md:space-y-8 lg:col-span-7 lg:pt-32">
          {seasons.map((s, i) => (
            <motion.article
              key={s.season}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.85, ease: EASE }}
              className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm sm:rounded-[1.75rem] sm:p-8 md:p-10"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{ backgroundColor: s.accent }}
              />
              <span
                aria-hidden
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-[0.14] blur-3xl"
                style={{ backgroundColor: s.accent }}
              />

              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="rounded-full px-3 py-1 text-[0.66rem] font-extrabold uppercase tracking-[0.18em]"
                  style={{ backgroundColor: `${s.accent}22`, color: s.accent }}
                >
                  {s.season}
                </span>
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {s.window}
                </span>
                <span className="ml-auto font-display text-[0.8rem] font-bold text-slate-600">
                  0{i + 1}
                </span>
              </div>

              <h3 className="mt-5 font-display text-[1.5rem] font-extrabold leading-tight text-white sm:text-[1.75rem] md:text-[2.05rem]">
                {s.title}
              </h3>
              <p className="mt-4 max-w-xl text-[0.96rem] leading-[1.7] text-slate-400 sm:text-[1rem] sm:leading-[1.75]">
                {s.body}
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {s.items.map((item, k) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.15 + k * 0.08, ease: EASE }}
                    className="flex items-start gap-2.5 text-[0.9rem] leading-relaxed text-slate-300"
                  >
                    <IconCheck
                      className="mt-[3px] h-4 w-4 shrink-0"
                      style={{ color: s.accent }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
