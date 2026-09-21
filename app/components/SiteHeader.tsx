"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PageMascot from "./PageMascot";
import { site, headerPageLinks } from "@/app/data/site";

function isCurrent(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  if (href === "/photos") return pathname === "/photos" || pathname === "/travel";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const home = pathname === "/";

  return (
    <header className="site-header minimal-header">
      <div className="header-identity">
        {home && <PageMascot />}
        <div className="header-content">
          <Link
            className="minimal-name"
            href="/"
            aria-label="Faiz Mustansar home"
          >
            {site.name}
          </Link>
          <nav className="header-links" aria-label="Site">
            {headerPageLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href, pathname) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
