import { Counter, Stagger, StaggerItem } from "@/components/anim";
import { Section } from "@/components/ui";

const stats = [
  {
    value: 6,
    suffix: "",
    label: "Equal monthly payments",
    detail: "Your total contract price divided evenly, March through August.",
  },
  {
    value: 4,
    suffix: "",
    label: "Certifications per guard",
    detail: "Lifeguarding, CPR, First Aid and AED — current, every one of them.",
  },
  {
    value: 2,
    suffix: "",
    label: "Off-season visits monthly",
    detail: "Documented checks through winter so spring never starts late.",
  },
  {
    value: 12,
    suffix: "",
    label: "Months under contract",
    detail: "Coverage runs until winterization is finished, not when swimming stops.",
  },
];

export function Stats() {
  return (
    <Section size="tight">
      <div className="container-x">
        <Stagger className="grid gap-px overflow-hidden rounded-3xl bg-slate-200/70 ring-1 ring-inset ring-slate-200/70 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="bg-white">
              <div className="group h-full px-7 py-9 transition-colors duration-500 hover:bg-aqua-50/50">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-[3.1rem] font-extrabold leading-none tracking-[-0.05em] text-gradient-aqua">
                    <Counter value={s.value} />
                  </span>
                  <span className="font-display text-2xl font-extrabold text-aqua-400">
                    {s.suffix}
                  </span>
                </div>
                <p className="mt-4 font-display text-[1.02rem] font-bold text-ink">
                  {s.label}
                </p>
                <p className="mt-2 text-[0.88rem] leading-[1.65] text-slate-500">
                  {s.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
