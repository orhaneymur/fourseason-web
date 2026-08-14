/**
 * Single source of truth for every piece of company data on the site.
 * Change it here and it updates everywhere (header, footer, JSON-LD, contact page).
 */

export const site = {
  name: "Four Seasons Pool",
  legalName: "Four Seasons Pool Management",
  tagline: "Commercial Pool Management",
  url: "https://fourseasonspool.com",
  description:
    "Full-season commercial pool management for HOAs, apartment communities, hotels and clubs. Certified lifeguard staffing, water chemistry, health department compliance, opening and winterization — one contract, one accountable partner.",
  phone: {
    display: "+90 530 257 53 60",
    href: "tel:+905302575360",
  },
  email: "orhaneymur@gmail.com",
  // TODO(owner): replace with your street address once finalized.
  serviceArea: "Serving commercial properties across the United States",
  hours: [
    { label: "Office", value: "Mon – Fri · 8:00 AM – 6:00 PM" },
    { label: "In-Season Coverage", value: "7 days a week, on site" },
    { label: "Emergency Line", value: "24/7 for contracted properties" },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */

export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  icon:
    | "shield"
    | "guard"
    | "flask"
    | "snowflake"
    | "clipboard"
    | "wrench"
    | "graduation"
    | "calendar";
};

export const services: Service[] = [
  {
    slug: "full-season-management",
    title: "Full-Season Pool Management",
    summary:
      "One contract that covers your aquatic facility from opening day through winterization — staffing, chemistry, compliance and reporting included.",
    points: [
      "Pool opening and closing included in every agreement",
      "Season start and end dates fixed in writing",
      "Regular-season and school-season schedules managed separately",
      "Holiday and closed-day calendar built into the contract",
    ],
    icon: "shield",
  },
  {
    slug: "lifeguard-staffing",
    title: "Certified Lifeguard Staffing",
    summary:
      "Every guard on your deck holds current Lifeguarding, CPR, First Aid and AED certification through Ellis & Associates or the American Red Cross.",
    points: [
      "Daily, weekly and seasonal staffing hours defined up front",
      "Additional hours at $35/hr with 48+ hours notice",
      "Additional hours at $55/hr with less than 48 hours notice",
      "Random safety audits and documented in-service training",
    ],
    icon: "guard",
  },
  {
    slug: "water-chemistry",
    title: "Water Chemistry & Chemicals",
    summary:
      "Disinfectant and pH chemicals are included. We log, test and correct so your water stays inside code every single day of the season.",
    points: [
      "Chemicals for disinfectant and pH compliance included",
      "Test kit restock included — no surprise invoices",
      "Documented readings for health department review",
      "Corrective action before a reading becomes a closure",
    ],
    icon: "flask",
  },
  {
    slug: "opening-closing",
    title: "Opening, Closing & Winterization",
    summary:
      "Spring startup and fall shutdown are part of the agreement, not a change order. Your contract expires only after winterization is complete.",
    points: [
      "Full spring startup: circulation, filtration, balancing",
      "Fall shutdown with documented winterization",
      "Equipment condition report at both ends of the season",
      "Coverage does not lapse until the pool is closed properly",
    ],
    icon: "snowflake",
  },
  {
    slug: "health-department-compliance",
    title: "Health Department Compliance",
    summary:
      "We attend your inspections. You get a partner in the room who knows the file, the readings and the corrective history.",
    points: [
      "Attendance at scheduled health department inspections",
      "Inspection history retained per property",
      "First aid kit restock included",
      "Minimum documented safety inspections each week",
    ],
    icon: "clipboard",
  },
  {
    slug: "off-season-service",
    title: "Off-Season Service Visits",
    summary:
      "Two service visits per month through the off-season keep small problems from becoming a delayed opening next spring.",
    points: [
      "Two off-season service visits every month",
      "Winter cover, equipment and structure checks",
      "Early flagging of repairs that need lead time",
      "A pool that is ready on day one, not week three",
    ],
    icon: "calendar",
  },
  {
    slug: "equipment-service",
    title: "Equipment Service & Repairs",
    summary:
      "Pumps, filters, heaters, chemical feeders and controllers — inspected on a schedule and repaired before they take the pool offline.",
    points: [
      "Scheduled inspection of all mechanical systems",
      "Equipment notes retained per property, season over season",
      "Repair proposals with clear scope and pricing",
      "Priority response for contracted facilities",
    ],
    icon: "wrench",
  },
  {
    slug: "safety-training",
    title: "Safety Training & In-Service",
    summary:
      "Certification is the floor, not the ceiling. Ongoing in-service training keeps response times sharp all season long.",
    points: [
      "Documented in-service training throughout the season",
      "Unannounced skill audits on deck",
      "Emergency action plan drilled with your staff",
      "Every guard certified in Lifeguarding, CPR, First Aid and AED",
    ],
    icon: "graduation",
  },
];

/* -------------------------------------------------------------------------- */
/* The four seasons of a managed pool — the signature section                 */
/* -------------------------------------------------------------------------- */

export type SeasonPhase = {
  season: string;
  window: string;
  title: string;
  body: string;
  items: string[];
  accent: string; // hex, used for the scroll-linked accent
};

export const seasons: SeasonPhase[] = [
  {
    season: "Spring",
    window: "March – May",
    title: "Opening",
    body: "Winter covers come off, systems come online, and the paperwork that governs your season gets filed before the first swimmer arrives.",
    items: [
      "Full pool opening and startup",
      "Circulation, filtration and heater commissioning",
      "Initial chemical balance and baseline readings",
      "Permits, certificates and staffing plan finalized",
    ],
    accent: "#22c55e",
  },
  {
    season: "Summer",
    window: "May – September",
    title: "Staffed Operation",
    body: "The season you actually see: certified guards on deck, water inside code, inspections attended, and a schedule that matches how your property really uses the pool.",
    items: [
      "Certified lifeguards on the posted schedule",
      "Daily chemistry testing and correction",
      "Health department inspections attended",
      "Weekly safety inspections and in-service training",
    ],
    accent: "#06b6d4",
  },
  {
    season: "Fall",
    window: "September – November",
    title: "Closing & Winterization",
    body: "A proper shutdown is the cheapest repair you will ever buy. We document the condition of every system on the way out.",
    items: [
      "Full drain-down and line blowout as required",
      "Winter chemical treatment and cover installation",
      "End-of-season equipment condition report",
      "Contract completes only after winterization",
    ],
    accent: "#f59e0b",
  },
  {
    season: "Winter",
    window: "November – March",
    title: "Off-Season Care",
    body: "Two visits a month through the quiet months. Water levels, covers and equipment get eyes on them long before anyone thinks about opening day.",
    items: [
      "Two documented service visits per month",
      "Cover, water level and structure monitoring",
      "Repair scoping with time to plan and budget",
      "Next-season proposal prepared early",
    ],
    accent: "#38bdf8",
  },
];

/* -------------------------------------------------------------------------- */
/* Everything included in a standard agreement                                */
/* -------------------------------------------------------------------------- */

export const included: string[] = [
  "Test kit restock included",
  "First aid kit restock included",
  "Pool opening and closing included",
  "Two off-season service visits per month",
  "Chemicals for disinfectant and pH compliance",
  "Attendance at health department inspections",
  "Random safety inspections on deck",
  "Documented in-service training",
  "Minimum weekly tree and grounds inspections",
  "All guards certified in Lifeguarding, CPR, First Aid and AED",
  "Contract remains active through winterization",
  "Season schedule, closed days and holidays in writing",
];

export const addOnRates = [
  {
    label: "Additional lifeguard hours",
    condition: "48+ hours notice",
    rate: "$35",
    unit: "/ hr",
  },
  {
    label: "Additional lifeguard hours",
    condition: "Less than 48 hours notice",
    rate: "$55",
    unit: "/ hr",
  },
];

/* -------------------------------------------------------------------------- */
/* Who we serve                                                               */
/* -------------------------------------------------------------------------- */

export const clientTypes = [
  "Homeowner Associations",
  "Apartment Communities",
  "Condominium Boards",
  "Hotels & Resorts",
  "Country Clubs",
  "Municipal Aquatic Centers",
  "Fitness & Wellness Clubs",
  "Campgrounds & RV Resorts",
  "Property Management Groups",
  "Corporate Campuses",
];

/* -------------------------------------------------------------------------- */
/* Process                                                                    */
/* -------------------------------------------------------------------------- */

export const processSteps = [
  {
    step: "01",
    title: "Site Assessment",
    body: "We walk the facility, review your bather load, equipment, deck layout and last season's inspection history.",
  },
  {
    step: "02",
    title: "Custom Proposal",
    body: "You receive a written agreement with your exact schedule, staffing hours, inclusions and a single contract price.",
  },
  {
    step: "03",
    title: "Contract & Scheduling",
    body: "Sign electronically. The total is divided into six equal monthly payments, March through August, with no balloon at the end.",
  },
  {
    step: "04",
    title: "Season Launch",
    body: "We open the pool, staff the deck and run the season. You get one point of contact and documentation you can hand to an inspector.",
  },
];

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export const faqs = [
  {
    q: "What exactly does a full-season management contract cover?",
    a: "Opening, staffed operation, chemicals for disinfectant and pH compliance, test kit and first aid restock, weekly safety inspections, in-service training, attendance at health department inspections, closing and winterization, plus two service visits per month through the off-season. Your schedule, staffing hours and closed days are all fixed in the written agreement.",
  },
  {
    q: "How does billing work?",
    a: "Your total contract price is divided into six equal monthly payments from March through August. There is no lump sum at signing and no balloon payment at the end of the season. Every invoice shows the monthly amount, the remaining balance and the percentage paid to date.",
  },
  {
    q: "Are your lifeguards certified?",
    a: "Every lifeguard we place holds current certification in Lifeguarding, CPR, First Aid and AED through Ellis & Associates or the American Red Cross. We also run documented in-service training and unannounced skill audits throughout the season.",
  },
  {
    q: "What if we need extra guard hours for an event?",
    a: "Additional lifeguard hours are $35 per hour when requested with at least 48 hours notice, and $55 per hour with less than 48 hours notice. Both rates are stated in your contract so there is never a pricing conversation mid-season.",
  },
  {
    q: "Do you handle health department inspections?",
    a: "Yes. We attend scheduled health department inspections with you and maintain the chemical logs, inspection history and corrective records for your property so the file is complete when an inspector asks for it.",
  },
  {
    q: "When does the contract actually end?",
    a: "The agreement remains in force until winterization is complete. Closing the pool properly is part of the contract, not a separate change order, so coverage does not lapse the moment the season schedule ends.",
  },
  {
    q: "What happens during the off-season?",
    a: "We perform two documented service visits per month. Covers, water level, structure and equipment get checked, and anything that needs repair is scoped early enough that you can budget for it before spring.",
  },
  {
    q: "Can you manage more than one property for us?",
    a: "Yes. Property management groups with multiple sites get a consolidated schedule, a single point of contact and per-property documentation including equipment notes, inspection history and insurance certificates.",
  },
];

/* -------------------------------------------------------------------------- */
/* Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
