import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes so a caller's override always wins over a
 * component's base class. Without this, a base `inline-flex` beats a
 * caller's `hidden` (Tailwind emits both, and stylesheet order decides) —
 * which is exactly how the mobile header CTA stayed visible and pushed the
 * menu button off screen.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(" "));
}
