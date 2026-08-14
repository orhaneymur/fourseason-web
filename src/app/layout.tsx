import type { Metadata, Viewport } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { Providers } from "@/components/providers";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.legalName,
  keywords: [
    "commercial pool management",
    "lifeguard staffing",
    "pool opening and closing",
    "pool winterization",
    "HOA pool management",
    "aquatic facility management",
    "health department pool compliance",
    "commercial pool service",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.legalName,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#06b6d4",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  // Lets the layout paint under the notch; `container-x` re-adds safe-area padding.
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  alternateName: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone.display,
  email: site.email,
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Commercial pool management and lifeguard staffing",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <ScrollProgress />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
