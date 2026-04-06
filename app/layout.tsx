import type { Metadata } from "next";
import { PT_Mono, Geist } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import CommandPalette from "./components/Cmd";
import GoogleAnalyticsRouteTracker from "./components/GoogleAnalyticsRouteTracker";
import { GoogleAnalytics } from "@next/third-parties/google";

const ptMono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pt-mono",
});
import "prismjs/themes/prism-twilight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-bash";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadataBase = new URL("https://faizm.ca");

export const metadata: Metadata = {
  title: "faiz mustansar",
  description:
    "faiz mustansar — computer science at the university of guelph. full-stack and software engineer. always building something new",
  keywords: [
    "faiz mustansar",
    "faiz mustansar uog",
    "faiz mustansar uog cs",
    "faiz mustansar university of guelph",
    "faiz mustansarportfolio",
    "uog cs portfolio",
    "uog computer science",
  ],
  alternates: {
    canonical: "https://faizm.ca",
  },
  openGraph: {
    title: "faiz mustansar",
    description:
      "portfolio of faiz mustansar— computer science at the university of guelph.",
    url: "https://faizm.ca",
    siteName: "faizm.ca",
    images: [{ url: "https://faizm.ca/banner.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "faiz mustansar",
    description:
      "portfolio of faiz mustansar— computer science at the university of guelph.",
    images: ["https://faizm.ca/banner.png"],
  },
  icons: {
    icon: "/jsl.png",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="canonical" href="https://faizm.ca" />
      </head>
      <body
        className={`${ptMono.className} min-h-screen w-full text-neutral-900 antialiased`}
      >
        <div className="min-h-screen w-full">
          {children}
          <CommandPalette />
        </div>
        {process.env.NEXT_PUBLIC_GOATCOUNTER_CODE && (
          <Script
            data-goatcounter={`https://${process.env.NEXT_PUBLIC_GOATCOUNTER_CODE}.goatcounter.com/count`}
            src="//gc.zgo.at/count.js"
            strategy="afterInteractive"
          />
        )}
        <footer className="w-full pb-6">
          <div className="mx-auto flex w-full max-w-3xl items-center gap-2 px-6 text-neutral-700">
            <a
              href="https://www.uguelph.network/#faizm.ca?nav=prev"
              aria-label="Previous site"
            >
              ←
            </a>
            <a
              href="https://www.uguelph.network/#faizm.ca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Guelph Webring"
            >
              <img
                src="https://www.uguelph.network/webAssets/gryphon.svg"
                alt="Guelph Webring"
                style={{ width: "24px", height: "auto", opacity: 0.8 }}
              />
            </a>
            <a
              href="https://www.uguelph.network/#faizm.ca?nav=next"
              aria-label="Next site"
            >
              →
            </a>
          </div>
        </footer>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
            <Suspense fallback={null}>
              <GoogleAnalyticsRouteTracker />
            </Suspense>
          </>
        ) : null}
      </body>
    </html>
  );
}
