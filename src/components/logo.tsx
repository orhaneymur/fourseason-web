import { site } from "@/lib/site";

/**
 * The Four Seasons mark: four arc segments (one per season) enclosing a
 * pool of water. The wave drifts continuously via pure CSS so the mark
 * stays a Server Component.
 */
export function LogoMark({
  className = "h-10 w-10",
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label={`${site.name} logo`}
      className={className}
    >
      <defs>
        <linearGradient id="fsp-water" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="fsp-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
        <clipPath id="fsp-basin">
          <circle cx="24" cy="24" r="13" />
        </clipPath>
      </defs>

      {/* Four season arcs */}
      <g
        fill="none"
        stroke="url(#fsp-ring)"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <path d="M4.08 22.26 A20 20 0 0 1 22.26 4.08" />
        <path d="M25.74 4.08 A20 20 0 0 1 43.92 22.26" />
        <path d="M43.92 25.74 A20 20 0 0 1 25.74 43.92" />
        <path d="M22.26 43.92 A20 20 0 0 1 4.08 25.74" />
      </g>

      {/* Basin */}
      <circle cx="24" cy="24" r="13" fill="var(--color-aqua-50)" />

      {/* Drifting water */}
      <g clipPath="url(#fsp-basin)">
        <path
          d="M-6 25 q 3.75 -3.4 7.5 0 t 7.5 0 t 7.5 0 t 7.5 0 t 7.5 0 t 7.5 0 t 7.5 0 t 7.5 0 V 44 H -6 Z"
          fill="url(#fsp-water)"
          className={animated ? "animate-[fsp-wave_5s_linear_infinite]" : ""}
        />
        <path
          d="M-6 28 q 3.75 -3.4 7.5 0 t 7.5 0 t 7.5 0 t 7.5 0 t 7.5 0 t 7.5 0 t 7.5 0 t 7.5 0 V 44 H -6 Z"
          fill="#0e7490"
          opacity="0.45"
          className={animated ? "animate-[fsp-wave_3.6s_linear_infinite]" : ""}
        />
      </g>

      {/* Water line highlight */}
      <circle
        cx="24"
        cy="24"
        r="13"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        opacity="0.9"
      />

      <style>{`@keyframes fsp-wave { from { transform: translateX(0) } to { transform: translateX(-15px) } }`}</style>
    </svg>
  );
}

export function Logo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={`flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}>
      <LogoMark
        className={
          compact ? "h-9 w-9 shrink-0" : "h-9 w-9 shrink-0 sm:h-11 sm:w-11"
        }
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="truncate font-display text-[0.97rem] font-extrabold tracking-[-0.03em] text-ink sm:text-[1.06rem]">
          Four Seasons
        </span>
        <span className="mt-[3px] truncate text-[0.52rem] font-semibold uppercase tracking-[0.16em] text-aqua-600 sm:text-[0.58rem] sm:tracking-[0.22em]">
          Pool Management
        </span>
      </span>
    </span>
  );
}
