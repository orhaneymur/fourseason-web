import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { IconArrowRight } from "@/components/icons";
import { Reveal } from "@/components/anim";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/* Button                                                                     */
/* -------------------------------------------------------------------------- */

type Variant = "primary" | "dark" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-aqua-400 to-aqua-600 text-white shadow-[0_12px_30px_-12px_rgba(6,182,212,0.85)] hover:shadow-[0_18px_40px_-14px_rgba(6,182,212,0.95)] hover:from-aqua-400 hover:to-aqua-500",
  dark: "bg-ink text-white hover:bg-slate-800 shadow-[0_12px_30px_-14px_rgba(15,23,42,0.8)]",
  outline:
    "bg-white text-ink ring-1 ring-inset ring-slate-200 hover:ring-aqua-300 hover:bg-aqua-50/60 card-shadow",
  ghost: "text-ink hover:bg-slate-100",
};

// Every size keeps a >= 44px touch target on the shortest variant.
const sizes: Record<Size, string> = {
  sm: "h-11 px-4 text-[0.86rem]",
  md: "h-12 px-5 text-[0.92rem] sm:px-6 sm:text-[0.94rem]",
  lg: "h-[3.1rem] px-6 text-[0.95rem] sm:h-[3.35rem] sm:px-8 sm:text-[1rem]",
};

type ButtonProps = Omit<ComponentProps<"button">, "ref"> & {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  /** Renders a `next/link` instead of a `<button>`. */
  href?: string;
  target?: string;
  rel?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  withArrow = false,
  href,
  ...rest
}: ButtonProps) {
  // cn() so a caller's `hidden` / `w-full` beats the base classes below.
  const cls = cn(
    "group/btn relative inline-flex max-w-full select-none items-center justify-center gap-2 overflow-hidden rounded-full text-center font-semibold tracking-[-0.01em]",
    "transition-all duration-300 ease-out active:scale-[0.975]",
    variants[variant],
    sizes[size],
    className,
  );

  const inner = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.42),transparent)] transition-transform duration-[900ms] ease-out group-hover/btn:translate-x-full"
        />
      )}
      <span className="relative">{children}</span>
      {withArrow && (
        <IconArrowRight className="relative h-[1.05em] w-[1.05em] shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
      )}
    </>
  );

  if (href) {
    const { target, rel } = rest as { target?: string; rel?: string };
    return (
      <Link href={href} className={cls} target={target} rel={rel}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/* Eyebrow                                                                    */
/* -------------------------------------------------------------------------- */

export function Eyebrow({
  children,
  className = "",
  tone = "aqua",
}: {
  children: ReactNode;
  className?: string;
  tone?: "aqua" | "light";
}) {
  const tones = {
    aqua: "bg-aqua-50 text-aqua-700 ring-aqua-200/80",
    light: "bg-white/12 text-white ring-white/25 backdrop-blur",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.14em] ring-1 ring-inset sm:px-3.5 sm:text-[0.7rem] sm:tracking-[0.18em]",
        tones[tone],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-70" />
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* SectionHeading                                                             */
/* -------------------------------------------------------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
  tone?: "dark" | "light";
}) {
  const alignCls =
    align === "center"
      ? "mx-auto max-w-3xl text-center items-center"
      : "max-w-2xl items-start";

  return (
    <div className={cn("flex flex-col", alignCls, className)}>
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone === "light" ? "light" : "aqua"}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-4 text-[clamp(1.72rem,6vw,3.15rem)] font-extrabold leading-[1.08] sm:mt-5",
            tone === "light" ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-4 text-[0.97rem] leading-[1.7] sm:mt-5 sm:text-[1.02rem] md:text-[1.09rem] md:leading-[1.72]",
              tone === "light" ? "text-sky-100/85" : "text-slate-600",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Section wrapper                                                            */
/* -------------------------------------------------------------------------- */

/**
 * `size` controls vertical rhythm. Don't pass `py-*` through `className` —
 * Tailwind orders `py-16` before `py-20`, so the default would win instead.
 */
const sectionSizes = {
  default: "py-14 sm:py-20 md:py-24 lg:py-32",
  tight: "py-10 sm:py-14 md:py-20",
  none: "",
} as const;

export function Section({
  children,
  className = "",
  id,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: keyof typeof sectionSizes;
}) {
  return (
    <section id={id} className={cn("relative", sectionSizes[size], className)}>
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Small pieces                                                               */
/* -------------------------------------------------------------------------- */

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[0.8rem] font-semibold text-slate-700 ring-1 ring-inset ring-slate-200 card-shadow">
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white ring-1 ring-inset ring-slate-200/80 card-shadow",
        className,
      )}
    >
      {children}
    </div>
  );
}
