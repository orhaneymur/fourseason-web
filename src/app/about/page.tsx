import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal, Stagger, StaggerItem, Counter } from "@/components/anim";
import { Button, Eyebrow, Section, SectionHeading } from "@/components/ui";
import {
  IconCheck,
  IconClipboard,
  IconDoc,
  IconGuard,
  IconShield,
  IconSparkle,
  IconBuilding,
  IconDroplet,
} from "@/components/icons";
import { WaveDivider } from "@/components/water";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Four Seasons Pool Management operates: certified staff, documented chemistry, attended inspections and a written agreement that runs from opening through winterization.",
};

const values = [
  {
    icon: IconShield,
    title: "Accountable, not available",
    body: "Plenty of vendors will answer the phone. We put the schedule, the staffing hours and the inclusions in writing so there is nothing left to interpret in August.",
  },
  {
    icon: IconClipboard,
    title: "Documented by default",
    body: "Chemical readings, safety inspections, in-service training and inspection outcomes are recorded per property. When an inspector asks, the file already exists.",
  },
  {
    icon: IconGuard,
    title: "Certification is the floor",
    body: "Every guard arrives certified in Lifeguarding, CPR, First Aid and AED. Then we run unannounced skill audits and in-service training all season long.",
  },
  {
    icon: IconSparkle,
    title: "No surprise line items",
    body: "Chemicals, test kit restock, first aid restock, opening and closing are included. Additional guard hours are priced in the contract before you need them.",
  },
];

const records = [
  { icon: IconBuilding, label: "Property profile", detail: "Pool dimensions, bather load, deck layout and access notes" },
  { icon: IconDroplet, label: "Chemical logs", detail: "Daily readings and corrective action, retained by season" },
  { icon: IconClipboard, label: "Inspection history", detail: "Health department outcomes and follow-up documentation" },
  { icon: IconDoc, label: "Contract archive", detail: "Previous agreements, insurance certificates and equipment notes" },
];

