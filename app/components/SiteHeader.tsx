"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScribbleUnderline from "./sketch/ScribbleUnderline";
import { site } from "@/app/data/site";

const links = [
  { href: "/blog", label: "thoughts" },
  { href: "/photos", label: "photos" },
  { href: "/travel", label: "travel" },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header minimal-header sketch-header${compact ? " is-compact" : ""}`}
    >
      <div className="header-identity">
        <Link
          className="minimal-name sketch-wordmark"
          href="/"
          aria-label="Faiz Mustansar home"
        >
          {site.name}
        </Link>
        <nav className="sketch-nav" aria-label="Primary">
          {links.map((link) => {
            const current = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                aria-current={current ? "page" : undefined}
              >
                {link.label}
                <ScribbleUnderline />
              </Link>
            );
          })}
        </nav>
        <div className="header-actions">
          <Link href="/resume" className="sketch-cta">
            résumé
          </Link>
        </div>
      </div>
    </header>
  );
}
