"use client";

import Link from "next/link";
import AnimatedAvatar from "./AnimatedAvatar";
import { usePathname } from "next/navigation";
import { site, homepageSocials } from "@/app/data/site";

export default function SiteHeader() {
  const home = usePathname() === "/";
  return (
    <header className="site-header minimal-header">
      <div className="header-identity">
        {home && <AnimatedAvatar />}
        <div className="header-content">
          <Link
            className="minimal-name"
            href="/"
            aria-label="Faiz Mustansar home"
          >
            {site.name}
          </Link>
          {home && (
            <nav className="header-socials" aria-label="Social links">
              {homepageSocials.map((item) => (
                <a key={item.key} href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
