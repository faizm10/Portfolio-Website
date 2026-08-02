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
      className="w-full border-t bg-white py-8"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 px-6 text-center text-[13px] lowercase sm:text-[14px]">
        <nav
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
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

        <p style={{ color: "var(--ink-3)" }}>
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
          className="mt-1 flex items-center gap-2"
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
      </div>
    </footer>
  );
}
