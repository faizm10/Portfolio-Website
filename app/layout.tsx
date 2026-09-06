import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import CommandPalette from "./components/Cmd";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import CursorFriend from "./components/sketch/CursorFriend";
import { site, siteHostname } from "@/app/data/site";
import "./globals.css";
import "./redesign.css";
import "./minimal.css";
import "./writing.css";
import "./sketch.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
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
      className={cn(inter.variable, caveat.variable)}
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} min-h-screen w-full antialiased`}
        suppressHydrationWarning
      >
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <div className="site-content">
          {children}
          <CommandPalette />
        </div>
        <SiteFooter />
        <CursorFriend />
      </body>
    </html>
  );
}
