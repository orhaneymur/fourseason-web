"use client";

import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/** Expo-out. The single easing curve used across the whole site. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* -------------------------------------------------------------------------- */
/* Reveal — fade + rise as the element scrolls into view                      */
/* -------------------------------------------------------------------------- */

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 26 },
  down: { x: 0, y: -26 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

/*
 * None of the primitives below branch their rendered output on
 * `useReducedMotion()`. That hook can only read the media query on the
 * client, so branching on it made the server and client render different
 * markup and produced a hydration error for anyone with reduced motion
 * enabled. Reduced motion is handled centrally instead, by
 * `<MotionConfig reducedMotion="user">` in `src/components/providers.tsx`,
 * which strips transform animations inside Motion itself.
 */

export function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  once?: boolean;
}) {
  const { x, y } = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-90px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Stagger — parent/child pair for grids and lists                            */
/* -------------------------------------------------------------------------- */

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.085, delayChildren: 0.06 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export function Stagger({
  children,
  className,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div variants={staggerChild} className={className} style={style}>
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* WordReveal — headline that assembles word by word                          */
/* -------------------------------------------------------------------------- */

export function WordReveal({
  text,
  className,
  delay = 0,
  highlight,
  highlightClassName = "text-gradient-aqua",
}: {
  text: string;
  className?: string;
  delay?: number;
  /** Words listed here get the highlight treatment. */
  highlight?: string[];
  highlightClassName?: string;
}) {
  const words = text.split(" ");
  const flagged = new Set(
    (highlight ?? []).map((w) => w.toLowerCase().replace(/[^a-z]/g, "")),
  );

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.055, delayChildren: delay },
        },
      }}
      style={{ display: "inline-block" }}
    >
      {words.map((word, i) => {
        const clean = word.toLowerCase().replace(/[^a-z]/g, "");
        return (
          <span
            key={`${word}-${i}`}
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
          >
            <motion.span
              style={{ display: "inline-block", willChange: "transform" }}
              variants={{
                hidden: { opacity: 0, y: "0.9em", rotate: 3 },
                show: {
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: { duration: 0.95, ease: EASE },
                },
              }}
              className={flagged.has(clean) ? highlightClassName : undefined}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </motion.span>
  );
}

/* -------------------------------------------------------------------------- */
/* Counter — number that counts up once it enters the viewport                */
/* -------------------------------------------------------------------------- */

export function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.7,
  className,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // Reduced motion is read here (in an effect, not during render) so the
    // server and client always agree on the initial "0".
    const instant = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controls = animate(0, value, {
      duration: instant ? 0 : duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Magnetic — element that leans toward the cursor                            */
/* -------------------------------------------------------------------------- */

export function Magnetic({
  children,
  strength = 0.28,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.35 });

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/* -------------------------------------------------------------------------- */
/* SpotlightCard — card with a cursor-following glow and a lift on hover      */
/* -------------------------------------------------------------------------- */

export function SpotlightCard({
  children,
  className = "",
  glow = "rgba(6,182,212,0.16)",
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-999);
  const my = useMotionValue(-999);
  const background = useMotionTemplate`radial-gradient(340px circle at ${mx}px ${my}px, ${glow}, transparent 72%)`;

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, ease: EASE }}
      onPointerMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
      onPointerLeave={() => {
        mx.set(-999);
        my.set(-999);
      }}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Parallax — moves a layer at a different rate than the page                 */
/* -------------------------------------------------------------------------- */

export function Parallax({
  children,
  distance = 90,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const smooth = useSpring(y, { stiffness: 90, damping: 22, mass: 0.4 });

  return (
    <div ref={ref} className={className}>
      <motion.div className="motion-reduce:transform-none!" style={{ y: smooth }}>
        {children}
      </motion.div>
    </div>
  );
}
