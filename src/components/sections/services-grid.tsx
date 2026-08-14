import Link from "next/link";
import { SpotlightCard, Stagger, StaggerItem } from "@/components/anim";
import { serviceIcons, IconArrowRight } from "@/components/icons";
import { Button, Section, SectionHeading } from "@/components/ui";
import { services } from "@/lib/site";

export function ServicesGrid({
  limit,
  showHeading = true,
  showCta = true,
}: {
  limit?: number;
  showHeading?: boolean;
  showCta?: boolean;
}) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <Section id="services" className="bg-white">
      {/* soft wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(224,242,254,0.85),transparent_70%)]"
      />

      <div className="container-x relative">
        {showHeading && (
          <SectionHeading
            eyebrow="What we handle"
            title={
              <>
                Everything your pool needs,{" "}
                <span className="text-gradient-aqua">under one agreement</span>
              </>
            }
            description="No stacking vendors. No finger-pointing when a reading comes back out of range. One team owns staffing, chemistry, compliance and the mechanical room."
          />
        )}

        <Stagger
          className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${
            showHeading ? "mt-16" : ""
          }`}
          amount={0.05}
        >
          {list.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <StaggerItem key={s.slug} className="h-full">
                <SpotlightCard className="h-full rounded-3xl bg-white ring-1 ring-inset ring-slate-200/80 card-shadow transition-shadow duration-500 hover:ring-aqua-200">
                  <Link
                    href={`/services#${s.slug}`}
                    className="flex h-full flex-col p-7"
                    id={`card-${s.slug}`}
                  >
                    <span className="relative flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl bg-gradient-to-br from-aqua-50 to-sky-100 text-aqua-600 ring-1 ring-inset ring-aqua-100 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </span>

                    <h3 className="mt-6 font-display text-[1.16rem] font-bold leading-snug text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.92rem] leading-[1.7] text-slate-600">
                      {s.summary}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-[0.84rem] font-bold text-aqua-700">
                      Details
                      <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        {showCta && (
          <div className="mt-14 flex justify-center">
            <Button href="/services" variant="outline" size="lg" withArrow>
              See all services in detail
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
