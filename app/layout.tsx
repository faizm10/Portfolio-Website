import type { Metadata } from "next";
import { PT_Mono } from "next/font/google";
import CommandPalette from "./components/Cmd";
import { GoogleAnalytics } from "@next/third-parties/google";

const ptMono = PT_Mono({ weight: "400", subsets: ["latin"], variable: "--font-pt-mono" });
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

export const metadataBase = new URL("https://jame.li");

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
    canonical: "https://faizm.me",
  },
  openGraph: {
    title: "faiz mustansar",
    description:
      "portfolio of faiz mustansar— computer science at the university of guelph.",
    url: "https://faizm.me",
    siteName: "faizm.me",
    images: [{ url: "https://faizm.me/banner.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "faiz mustansar",
    description:
      "portfolio of faiz mustansar— computer science at the university of guelph.",
    images: ["https://faizm.me/banner.png"],
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
    <html lang="en" className={ptMono.variable}>
      <head>
        <link rel="canonical" href="https://faizm.me" />
      </head>
      <body className={`${ptMono.className} min-h-screen w-full bg-white text-neutral-900 antialiased`}>
        <div className="min-h-screen w-full">
          {children}
          <CommandPalette />
        </div>
        {/* <GoogleAnalytics gaId="G-T54T8RQLW5" /> */}
      </body>
    </html>
  );
}
