import type { ReactNode } from "react";
import { Reveal, WordReveal } from "@/components/anim";
import { Eyebrow } from "@/components/ui";
import { Caustics, Bubbles } from "@/components/water";

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  /** Words in `title` that get the aqua gradient. */
  highlight?: string[];
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-12 pt-[7rem] sm:pb-16 sm:pt-[8.5rem] md:pb-24 md:pt-[11rem]">
      <Caustics />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-texture opacity-50 [mask-image:radial-gradient(65%_70%_at_50%_20%,#000,transparent)]"
      />
      <Bubbles count={6} />

      <div className="container-x relative max-w-4xl">
        <Reveal duration={0.7}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>

        <h1 className="mt-6 text-[clamp(2rem,7.6vw,4rem)] font-extrabold leading-[1.05] text-ink sm:mt-7 sm:leading-[1.02]">
          <WordReveal text={title} delay={0.2} highlight={highlight} />
        </h1>

        <Reveal delay={0.6} duration={0.9}>
          <p className="mt-5 max-w-2xl text-[1rem] leading-[1.7] text-slate-600 sm:mt-6 sm:text-[1.06rem] sm:leading-[1.75] md:text-[1.13rem]">
            {description}
          </p>
        </Reveal>

        {children && (
          <Reveal delay={0.75} duration={0.9}>
            <div className="mt-9">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
