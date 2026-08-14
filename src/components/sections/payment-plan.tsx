"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { EASE, Reveal } from "@/components/anim";
import { Button, Eyebrow } from "@/components/ui";
import { IconCheck, IconDoc } from "@/components/icons";

const MONTHS = ["March", "April", "May", "June", "July", "August"] as const;
const MIN = 15_000;
const MAX = 250_000;
const STEP = 500;

const usd = (n: number, decimals = 0) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

export function PaymentPlan() {
  const [total, setTotal] = useState(72_000);

  const rows = useMemo(() => {
    const monthly = total / 6;
    return MONTHS.map((month, i) => {
      const paid = monthly * (i + 1);
      return {
        month,
        short: month.slice(0, 3),
        payment: monthly,
        balance: total - paid,
        percent: ((i + 1) / 6) * 100,
      };
    });
  }, [total]);

  const monthly = total / 6;
  const fill = ((total - MIN) / (MAX - MIN)) * 100;

  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_80%_20%,rgba(224,242,254,0.9),transparent_65%)]"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Copy */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Predictable billing</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-[clamp(2rem,4.3vw,3.1rem)] font-extrabold leading-[1.06] text-ink">
              One price.{" "}
              <span className="text-gradient-aqua">Six equal payments.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-[1.04rem] leading-[1.75] text-slate-600">
              Your total contract value is divided evenly across six months,
              March through August. No deposit at signing, no balloon in
              September, and every invoice shows the balance and percentage paid
              to date.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-8 space-y-3.5">
              {[
                "Equal payments — nothing front-loaded",
                "Balance and percent-paid on every statement",
                "Additional hours billed at contracted rates only",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[2px] flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-aqua-500 text-white">
                    <IconCheck className="h-3 w-3" strokeWidth={2.6} />
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9">
              <Button href="/contact" withArrow>
                Get your written proposal
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Calculator */}
        <div className="lg:col-span-7">
          <Reveal direction="left" delay={0.12}>
            <div className="overflow-hidden rounded-[1.85rem] bg-white ring-1 ring-inset ring-slate-200/80 card-shadow-lg">
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-5 sm:px-7 md:px-9">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-aqua-50 text-aqua-600 ring-1 ring-inset ring-aqua-100">
                  <IconDoc className="h-[1.15rem] w-[1.15rem]" />
                </span>
                <div>
                  <p className="font-display text-[0.98rem] font-bold text-ink">
                    Payment Schedule Preview
                  </p>
                  <p className="text-[0.74rem] text-slate-500">
                    Move the slider to model your season
                  </p>
                </div>
              </div>

              <div className="px-5 py-7 sm:px-7 sm:py-8 md:px-9">
                {/* Slider */}
                <label
                  htmlFor="contract-total"
                  className="flex flex-wrap items-end justify-between gap-3"
                >
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Total contract price
                  </span>
                  <span className="font-display text-[2.35rem] font-extrabold leading-none tracking-[-0.04em] text-ink tabular-nums">
                    {usd(total)}
                  </span>
                </label>

                <input
                  id="contract-total"
                  type="range"
                  min={MIN}
                  max={MAX}
                  step={STEP}
                  value={total}
                  onChange={(e) => setTotal(Number(e.target.value))}
                  aria-label="Total contract price"
                  className="fsp-range mt-5 h-2 w-full cursor-pointer appearance-none rounded-full outline-none"
                  style={{
                    background: `linear-gradient(90deg, var(--color-aqua-500) ${fill}%, #e2e8f0 ${fill}%)`,
                  }}
                />
                <div className="mt-2 flex justify-between text-[0.72rem] font-medium text-slate-400 tabular-nums">
                  <span>{usd(MIN)}</span>
                  <span>{usd(MAX)}+</span>
                </div>

                {/* Monthly headline */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-aqua-50 to-sky-50 px-6 py-5 ring-1 ring-inset ring-aqua-100">
                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-aqua-700">
                      Monthly payment
                    </p>
                    <p className="mt-1 text-[0.8rem] text-slate-500">
                      March through August
                    </p>
                  </div>
                  <p className="font-display text-[2.1rem] font-extrabold leading-none tracking-[-0.04em] text-aqua-700 tabular-nums">
                    {usd(monthly, 2)}
                  </p>
                </div>

                {/* Month bars. The per-month figure is identical for all six,
                    so on narrow screens it is dropped rather than crushed —
                    the headline above already states it. */}
                <div className="mt-8 grid grid-cols-6 gap-1.5 sm:gap-2 md:gap-3">
                  {rows.map((row, i) => (
                    <div
                      key={row.month}
                      className="flex min-w-0 flex-col items-center gap-1.5 sm:gap-2"
                    >
                      <div className="relative flex h-24 w-full items-end overflow-hidden rounded-lg bg-slate-100 sm:h-28 sm:rounded-xl">
                        <motion.div
                          className="w-full rounded-lg bg-gradient-to-t from-aqua-600 to-aqua-300 sm:rounded-xl"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${row.percent}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{
                            duration: 0.85,
                            delay: 0.12 + i * 0.09,
                            ease: EASE,
                          }}
                        />
                        <span className="absolute inset-x-0 bottom-1.5 text-center text-[0.56rem] font-bold text-white/90 tabular-nums sm:text-[0.6rem]">
                          {Math.round(row.percent)}%
                        </span>
                      </div>
                      <span className="text-[0.68rem] font-bold text-ink sm:text-[0.72rem]">
                        {row.short}
                      </span>
                      <span className="hidden text-center text-[0.66rem] leading-tight text-slate-500 tabular-nums sm:block">
                        {usd(row.payment)}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-7 border-t border-slate-100 pt-5 text-[0.76rem] leading-relaxed text-slate-500">
                  Illustrative only. Your actual contract price depends on
                  facility size, staffing hours, season length and scope — we
                  put the final figure in writing before anything is signed.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .fsp-range::-webkit-slider-thumb {
          appearance: none;
          width: 26px;
          height: 26px;
          border-radius: 9999px;
          background: #ffffff;
          border: 3px solid var(--color-aqua-500);
          box-shadow: 0 6px 18px -6px rgba(6, 182, 212, 0.9);
          cursor: grab;
          transition: transform 0.18s ease;
        }
        .fsp-range::-webkit-slider-thumb:active { transform: scale(1.12); cursor: grabbing; }
        .fsp-range::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 9999px;
          background: #ffffff;
          border: 3px solid var(--color-aqua-500);
          box-shadow: 0 6px 18px -6px rgba(6, 182, 212, 0.9);
          cursor: grab;
        }
        .fsp-range::-moz-range-track { background: transparent; }
      `}</style>
    </section>
  );
}
