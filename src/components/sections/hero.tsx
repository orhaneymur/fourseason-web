import { Reveal, WordReveal, Magnetic, Parallax } from "@/components/anim";
import { Button, Eyebrow } from "@/components/ui";
import { Caustics, WaterSurface, Bubbles } from "@/components/water";
import {
  IconCheck,
  IconDroplet,
  IconGuard,
  IconClipboard,
  IconCalendar,
} from "@/components/icons";
import { LogoMark } from "@/components/logo";

const trustChips = [
  { icon: IconGuard, label: "Ellis & Red Cross certified guards" },
  { icon: IconDroplet, label: "Chemicals included" },
  { icon: IconClipboard, label: "We attend your inspections" },
];

const glanceRows = [
  { label: "Season window", value: "May 24 — Sep 7" },
  { label: "Lifeguards on deck", value: "4 certified" },
  { label: "Staffed hours / week", value: "78 hrs" },
  { label: "Off-season visits", value: "2 per month" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-[6.4rem] sm:pt-[7.5rem] md:pb-32 md:pt-[9rem] lg:pt-[10rem]">
      <Caustics />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-texture opacity-[0.55] [mask-image:radial-gradient(70%_60%_at_50%_25%,#000,transparent)]"
      />
      <Bubbles />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Copy */}
        <div className="lg:col-span-7">
          <Reveal duration={0.7}>
            <Eyebrow>Full-season commercial pool management</Eyebrow>
          </Reveal>

          <h1 className="mt-6 text-[clamp(2.15rem,8.6vw,4.55rem)] font-extrabold leading-[1.02] text-ink sm:mt-7 sm:leading-[0.99]">
            <WordReveal text="Crystal-clear pools," delay={0.25} />
            <br className="hidden sm:block" />{" "}
            <WordReveal
              text="season after season."
              delay={0.5}
              highlight={["season", "after", "season."]}
            />
          </h1>

          <Reveal delay={0.85} duration={0.9}>
            <p className="mt-6 max-w-xl text-[1rem] leading-[1.7] text-slate-600 sm:mt-7 sm:text-[1.06rem] sm:leading-[1.75] md:text-[1.14rem]">
              We run commercial aquatic facilities end to end — certified
              lifeguards, daily water chemistry, health department compliance,
              opening and winterization. One contract, one accountable partner,
              six predictable payments.
            </p>
          </Reveal>

          <Reveal delay={1} duration={0.9}>
            {/* Full-width stacked buttons read cleanly on a phone; side by
                side from sm up. */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
              <Magnetic strength={0.22} className="w-full sm:w-auto">
                <Button href="/contact" size="lg" className="w-full sm:w-auto" withArrow>
                  Request a Proposal
                </Button>
              </Magnetic>
              <Magnetic strength={0.16} className="w-full sm:w-auto">
                <Button
                  href="/services"
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={1.15} duration={0.9}>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 sm:mt-10 sm:gap-x-7 sm:gap-y-3.5">
              {trustChips.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 text-[0.86rem] font-medium text-slate-600"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-aqua-50 text-aqua-600 ring-1 ring-inset ring-aqua-100">
                    <Icon className="h-[0.95rem] w-[0.95rem]" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Contract-at-a-glance card */}
        <div className="lg:col-span-5">
          <Parallax distance={34} className="relative">
            <Reveal delay={0.55} duration={1} direction="left">
              <div className="relative mx-auto max-w-md">
                {/* Glow */}
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-[2.6rem] bg-[radial-gradient(60%_60%_at_50%_30%,rgba(6,182,212,0.24),transparent_70%)] blur-2xl"
                />

                {/* Back plate */}
                <div
                  aria-hidden
                  className="absolute inset-x-6 -top-5 h-24 rounded-3xl bg-white/70 ring-1 ring-inset ring-slate-200/70 backdrop-blur"
                />

                <div className="relative overflow-hidden rounded-[1.75rem] bg-white/90 ring-1 ring-inset ring-slate-200/90 card-shadow-lg backdrop-blur-xl">
                  {/* Card header */}
                  <div className="flex items-center gap-3 border-b border-slate-100 bg-gradient-to-r from-aqua-50/80 to-white px-5 py-5 sm:px-6">
                    <LogoMark className="h-9 w-9" />
                    <div className="min-w-0">
                      <p className="truncate font-display text-[0.9rem] font-bold text-ink">
                        Pool Management Agreement
                      </p>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-aqua-600">
                        Contract № FSP-2026-0148
                      </p>
                    </div>
                  </div>

                  {/* Rows */}
                  <dl className="divide-y divide-slate-100">
                    {glanceRows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between gap-4 px-5 py-3.5 sm:px-6"
                      >
                        <dt className="text-[0.84rem] text-slate-500">{row.label}</dt>
                        <dd className="font-display text-[0.94rem] font-bold text-ink">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {/* Payment strip */}
                  <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-5 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-slate-500">
                        Payment schedule
                      </p>
                      <p className="text-[0.72rem] font-semibold text-aqua-700">
                        6 equal payments
                      </p>
                    </div>
                    <div className="mt-3.5 flex items-end gap-[6px]">
                      {["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((m, i) => (
                        <div key={m} className="flex flex-1 flex-col items-center gap-1.5">
                          <div
                            className="w-full rounded-md bg-gradient-to-t from-aqua-500 to-aqua-300 motion-safe:animate-bob"
                            style={{
                              height: `${26 + i * 5}px`,
                              animationDelay: `${-i * 0.9}s`,
                              animationDuration: "6.5s",
                            }}
                          />
                          <span className="text-[0.62rem] font-semibold text-slate-500">
                            {m}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center gap-2.5 border-t border-slate-100 px-5 py-4 sm:px-6">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-100">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-[0.8rem] font-medium text-slate-600">
                      Opening, closing &amp; winterization included
                    </p>
                  </div>
                </div>

                {/* Floating chip */}
                <div className="absolute -bottom-6 -left-4 hidden items-center gap-2.5 rounded-2xl bg-ink px-4 py-3 text-white card-shadow-lg motion-safe:animate-bob sm:flex">
                  <IconCalendar className="h-4 w-4 text-aqua-400" />
                  <span className="text-[0.78rem] font-semibold">
                    Season locked in writing
                  </span>
                </div>
              </div>
            </Reveal>
          </Parallax>
        </div>
      </div>

      <WaterSurface />

      {/* Scroll cue */}
      <Reveal delay={1.5} className="relative z-10">
        <div className="mt-16 flex flex-col items-center gap-2.5 md:mt-20">
          <span className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-slate-400">
            Scroll
          </span>
          <span className="relative h-11 w-[1.5px] overflow-hidden rounded-full bg-slate-200">
            <span className="absolute inset-x-0 top-0 h-4 rounded-full bg-aqua-500 motion-safe:animate-[fsp-cue_2.2s_ease-in-out_infinite]" />
          </span>
        </div>
      </Reveal>

      <style>{`@keyframes fsp-cue { 0% { transform: translateY(-120%) } 55%,100% { transform: translateY(300%) } }`}</style>
    </section>
  );
}
