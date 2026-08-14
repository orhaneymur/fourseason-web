import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/anim";
import { Button, Eyebrow, Section, SectionHeading } from "@/components/ui";
import { serviceIcons, IconCheck } from "@/components/icons";
import { Included } from "@/components/sections/included";
import { Process } from "@/components/sections/process";
import { WaveDivider } from "@/components/water";
import { clientTypes, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commercial pool management services: certified lifeguard staffing, water chemistry, health department compliance, opening, winterization, off-season visits and equipment service.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a commercial pool needs, run by one team."
        highlight={["one", "team."]}
        description="Eight service lines that fit into a single written agreement. You get one schedule, one invoice and one person to call when something needs attention."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/contact" size="lg" withArrow>
            Request a Proposal
          </Button>
          <Button href={site.phone.href} size="lg" variant="outline">
            {site.phone.display}
          </Button>
        </div>
      </PageHero>

      {/* Detailed service list */}
      <Section className="bg-white pt-4 md:pt-8">
        <div className="container-x">
          <div className="space-y-6">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              const flipped = i % 2 === 1;

              return (
                <Reveal key={s.slug} delay={0.04}>
                  <article
                    id={s.slug}
                    className="scroll-mt-28 overflow-hidden rounded-[1.85rem] bg-white ring-1 ring-inset ring-slate-200/80 card-shadow"
                  >
                    <div
                      className={`grid gap-0 lg:grid-cols-12 ${
                        flipped ? "lg:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Visual panel */}
                      <div className="relative flex min-h-[11rem] sm:min-h-[13rem] items-center justify-center overflow-hidden bg-gradient-to-br from-aqua-50 via-sky-50 to-white p-8 sm:p-10 lg:col-span-4">
                        <div
                          aria-hidden
                          className="absolute inset-0 opacity-70"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 30% 25%, rgba(6,182,212,0.18), transparent 60%)",
                          }}
                        />
                        <div
                          aria-hidden
                          className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border border-aqua-200/70"
                        />
                        <div
                          aria-hidden
                          className="absolute -bottom-16 -right-4 h-52 w-52 rounded-full border border-aqua-200/50"
                        />
                        <div className="relative flex flex-col items-center gap-4 text-center">
                          <span className="flex h-[4.6rem] w-[4.6rem] items-center justify-center rounded-3xl bg-white text-aqua-600 ring-1 ring-inset ring-aqua-100 card-shadow">
                            <Icon className="h-8 w-8" />
                          </span>
                          <span className="font-display text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-aqua-600">
                            {String(i + 1).padStart(2, "0")} / 08
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-8 md:p-11 lg:col-span-8">
                        <h2 className="font-display text-[1.5rem] font-extrabold leading-tight text-ink md:text-[1.75rem]">
                          {s.title}
                        </h2>
                        <p className="mt-4 max-w-2xl text-[1rem] leading-[1.75] text-slate-600">
                          {s.summary}
                        </p>

                        <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
                          {s.points.map((p) => (
                            <li key={p} className="flex items-start gap-3">
                              <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aqua-500 text-white">
                                <IconCheck className="h-3 w-3" strokeWidth={2.8} />
                              </span>
                              <span className="text-[0.91rem] leading-[1.6] text-slate-700">
                                {p}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Who we serve */}
      <Section className="relative overflow-hidden bg-ink text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 30rem at 20% 0%, rgba(6,182,212,0.2), transparent 62%), radial-gradient(50rem 28rem at 88% 100%, rgba(56,189,248,0.14), transparent 60%)",
          }}
        />
        <div className="container-x relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow tone="light">Who we serve</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-[clamp(1.95rem,4.2vw,3.05rem)] font-extrabold leading-[1.06] text-white">
                Built for properties where the pool is{" "}
                <span className="text-aqua-400">an amenity, not a hobby</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-[1.02rem] leading-[1.75] text-slate-400">
                Commercial water carries commercial liability. Every property
                type below gets the same documentation trail, the same
                certification standard and the same written schedule.
              </p>
            </Reveal>
          </div>

          <Stagger className="mt-12 flex flex-wrap gap-3" amount={0.05}>
            {clientTypes.map((c) => (
              <StaggerItem key={c}>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-[0.9rem] font-semibold text-slate-200 backdrop-blur-sm transition-colors duration-300 hover:border-aqua-400/50 hover:bg-aqua-400/10 hover:text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-aqua-400" />
                  {c}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <WaveDivider fill="#ffffff" className="-mt-px bg-ink" />

      <Included />
      <Process />

      <Section className="bg-white pt-0">
        <div className="container-x">
          <SectionHeading
            eyebrow="Next step"
            title={
              <>
                Tell us about the property.{" "}
                <span className="text-gradient-aqua">We&apos;ll do the rest.</span>
              </>
            }
            description="Send over the basics — pool size, season dates, current staffing — and we will put together a written proposal you can take to your board."
          />
          <div className="mt-10 flex justify-center">
            <Button href="/contact" size="lg" withArrow>
              Start your proposal
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
