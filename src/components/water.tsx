/**
 * Decorative water layers. Everything here is pure CSS/SVG so these stay
 * Server Components and cost nothing on the client.
 */

const WAVE_A =
  "M0,70 C 180,20 360,120 720,70 C 1080,20 1260,120 1440,70 L1440,140 L0,140 Z";
const WAVE_B =
  "M0,60 C 240,112 480,8 720,60 C 960,112 1200,8 1440,60 L1440,140 L0,140 Z";
const WAVE_C =
  "M0,86 C 200,44 420,126 720,86 C 1020,44 1240,126 1440,86 L1440,140 L0,140 Z";

function WaveTrack({
  d,
  fill,
  seconds,
  opacity,
  reverse = false,
}: {
  d: string;
  fill: string;
  seconds: number;
  opacity: number;
  reverse?: boolean;
}) {
  return (
    <div
      className="absolute inset-y-0 left-0 flex h-full w-[200%] motion-safe:animate-[marquee_var(--dur)_linear_infinite]"
      style={
        {
          "--dur": `${seconds}s`,
          opacity,
          animationDirection: reverse ? "reverse" : "normal",
        } as React.CSSProperties
      }
    >
      {[0, 1].map((i) => (
        <svg
          key={i}
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="h-full w-1/2 shrink-0"
          aria-hidden
        >
          <path d={d} fill={fill} />
        </svg>
      ))}
    </div>
  );
}

/** Full-bleed animated water surface. Sits at the bottom of the hero. */
export function WaterSurface({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-[38vh] min-h-[220px] max-h-[420px] overflow-hidden ${className}`}
    >
      <WaveTrack d={WAVE_C} fill="#bae6fd" seconds={34} opacity={0.55} />
      <WaveTrack d={WAVE_B} fill="#7dd3fc" seconds={26} opacity={0.5} reverse />
      <WaveTrack d={WAVE_A} fill="#38bdf8" seconds={19} opacity={0.42} />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/70 to-transparent" />
    </div>
  );
}

/** Shaped transition between two sections. */
export function WaveDivider({
  fill = "#ffffff",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none relative h-16 w-full overflow-hidden md:h-24 ${className}`}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0,52 C 260,4 480,96 720,58 C 980,16 1200,88 1440,44 L1440,96 L0,96 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/** Slow-moving light pools, like sun through water. */
export function Caustics({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -left-[15%] top-[-20%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.16),transparent_66%)] blur-2xl motion-safe:animate-caustic" />
      <div
        className="absolute -right-[12%] top-[8%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.2),transparent_68%)] blur-2xl motion-safe:animate-caustic"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute left-[32%] bottom-[-18%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(224,242,254,0.9),transparent_70%)] blur-2xl motion-safe:animate-caustic"
        style={{ animationDelay: "-12s" }}
      />
    </div>
  );
}

/** Sparse bubbles drifting upward. */
export function Bubbles({ count = 9 }: { count?: number }) {
  const bubbles = Array.from({ length: count }, (_, i) => ({
    left: `${(i * 97) % 94}%`,
    size: 6 + ((i * 13) % 22),
    delay: -(i * 1.7),
    dur: 8 + ((i * 5) % 9),
    opacity: 0.18 + ((i * 7) % 20) / 100,
  }));

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full border border-aqua-300/60 bg-aqua-200/25 motion-safe:animate-bob"
          style={{
            left: b.left,
            bottom: `${8 + ((i * 11) % 60)}%`,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
