import { Hero } from "@/components/sections/hero";
import { TrustMarquee } from "@/components/sections/marquee";
import { Stats } from "@/components/sections/stats";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Seasons } from "@/components/sections/seasons";
import { PaymentPlan } from "@/components/sections/payment-plan";
import { Included } from "@/components/sections/included";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <Stats />
      <ServicesGrid limit={6} />
      <Seasons />
      <PaymentPlan />
      <Included />
      <Process />
      <Faq />
    </>
  );
}