const standards = [
  "Lifeguarding certification — Ellis & Associates or American Red Cross",
  "CPR for the Professional Rescuer, current",
  "First Aid certification, current",
  "AED training, current",
  "Documented in-service training throughout the season",
  "Unannounced on-deck skill audits",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We treat your pool like a facility, not a chore."
        highlight={["facility,", "not"]}
        description="Four Seasons Pool Management exists because commercial aquatics gets handed to whoever is cheapest in April and forgotten by October. A pool is a year-round asset with year-round liability — and it should be managed that way."
      />

      {/* Approach */}
      <Section className="bg-white pt-4 md:pt-8">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Our approach</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-[clamp(1.85rem,3.9vw,2.8rem)] font-extrabold leading-[1.08] text-ink">
                The season is won in{" "}
                <span className="text-gradient-aqua">November</span>, not July.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-6 space-y-5 text-[1.02rem] leading-[1.78] text-slate-600">
                <p>
                  Almost every delayed opening traces back to something nobody
                  looked at during the off-season — a cover that failed, a pump
                  seal that dried out, a permit that lapsed. That is why our
                  agreement does not stop when the swimmers leave. Two documented
                  service visits every month through the winter mean the repair
                  list arrives with time to budget for it, not two weeks before
                  Memorial Day.
                </p>
                <p>
                  During the season, the work is unglamorous and relentless: test
                  the water, correct the water, log the reading. Staff the deck
                  with guards who are actually current on their certifications.
                  Walk the property. Show up for the health department inspection
                  instead of asking how it went afterwards.
                </p>
                <p>
                  And it all sits inside one contract with one price, split into
                  six equal payments. No change orders for things that should
                  have been included. No conversation in July about what the
                  agreement really covered.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15} direction="left">
              <div className="sticky top-32 space-y-4">
                <div className="rounded-[1.75rem] bg-ink p-7 text-white sm:p-9">
                  <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.2em] text-aqua-400">
                    The commitment
                  </p>
                  <p className="mt-6 font-display text-[4rem] font-extrabold leading-none tracking-[-0.05em] text-white">
                    <Counter value={12} />
                    <span className="text-aqua-400">mo</span>
                  </p>
                  <p className="mt-4 text-[0.95rem] leading-[1.7] text-slate-400">
                    Your contract stays in force from opening through
                    winterization and across the off-season. Closing the pool
                    properly is part of the job, not a separate invoice.
                  </p>
                </div>

                <div className="rounded-[1.75rem] bg-gradient-to-br from-aqua-50 to-sky-50 p-7 ring-1 sm:p-9 ring-inset ring-aqua-100">
                  <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.2em] text-aqua-700">
                    On every guard
                  </p>
                  <p className="mt-6 font-display text-[4rem] font-extrabold leading-none tracking-[-0.05em] text-ink">
                    <Counter value={4} />
                  </p>
                  <p className="mt-4 text-[0.95rem] leading-[1.7] text-slate-600">
                    Current certifications — Lifeguarding, CPR, First Aid and
                    AED — through Ellis &amp; Associates or the American Red
                    Cross.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-slate-50/80">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 dot-texture opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_40%,#000,transparent)]"
        />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="How we operate"
            title={
              <>
                Four things we{" "}
                <span className="text-gradient-aqua">will not compromise on</span>
              </>
            }
          />

          <Stagger className="mt-16 grid gap-5 md:grid-cols-2" amount={0.1}>
            {values.map(({ icon: Icon, title, body }) => (
              <StaggerItem key={title} className="h-full">
                <div className="group h-full rounded-3xl bg-white p-7 ring-1 sm:p-9 ring-inset ring-slate-200/80 card-shadow transition-all duration-500 hover:-translate-y-1.5 hover:ring-aqua-200">
                  <span className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl bg-gradient-to-br from-aqua-50 to-sky-100 text-aqua-600 ring-1 ring-inset ring-aqua-100 transition-transform duration-500 group-hover:-rotate-6">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-[1.2rem] font-extrabold leading-snug text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.72] text-slate-600">
                    {body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Records */}
      <Section className="relative overflow-hidden bg-ink text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(58rem 30rem at 15% 0%, rgba(6,182,212,0.2), transparent 62%)",
          }}
        />
        <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="light">Records</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-[clamp(1.9rem,4vw,2.85rem)] font-extrabold leading-[1.07] text-white">
                Your property has a{" "}
                <span className="text-aqua-400">file, not a folder</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-[1.02rem] leading-[1.75] text-slate-400">
                Everything we learn about your facility stays with your facility
                — season over season, whoever is on site. When a board changes or
                a manager moves on, the operating history does not walk out with
                them.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-7" amount={0.1}>
            {records.map(({ icon: Icon, label, detail }) => (
              <StaggerItem key={label} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm transition-colors duration-500 hover:border-aqua-400/40 hover:bg-aqua-400/[0.07]">
                  <Icon className="h-6 w-6 text-aqua-400" />
                  <h3 className="mt-5 font-display text-[1.02rem] font-bold text-white">
                    {label}
                  </h3>
                  <p className="mt-2 text-[0.88rem] leading-[1.65] text-slate-400">
                    {detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <WaveDivider fill="#ffffff" className="-mt-px bg-ink" />

      {/* Standards */}
      <Section className="bg-white">
        <div className="container-x">
          <div className="overflow-hidden rounded-[1.85rem] bg-gradient-to-br from-aqua-50 via-sky-50 to-white p-6 ring-1 ring-inset ring-aqua-100 sm:p-9 md:p-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <Reveal>
                  <Eyebrow>Certification standard</Eyebrow>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="mt-6 text-[clamp(1.7rem,3.4vw,2.4rem)] font-extrabold leading-[1.1] text-ink">
                    What &ldquo;certified&rdquo; means here
                  </h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="mt-5 text-[0.98rem] leading-[1.75] text-slate-600">
                    Not &ldquo;certified at some point.&rdquo; Current, verifiable
                    and re-checked on deck.
                  </p>
                </Reveal>
                <Reveal delay={0.24}>
                  <div className="mt-8">
                    <Button href="/contact" withArrow>
                      Ask for our credentials
                    </Button>
                  </div>
                </Reveal>
              </div>

              <Stagger className="grid gap-3 lg:col-span-7" amount={0.1}>
                {standards.map((s) => (
                  <StaggerItem key={s}>
                    <div className="flex items-start gap-3.5 rounded-2xl bg-white/80 px-5 py-4 ring-1 ring-inset ring-white backdrop-blur-sm">
                      <span className="mt-[2px] flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-aqua-500 text-white">
                        <IconCheck className="h-3 w-3" strokeWidth={2.8} />
                      </span>
                      <span className="text-[0.93rem] leading-[1.6] text-slate-700">
                        {s}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </Section>

      {/* Close */}
      <Section className="bg-white pt-0">
        <div className="container-x">
          <SectionHeading
            eyebrow="Talk to us"
            title={
              <>
                Bring us the property.{" "}
                <span className="text-gradient-aqua">We&apos;ll bring the plan.</span>
              </>
            }
            description={`Call ${site.phone.display} or send the details and we will come back with a written agreement.`}
          />
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/contact" size="lg" withArrow>
              Request a Proposal
            </Button>
            <Button href={site.phone.href} size="lg" variant="outline">
              {site.phone.display}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
