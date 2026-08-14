"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` lets Motion strip transform animations for visitors
 * who ask for reduced motion. Doing it here — rather than branching on
 * `useReducedMotion()` inside each component — keeps the server and client
 * rendering identical markup, so there is no hydration mismatch.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
