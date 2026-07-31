import type { Metadata } from "next";
import { Newsreader, Inter, Pacifico } from "next/font/google";
import CommandPalette from "./components/Cmd";
import { site, siteHostname, webringUrl } from "@/app/data/site";

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
        {/* Keep the site on the parchment theme and clear legacy theme choices. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-theme','parchment');try{localStorage.removeItem('portfolio-theme');}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen w-full text-[#201a10] antialiased`}
        suppressHydrationWarning
      >
        <div className="min-h-screen w-full">
          {children}
          <CommandPalette />
        </div>
        <footer className="w-full pb-6">
          <div className="mx-auto flex w-full max-w-3xl items-center gap-2 px-6 text-[#8a8270]">
            <a href={webringUrl("prev")} aria-label="Previous site">
              ←
            </a>
            <a
              href={webringUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Guelph Webring"
            >
              <img
                src={site.webring.gryphonSvg}
                alt="Guelph Webring"
                style={{ width: "24px", height: "auto", opacity: 0.8 }}
              />
            </a>
            <a href={webringUrl("next")} aria-label="Next site">
              →
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
