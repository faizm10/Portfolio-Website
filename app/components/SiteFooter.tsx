import Image from "next/image";
import { site, webringUrl } from "@/app/data/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer minimal-footer">
      <span>
        © {site.name} {new Date().getFullYear()}
      </span>
      <nav aria-label="University of Guelph webring">
        <a href={webringUrl("prev")} aria-label="Previous Guelph webring site">
          ←
        </a>
        <a
          href={webringUrl()}
          className="webring-logo-link"
          aria-label="Guelph webring"
        >
          <Image src="/gryphon.svg" alt="" width={24} height={30} unoptimized />
        </a>
        <a href={webringUrl("next")} aria-label="Next Guelph webring site">
          →
        </a>
      </nav>
    </footer>
  );
}
