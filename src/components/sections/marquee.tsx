import { clientTypes } from "@/lib/site";

/** Endless strip of the property types we manage. Pure CSS, zero JS. */
export function TrustMarquee() {
  return (
    <div className="relative border-y border-slate-200/80 bg-slate-50/70 py-6">
      <p className="container-x mb-5 text-center text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-400">
        Managing aquatic facilities for
      </p>
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max motion-safe:animate-marquee">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1}
            >
              {clientTypes.map((c) => (
                <li key={`${copy}-${c}`} className="flex items-center">
                  <span className="whitespace-nowrap px-7 font-display text-[1.05rem] font-bold tracking-[-0.02em] text-slate-500 md:text-[1.25rem]">
                    {c}
                  </span>
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rotate-45 bg-aqua-400/70"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
