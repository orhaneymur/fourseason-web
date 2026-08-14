"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui";
import { IconClose, IconMenu, IconPhone } from "@/components/icons";
import { EASE } from "@/components/anim";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // Lock the page behind the drawer while it is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-xl shadow-[0_10px_36px_-24px_rgba(15,23,42,0.5)]"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <div className="container-x flex h-[4.2rem] items-center justify-between gap-3 sm:h-[4.6rem] sm:gap-6 md:h-[5.1rem]">
            <Link
              href="/"
              aria-label={`${site.name} — home`}
              className="min-w-0 shrink"
            >
              <Logo compact={scrolled} />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-[0.92rem] font-semibold transition-colors duration-300 ${
                      active ? "text-aqua-700" : "text-slate-600 hover:text-ink"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-aqua-50 ring-1 ring-inset ring-aqua-200/70"
                        transition={{ duration: 0.5, ease: EASE }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
              {/* Phone: text on desktop, icon-only tap target on small screens */}
              <a
                href={site.phone.href}
                aria-label={`Call ${site.phone.display}`}
                className="hidden h-11 w-11 items-center justify-center rounded-full text-slate-700 ring-1 ring-inset ring-slate-200 bg-white transition-colors hover:text-aqua-700 sm:inline-flex md:h-auto md:w-auto md:gap-2 md:px-3.5 md:py-2 md:ring-0 md:bg-transparent"
              >
                <IconPhone className="h-[1.05rem] w-[1.05rem]" />
                <span className="hidden text-[0.9rem] font-semibold md:inline">
                  {site.phone.display}
                </span>
              </a>
              <Button
                href="/contact"
                size="sm"
                className="hidden md:inline-flex"
                withArrow
              >
                Request a Proposal
              </Button>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-slate-200 bg-white text-ink transition-colors hover:bg-slate-50 lg:hidden"
              >
                <IconMenu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.div
              className="absolute inset-0 bg-ink/45 backdrop-blur-sm"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              transition={{ duration: 0.35 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute inset-y-0 right-0 flex w-[min(23rem,88vw)] flex-col bg-white shadow-2xl"
              variants={{
                hidden: { x: "100%" },
                show: { x: 0 },
              }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                <Logo compact />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-inset ring-slate-200 text-ink"
                >
                  <IconClose className="h-5 w-5" />
                </button>
              </div>

              <nav
                className="flex flex-1 flex-col gap-1 px-4 py-6"
                aria-label="Mobile"
                onClick={() => setOpen(false)}
              >
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 26 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.07, duration: 0.5, ease: EASE }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-2xl px-4 py-3.5 font-display text-[1.35rem] font-bold text-ink transition-colors hover:bg-aqua-50 hover:text-aqua-700"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div
                className="space-y-3 border-t border-slate-100 px-6 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
                onClick={() => setOpen(false)}
              >
                <Button href="/contact" className="w-full" withArrow>
                  Request a Proposal
                </Button>
                <a
                  href={site.phone.href}
                  className="flex items-center justify-center gap-2 rounded-full py-3 text-[0.95rem] font-semibold text-slate-700 ring-1 ring-inset ring-slate-200"
                >
                  <IconPhone className="h-4 w-4" />
                  {site.phone.display}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
