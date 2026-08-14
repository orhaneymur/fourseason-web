"use client";

import { useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/components/anim";
import { Button } from "@/components/ui";
import { IconCheck, IconDoc, IconMail } from "@/components/icons";
import { site } from "@/lib/site";

const PROPERTY_TYPES = [
  "Homeowner Association",
  "Apartment Community",
  "Condominium",
  "Hotel / Resort",
  "Country Club",
  "Municipal Aquatic Center",
  "Fitness / Wellness Club",
  "Campground / RV Resort",
  "Other",
];

type Fields = {
  name: string;
  company: string;
  property: string;
  email: string;
  phone: string;
  type: string;
  pools: string;
  seasonStart: string;
  seasonEnd: string;
  guards: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  company: "",
  property: "",
  email: "",
  phone: "",
  type: PROPERTY_TYPES[0],
  pools: "1",
  seasonStart: "",
  seasonEnd: "",
  guards: "",
  message: "",
};

export function ContactForm() {
  const [f, setF] = useState<Fields>(EMPTY);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) =>
    setF((prev) => ({ ...prev, [key]: value }));

  const body = useMemo(
    () =>
      [
        "COMMERCIAL POOL MANAGEMENT — PROPOSAL REQUEST",
        "",
        `Contact name:      ${f.name}`,
        `Company / board:   ${f.company || "—"}`,
        `Property name:     ${f.property}`,
        `Property type:     ${f.type}`,
        `Email:             ${f.email}`,
        `Phone:             ${f.phone || "—"}`,
        "",
        `Number of pools:   ${f.pools || "—"}`,
        `Season start:      ${f.seasonStart || "—"}`,
        `Season end:        ${f.seasonEnd || "—"}`,
        `Lifeguards needed: ${f.guards || "—"}`,
        "",
        "Notes:",
        f.message || "—",
        "",
        `— Sent from ${site.url}`,
      ].join("\n"),
    [f],
  );

  const subject = `Proposal request — ${f.property || "Commercial pool"}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[1.85rem] bg-white ring-1 ring-inset ring-slate-200/80 card-shadow-lg">
      <div className="flex items-center gap-3 border-b border-slate-100 bg-gradient-to-r from-aqua-50/70 to-white px-7 py-5 md:px-9">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-aqua-600 ring-1 ring-inset ring-aqua-100">
          <IconDoc className="h-[1.15rem] w-[1.15rem]" />
        </span>
        <div>
          <p className="font-display text-[0.98rem] font-bold text-ink">
            Proposal Request
          </p>
          <p className="text-[0.74rem] text-slate-500">
            Takes about two minutes
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="px-7 py-16 text-center md:px-9"
          >
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-aqua-50 text-aqua-600 ring-1 ring-inset ring-aqua-100">
              <IconCheck className="h-8 w-8" strokeWidth={2.2} />
            </span>
            <h3 className="mt-6 font-display text-[1.4rem] font-extrabold text-ink">
              Your email is ready to send
            </h3>
            <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-[1.7] text-slate-600">
              We opened a pre-filled message in your mail app addressed to{" "}
              <span className="font-semibold text-ink">{site.email}</span>. Hit
              send and we&apos;ll get back to you within one business day.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button type="button" onClick={copy} variant="outline">
                {copied ? "Copied to clipboard" : "Copy the details instead"}
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setSent(false);
                  setF(EMPTY);
                }}
                variant="ghost"
              >
                Start over
              </Button>
            </div>

            <p className="mt-8 text-[0.8rem] text-slate-500">
              Nothing happened? Email us directly at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-aqua-700 underline underline-offset-4"
              >
                {site.email}
              </a>
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-6 px-7 py-8 md:px-9 md:py-9"
          >
            <Fieldset legend="About you">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Your name"
                  required
                  value={f.name}
                  onChange={(v) => set("name", v)}
                  placeholder="Jordan Reyes"
                  autoComplete="name"
                />
                <Field
                  label="Company or board"
                  value={f.company}
                  onChange={(v) => set("company", v)}
                  placeholder="Lakeside Management Group"
                  autoComplete="organization"
                />
                <Field
                  label="Email"
                  type="email"
                  required
                  value={f.email}
                  onChange={(v) => set("email", v)}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
                <Field
                  label="Phone"
                  type="tel"
                  value={f.phone}
                  onChange={(v) => set("phone", v)}
                  placeholder="(555) 012-3456"
                  autoComplete="tel"
                />
              </div>
            </Fieldset>

            <Fieldset legend="About the property">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Property name"
                  required
                  value={f.property}
                  onChange={(v) => set("property", v)}
                  placeholder="Willow Creek Community"
                />
                <SelectField
                  label="Property type"
                  value={f.type}
                  onChange={(v) => set("type", v)}
                  options={PROPERTY_TYPES}
                />
                <Field
                  label="Number of pools"
                  type="number"
                  min="1"
                  value={f.pools}
                  onChange={(v) => set("pools", v)}
                />
                <Field
                  label="Lifeguards needed"
                  value={f.guards}
                  onChange={(v) => set("guards", v)}
                  placeholder="e.g. 4 on weekends, 2 weekdays"
                />
                <Field
                  label="Season start"
                  type="date"
                  value={f.seasonStart}
                  onChange={(v) => set("seasonStart", v)}
                />
                <Field
                  label="Season end"
                  type="date"
                  value={f.seasonEnd}
                  onChange={(v) => set("seasonEnd", v)}
                />
              </div>
            </Fieldset>

            <Fieldset legend="Anything else">
              <label className="block">
                <span className="text-[0.82rem] font-semibold text-slate-700">
                  Notes
                </span>
                <textarea
                  rows={4}
                  value={f.message}
                  onChange={(e) => set("message", e.target.value)}
                  placeholder="Equipment concerns, past inspection issues, board timelines, anything we should know."
                  className="mt-2 w-full resize-y rounded-2xl border-0 bg-slate-50 px-4 py-3.5 text-[0.94rem] text-ink ring-1 ring-inset ring-slate-200 transition-shadow duration-300 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-aqua-500"
                />
              </label>
            </Fieldset>

            <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-start gap-2 text-[0.78rem] leading-relaxed text-slate-500">
                <IconMail className="mt-[2px] h-4 w-4 shrink-0 text-slate-400" />
                Opens a pre-filled email to {site.email}. Nothing is stored on
                this site.
              </p>
              <Button type="submit" size="lg" withArrow className="shrink-0">
                Send request
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function Fieldset({
  legend,
  children,
}: {
  legend: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="mb-3.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-aqua-700">
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

const inputCls =
  "mt-2 w-full rounded-2xl border-0 bg-slate-50 px-4 py-3.5 text-[0.94rem] text-ink ring-1 ring-inset ring-slate-200 transition-shadow duration-300 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-aqua-500";

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
  autoComplete,
  min,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  min?: string;
}) {
  return (
    <label className="block">
      <span className="text-[0.82rem] font-semibold text-slate-700">
        {label}
        {required && <span className="ml-1 text-aqua-600">*</span>}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        className={inputCls}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-[0.82rem] font-semibold text-slate-700">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputCls} appearance-none bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        }}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
