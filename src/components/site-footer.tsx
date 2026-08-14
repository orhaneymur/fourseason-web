import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui";
import {
  IconArrowRight,
  IconCheck,
  IconMail,
  IconPhone,
  IconPin,
} from "@/components/icons";
import { nav, services, site } from "@/lib/site";

const certifications = [
  "Ellis & Associates / American Red Cross certified guards",
  "CPR, First Aid and AED current on every guard",
  "Licensed and insured commercial operator",
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-slate-300">
      {/* Water glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(80rem 34rem at 12% -12%, rgba(6,182,212,0.22), transparent 62%), radial-gradient(60rem 30rem at 92% 8%, rgba(56,189,248,0.14), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua-400/60 to-transparent"
      />

      {/* CTA band */}
      <div className="container-x relative border-b border-white/10 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.8rem,3.6vw,2.7rem)] font-extrabold leading-[1.08] text-white">
              Planning your next pool season?
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-slate-400">
              Send us the property details and we will come back with a written
              agreement — schedule, staffing hours, inclusions and a single price
              split into six monthly payments.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="/contact" size="lg" withArrow>
              Request a Proposal
            </Button>
            <a
              href={site.phone.href}
              className="inline-flex h-[3.1rem] items-center justify-center gap-2 rounded-full px-6 sm:h-[3.35rem] sm:px-7 text-[1rem] font-semibold text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/10"
            >
              <IconPhone className="h-[1.05rem] w-[1.05rem]" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="container-x relative grid gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <LogoMark className="h-11 w-11" animated={false} />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.06rem] font-extrabold tracking-[-0.03em] text-white">
                Four Seasons
              </span>
              <span className="mt-[3px] text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-aqua-400">
                Pool Management
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-[1.75] text-slate-400">
            Commercial pool management built around one idea: your season should
            be handled by people who own the outcome, not just the hours.
          </p>

          <ul className="mt-7 space-y-2.5">
            {certifications.map((c) => (
              <li key={c} className="flex gap-3 text-[0.87rem] leading-relaxed text-slate-400">
                <IconCheck className="mt-[3px] h-4 w-4 shrink-0 text-aqua-400" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <FooterHeading>Company</FooterHeading>
          <ul className="mt-3 space-y-0.5">
            {nav.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterHeading>Services</FooterHeading>
          <ul className="mt-3 space-y-0.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <FooterLink href={`/services#${s.slug}`}>{s.title}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterHeading>Get in touch</FooterHeading>
          {/* min-h-11 + py keeps each row a comfortable touch target. */}
          <ul className="mt-4 space-y-1.5 text-[0.92rem]">
            <li>
              <a
                href={site.phone.href}
                className="group flex min-h-11 items-center gap-3 py-1.5 text-slate-300 transition-colors hover:text-aqua-300"
              >
                <IconPhone className="h-[1.05rem] w-[1.05rem] shrink-0 text-aqua-400" />
                <span>{site.phone.display}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group flex min-h-11 items-center gap-3 break-all py-1.5 text-slate-300 transition-colors hover:text-aqua-300"
              >
                <IconMail className="h-[1.05rem] w-[1.05rem] shrink-0 text-aqua-400" />
                <span>{site.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 py-1.5 text-slate-400">
              <IconPin className="mt-[3px] h-[1.05rem] w-[1.05rem] shrink-0 text-aqua-400" />
              <span>{site.serviceArea}</span>
            </li>
          </ul>

          <dl className="mt-7 space-y-2.5 border-t border-white/10 pt-6">
            {site.hours.map((h) => (
              <div key={h.label} className="flex flex-col gap-0.5">
                <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-500">
                  {h.label}
                </dt>
                <dd className="text-[0.87rem] text-slate-300">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="container-x relative flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-[0.82rem] text-slate-500 sm:flex-row">
        <p>
          © {year} {site.legalName}. All rights reserved.
        </p>
        <p className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-aqua-400" />
          Certified. Insured. Accountable.
        </p>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white">
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      // py-2.5 keeps the row a ~44px tap target on touch screens.
      className="group inline-flex min-h-11 items-center gap-1.5 py-2.5 text-[0.92rem] text-slate-400 transition-colors hover:text-aqua-300"
    >
      <span>{children}</span>
      <IconArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  );
}
