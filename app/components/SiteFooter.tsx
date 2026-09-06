import Image from "next/image";
import { homepageSocials, site, webringUrl } from "@/app/data/site";
import HandwrittenNote from "./sketch/HandwrittenNote";
import { CharacterWalk } from "./sketch/TinyCharacter";

export default function SiteFooter() {
  return (
    <footer className="site-footer minimal-footer sketch-footer">
      <CharacterWalk className="footer-walker" />
      <HandwrittenNote className="footer-goodbye" tilt="left">
        catch you later :)
      </HandwrittenNote>
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
      <span className="footer-copy">
        {homepageSocials.map((item) => (
          <a
            key={item.key}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ))}
        <span>
          © {site.name} {new Date().getFullYear()}
        </span>
      </span>
    </footer>
  );
}
