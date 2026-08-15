import type { Metadata } from "next";
import { Newsreader, Inter, Pacifico } from "next/font/google";
import CommandPalette from "./components/Cmd";
import LoadingGate from "./components/LoadingGate";
import SiteFooter from "./components/SiteFooter";
import { site, siteHostname } from "@/app/data/site";

const newsreader = Newsreader({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature",
});

const ogImageUrl = `${site.url}${site.ogImage}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.metadata.title,
  description: site.metadata.description,
  keywords: [...site.metadata.keywords],
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: site.metadata.title,
    description: site.metadata.ogDescription,
    url: site.url,
    siteName: siteHostname(),
    images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.metadata.title,
    description: site.metadata.ogDescription,
    images: [ogImageUrl],
  },
  icons: {
    icon: site.brandIcon,
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
    <html
      lang="en"
      className={cn(newsreader.variable, inter.variable, pacifico.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href={site.url} />
      </head>
      <body
        className={`${inter.className} min-h-screen w-full bg-white text-neutral-900 antialiased`}
        suppressHydrationWarning
      >
        <LoadingGate>
          <div className="min-h-screen w-full bg-white">
            {children}
            <CommandPalette />
          </div>
          <SiteFooter />
        </LoadingGate>
      </body>
    </html>
  );
}
