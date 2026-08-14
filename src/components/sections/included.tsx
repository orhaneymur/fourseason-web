import { Reveal, Stagger, StaggerItem } from "@/components/anim";
import { Section, SectionHeading } from "@/components/ui";
import { IconCheck, IconClock, IconSparkle } from "@/components/icons";
import { addOnRates, included } from "@/lib/site";

export function Included() {
  return (
    <Section className="bg-slate-50/80">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-texture opacity-40 [mask-image:radial-gradient(65%_60%_at_50%_40%,#000,transparent)]"
      />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="No asterisks"
          title={
            <>
              What is already{" "}
              <span className="text-gradient-aqua">in the contract</span>
            </>
          }
          description="These are not upsells and they are not conditional. Every line below appears in the standard agreement before you ever ask about it."
        />

        <Reveal delay={0.1} className="mt-16">
          <div className="overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-inset ring-slate-200/80 card-shadow">
            <Stagger
              className="grid gap-x-8 gap-y-1 p-6 sm:grid-cols-2 sm:p-8 md:p-10 lg:grid-cols-3"
              amount={0.05}
            >
              {included.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 border-b border-slate-100 py-4 last:border-0">
                    <span className="mt-[1px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aqua-50 text-aqua-600 ring-1 ring-inset ring-aqua-100">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[0.92rem] leading-[1.6] text-slate-700">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>

        {/* Add-on rates */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Reveal delay={0.05} className="md:col-span-1">
            <div className="flex h-full flex-col justify-center rounded-3xl bg-ink p-7 text-white sm:p-8">
              <IconSparkle className="h-6 w-6 text-aqua-400" />
              <h3 className="mt-5 font-display text-[1.3rem] font-extrabold leading-tight">
                Need extra guard hours?
              </h3>
              <p className="mt-3 text-[0.92rem] leading-[1.7] text-slate-400">
                Pool parties, swim meets, extended holiday hours. The rate is
                printed in your contract, so there is never a negotiation in the
                middle of the season.
              </p>
            </div>
          </Reveal>

          {addOnRates.map((rate, i) => (
            <Reveal key={rate.condition} delay={0.12 + i * 0.08}>
              <div className="group h-full rounded-3xl bg-white p-7 ring-1 sm:p-8 ring-inset ring-slate-200/80 card-shadow transition-all duration-500 hover:-translate-y-1.5 hover:ring-aqua-200">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.13em] text-slate-600">
                  <IconClock className="h-3.5 w-3.5" />
                  {rate.condition}
                </span>
                <div className="mt-7 flex items-baseline gap-1">
                  <span className="font-display text-[3.4rem] font-extrabold leading-none tracking-[-0.05em] text-ink">
                    {rate.rate}
                  </span>
                  <span className="font-display text-[1.15rem] font-bold text-slate-400">
                    {rate.unit}
                  </span>
                </div>
                <p className="mt-4 text-[0.92rem] leading-[1.65] text-slate-600">
                  {rate.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
