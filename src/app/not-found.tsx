import { Button } from "@/components/ui";
import { Caustics, WaterSurface } from "@/components/water";
import { LogoMark } from "@/components/logo";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden pt-32">
      <Caustics />
      <div className="container-x relative text-center">
        <LogoMark className="mx-auto h-16 w-16" />
        <p className="mt-8 font-display text-[6rem] font-extrabold leading-none tracking-[-0.06em] text-gradient-aqua">
          404
        </p>
        <h1 className="mt-4 text-[clamp(1.6rem,3.4vw,2.4rem)] font-extrabold text-ink">
          This page went in the deep end.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[1rem] leading-relaxed text-slate-600">
          The page you were looking for doesn&apos;t exist. Let&apos;s get you
          back to dry land.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/" size="lg" withArrow>
            Back to home
          </Button>
          <Button href="/contact" size="lg" variant="outline">
            Contact us
          </Button>
        </div>
      </div>
      <WaterSurface />
    </section>
  );
}
