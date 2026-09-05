"use client";

import Link from "next/link";
import AnimatedAvatar from "./AnimatedAvatar";
import { usePathname } from "next/navigation";
import { site } from "@/app/data/site";

export default function SiteHeader() {
  const home = usePathname() === "/";
  return (
    <header className="site-header minimal-header">
      <div className="header-identity">
        {home && <AnimatedAvatar />}
        <Link
          className="minimal-name"
          href="/"
          aria-label="Faiz Mustansar home"
        >
          {site.name}
        </Link>
      </div>
    </header>
  );
}
