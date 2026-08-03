import Link from "next/link";
import { homepageSocials, site, webringUrl } from "@/app/data/site";

const linkClass =
  "underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70";

/**
 * Minimal site footer: blog · socials · by me (+ webring).
 */
export default function SiteFooter() {
  return (
    <footer
      className="w-full border-t bg-white py-5"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto w-full max-w-3xl px-6 text-[13px] lowercase sm:text-[14px]">
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-3 sm:grid-cols-3">
          <p className="text-center sm:text-left" style={{ color: "var(--ink-3)" }}>
            by{" "}
            <a
              href={`mailto:${site.email}`}
              className={linkClass}
              style={{ color: "var(--ink-2)" }}
            >
              {site.name}
            </a>
          </p>

          <div
            className="flex items-center gap-2 justify-self-center"
            style={{ color: "var(--ink-3)" }}
          >
            <a href={webringUrl("prev")} aria-label="Previous webring site">
              ←
            </a>
            <a
              href={webringUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Guelph Webring"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.webring.gryphonSvg}
                alt=""
                width={20}
                height={20}
                className="opacity-70"
              />
            </a>
            <a href={webringUrl("next")} aria-label="Next webring site">
              →
            </a>
          </div>

          <nav
            className="flex flex-nowrap items-center justify-center gap-x-3 whitespace-nowrap sm:justify-end sm:justify-self-end"
            style={{ color: "var(--ink-2)" }}
            aria-label="footer"
          >
            <Link href="/blog" className={linkClass} style={{ color: "var(--ink)" }}>
              blog
            </Link>
            {homepageSocials.map((item) => (
              <span key={item.key} className="inline-flex items-center gap-x-3">
                <span aria-hidden style={{ color: "var(--ink-3)" }}>
                  ·
                </span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                  style={{ color: "var(--ink)" }}
                >
                  {item.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
