import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

/* --- Service icons ------------------------------------------------------- */

export const IconShield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 2.8 4.8 5.8v5.5c0 4.4 2.9 8.3 7.2 9.9 4.3-1.6 7.2-5.5 7.2-9.9V5.8Z" />
    <path d="m8.9 12.1 2.1 2.1 4.1-4.4" />
  </Base>
);

export const IconGuard = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="6.4" r="2.9" />
    <path d="M4.6 20.4a7.4 7.4 0 0 1 14.8 0" />
    <path d="M9.4 13.9 12 17l2.6-3.1" />
  </Base>
);

export const IconFlask = (p: IconProps) => (
  <Base {...p}>
    <path d="M9.5 2.9v5.4L4.9 17a2.7 2.7 0 0 0 2.3 4.1h9.6a2.7 2.7 0 0 0 2.3-4.1l-4.6-8.7V2.9" />
    <path d="M8.4 2.9h7.2" />
    <path d="M6.7 14.6h10.6" />
    <circle cx="10.4" cy="17.8" r=".9" />
    <circle cx="13.9" cy="18.9" r=".7" />
  </Base>
);

export const IconSnowflake = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 2.6v18.8" />
    <path d="m3.9 7.3 16.2 9.4" />
    <path d="m20.1 7.3-16.2 9.4" />
    <path d="m9.4 5.2 2.6 2.6 2.6-2.6" />
    <path d="m9.4 18.8 2.6-2.6 2.6 2.6" />
  </Base>
);

export const IconClipboard = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 3.6h6a1.4 1.4 0 0 1 1.4 1.4v.8H7.6V5A1.4 1.4 0 0 1 9 3.6Z" />
    <path d="M16.4 5.4h1.7A1.9 1.9 0 0 1 20 7.3v11.4a1.9 1.9 0 0 1-1.9 1.9H5.9A1.9 1.9 0 0 1 4 18.7V7.3a1.9 1.9 0 0 1 1.9-1.9h1.7" />
    <path d="m9 13.4 1.9 1.9 3.9-4" />
  </Base>
);

export const IconWrench = (p: IconProps) => (
  <Base {...p}>
    <path d="M15.1 3.4a5.2 5.2 0 0 0-4.6 7.7L3.9 17.7a2 2 0 0 0 2.8 2.8l6.6-6.6a5.2 5.2 0 0 0 6.4-6.9l-2.9 2.9-2.6-.7-.7-2.6 2.9-2.9a5.2 5.2 0 0 0-1.3-.3Z" />
  </Base>
);

export const IconGraduation = (p: IconProps) => (
  <Base {...p}>
    <path d="M2.8 8.8 12 4.4l9.2 4.4L12 13.2Z" />
    <path d="M6.6 10.6v4.9c0 1.5 2.4 2.7 5.4 2.7s5.4-1.2 5.4-2.7v-4.9" />
    <path d="M21.2 8.8v5.4" />
  </Base>
);

export const IconCalendar = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.4" y="5.2" width="17.2" height="15.4" rx="2.2" />
    <path d="M3.4 9.9h17.2M8.2 3.4v3.6M15.8 3.4v3.6" />
    <circle cx="8.4" cy="14" r=".9" fill="currentColor" stroke="none" />
    <circle cx="12" cy="14" r=".9" fill="currentColor" stroke="none" />
    <circle cx="15.6" cy="14" r=".9" fill="currentColor" stroke="none" />
  </Base>
);

export const serviceIcons = {
  shield: IconShield,
  guard: IconGuard,
  flask: IconFlask,
  snowflake: IconSnowflake,
  clipboard: IconClipboard,
  wrench: IconWrench,
  graduation: IconGraduation,
  calendar: IconCalendar,
} as const;

/* --- UI icons ------------------------------------------------------------ */

export const IconArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M4.5 12h15" />
    <path d="m13.4 5.6 6.4 6.4-6.4 6.4" />
  </Base>
);

export const IconPhone = (p: IconProps) => (
  <Base {...p}>
    <path d="M6.3 3.4h3l1.5 3.8-2 1.3a11.4 11.4 0 0 0 5.7 5.7l1.3-2 3.8 1.5v3a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.3 5.6a2 2 0 0 1 2-2.2Z" />
  </Base>
);

export const IconMail = (p: IconProps) => (
  <Base {...p}>
    <rect x="2.8" y="4.9" width="18.4" height="14.2" rx="2.2" />
    <path d="m3.4 7 7.5 5.2a2 2 0 0 0 2.2 0L20.6 7" />
  </Base>
);

export const IconPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21.2s7-5.6 7-11.2a7 7 0 1 0-14 0c0 5.6 7 11.2 7 11.2Z" />
    <circle cx="12" cy="9.8" r="2.6" />
  </Base>
);

export const IconClock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.9" />
    <path d="M12 7.1V12l3.2 2.1" />
  </Base>
);

export const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="m4.8 12.6 4.6 4.6 9.8-10.4" />
  </Base>
);

export const IconChevron = (p: IconProps) => (
  <Base {...p}>
    <path d="m6.4 9.2 5.6 5.6 5.6-5.6" />
  </Base>
);

export const IconMenu = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.8 7.4h16.4M3.8 12h16.4M3.8 16.6h16.4" />
  </Base>
);

export const IconClose = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);

export const IconDroplet = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 2.9s6.3 6.4 6.3 10.6a6.3 6.3 0 1 1-12.6 0C5.7 9.3 12 2.9 12 2.9Z" />
    <path d="M9.4 14.6a2.7 2.7 0 0 0 2.7 2.6" />
  </Base>
);

export const IconSparkle = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.2 13.7 9l5.8 1.7-5.8 1.7L12 18.2l-1.7-5.8L4.5 10.7 10.3 9Z" />
    <path d="M18.6 3.4v3M17.1 4.9h3" />
  </Base>
);

export const IconBuilding = (p: IconProps) => (
  <Base {...p}>
    <path d="M4.4 20.6V5.2a1.6 1.6 0 0 1 1.6-1.6h6.4a1.6 1.6 0 0 1 1.6 1.6v15.4" />
    <path d="M14 9.6h4a1.6 1.6 0 0 1 1.6 1.6v9.4" />
    <path d="M2.6 20.6h18.8M7.6 7.4h3.2M7.6 11h3.2M7.6 14.6h3.2M16.8 13.2h.01M16.8 16.8h.01" />
  </Base>
);

export const IconDoc = (p: IconProps) => (
  <Base {...p}>
    <path d="M13.6 3.4H7.2a1.9 1.9 0 0 0-1.9 1.9v13.4a1.9 1.9 0 0 0 1.9 1.9h9.6a1.9 1.9 0 0 0 1.9-1.9V8.2Z" />
    <path d="M13.6 3.4v4.8h5.1" />
    <path d="M8.7 13h6.6M8.7 16.4h4.4" />
  </Base>
);
