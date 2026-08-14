# Four Seasons Pool — Marketing Website

A custom-designed, motion-driven marketing site for **Four Seasons Pool Management**,
a commercial pool management company operating in the United States.

Built with **Next.js 16 (App Router + Turbopack)**, **React 19**, **Tailwind CSS v4**
and **Motion** (Framer Motion v12). Every page is statically prerendered.

---

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

---

## Where to change things

### Company details — `src/lib/site.ts`

**This is the only file you need to touch for content changes.** Phone number,
email, brand name, services, FAQ, seasons, pricing lines, navigation — all of it
lives here and flows to every page, the footer and the structured data.

| What | Where in `site.ts` |
| --- | --- |
| Brand name, phone, email, hours | `site` |
| The 8 service cards + detail blocks | `services` |
| The Spring/Summer/Fall/Winter section | `seasons` |
| "What's in the contract" checklist | `included` |
| $35 / $55 add-on lifeguard rates | `addOnRates` |
| Property types in the scrolling strip | `clientTypes` |
| 4-step process | `processSteps` |
| FAQ accordion | `faqs` |
| Header/footer navigation | `nav` |

### Things to update before going live

1. **`site.url`** — currently `https://fourseasonspool.com`. Used for canonical
   URLs, the sitemap and Open Graph tags.
2. **`site.serviceArea`** — currently a generic "across the United States".
   Replace with your actual states/metros; it also feeds the schema.org markup.
3. **`site.hours`** — placeholder office hours. Adjust to reality.
4. **Street address** — not included anywhere yet (marked `TODO(owner)` in
   `site.ts`). Add it to `site` and to the `jsonLd` block in
   `src/app/layout.tsx` for local SEO.
5. **Brand spelling** — the site uses **"Four Seasons Pool"** (matching the
   *Four Seasons Pool Management* name on the specification document). For the
   singular *Four Season Pool*, change `site.name` / `site.legalName` plus the
   two wordmarks in `src/components/logo.tsx` and `src/components/site-footer.tsx`.
6. **Testimonials** — deliberately not included, because inventing client quotes
   for a real business is misleading. Once you have real ones, the FAQ section in
   `src/components/sections/faq.tsx` is the easiest pattern to copy.

### Design tokens — `src/app/globals.css`

The palette, fonts, shadows, textures and keyframes are all defined at the top
of the file:

```
white  #FFFFFF   cyan  #06B6D4   slate  #0F172A   sky  #E0F2FE
```

`--color-aqua-50 … --color-aqua-900` is the brand ramp. Change `--color-aqua-500`
and `--color-aqua-600` and the whole site re-tints.

### Logo

Hand-drawn SVG, no image files. Four arc segments (one per season) enclosing a
pool of water with a continuously drifting wave.

- On-page mark and wordmark: `src/components/logo.tsx`
- Browser favicon: `src/app/icon.svg`
- Social share card: `src/app/opengraph-image.tsx` (generated at build time)

If a designed logo arrives later, drop it in `public/` and swap the `<svg>` in
`logo.tsx` for a `next/image`.

---

## The contact form

`src/components/contact-form.tsx` collects property details and opens a
**pre-filled email** to `site.email` via `mailto:`, with a copy-to-clipboard
fallback. Nothing is stored and there is no server, which keeps the site fully
static and free to host.

**To send server-side instead**, add a mail provider (Resend, Postmark,
SendGrid) and replace `handleSubmit` with a Server Action. The form state is
already structured for it — `body` is the fully formatted message.

---

## Structure

```
src/
  app/
    layout.tsx            root layout, fonts, metadata, JSON-LD
    page.tsx              home
    services/page.tsx     8 detailed service blocks + who we serve
    about/page.tsx        approach, values, records, certification standard
    contact/page.tsx      contact rail + proposal form + FAQ
    not-found.tsx         404
    icon.svg              favicon
    opengraph-image.tsx   1200x630 social card
    sitemap.ts robots.ts  SEO
    globals.css           design tokens
  components/
    anim.tsx              motion primitives (Reveal, Stagger, WordReveal,
                          Counter, Magnetic, SpotlightCard, Parallax)
    water.tsx             animated waves, caustics, bubbles, dividers
    ui.tsx                Button, Section, SectionHeading, Eyebrow, Card
    icons.tsx             custom stroke icon set
    logo.tsx  site-header.tsx  site-footer.tsx
    scroll-progress.tsx   top reading-progress bar
    page-hero.tsx         shared inner-page hero
    contact-form.tsx
    sections/             home page sections
  lib/
    site.ts               <- all content
```

---

## Mobile

The layout is verified with a headless-Chrome audit at 375 / 390 / 412 / 768 px
on every page. It checks three things: that `document.scrollWidth` never exceeds
the viewport (no sideways scroll), that no text overflows its own box, and that
every link and button is at least a 44 px touch target.

Two conventions keep it that way:

1. **Always merge classes with `cn()`** (`src/lib/cn.ts`) in any component that
   accepts a `className`. Tailwind decides conflicts by stylesheet order, not by
   the order you write them, so a component's base `inline-flex` will silently
   beat a caller's `hidden`. That is exactly how the header CTA stayed visible on
   phones and pushed the menu button off screen.
2. **Never branch rendered output on `useReducedMotion()`.** It can only read the
   media query on the client, so branching makes the server and client render
   different markup and React throws a hydration error. Reduced motion is handled
   once, centrally, by `<MotionConfig reducedMotion="user">` in
   `src/components/providers.tsx`.

Also relevant: `<html>` and `<body>` both carry `overflow-x: clip` so the few
pixels a scroll-reveal starts off-axis can never widen the page, and `container-x`
pads with `max(gutter, env(safe-area-inset-*))` so content clears the notch in
landscape.

---

## Motion inventory

| Effect | Where |
| --- | --- |
| Word-by-word headline assembly | all page heroes |
| Layered parallax water surface (3 wave tracks, different speeds) | hero, 404 |
| Drifting light caustics + rising bubbles | hero, page heroes |
| Scroll-linked season dial that recolours the whole section | home, *Four Seasons* |
| Cursor-following spotlight + lift on cards | service cards |
| Magnetic buttons | hero CTAs |
| Count-up statistics | stats band, about page |
| Interactive payment-schedule calculator | home, *Six equal payments* |
| Animated line-draw connector | how it works |
| Height-animated accordion | FAQ |
| Shared-element nav pill (`layoutId`) | header |
| Reading-progress bar | site-wide |
| Slide-in mobile drawer with staggered links | header |
| Endless property-type marquee | below hero |

All of it respects `prefers-reduced-motion` — animations collapse to simple
fades, or stop entirely, when the visitor has reduced motion enabled.

---

## Deploying

The site builds to fully static output, so any host works. Easiest:

```bash
npx vercel        # or push to GitHub and import at vercel.com
```

Set the production domain in `site.url` first so the sitemap and OG tags point
at the right host.
"# fourseason-web" 
