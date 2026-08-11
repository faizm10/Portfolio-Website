import Link from "next/link";
import { FileText, Images, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { homepageSocials, site, webringUrl } from "@/app/data/site";

const iconLinkClass =
  "inline-flex size-7 items-center justify-center rounded-sm transition-opacity hover:opacity-70";

const socialIcons = {
  x: FaXTwitter,
  github: FaGithub,
  linkedin: FaLinkedin,
} as const;

function IconLabel({ label }: { label: string }) {
  return <span className="sr-only">{label}</span>;
}

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
          <p
            className="inline-flex items-center gap-1.5 text-center sm:justify-self-start sm:text-left"
            style={{ color: "var(--ink-3)" }}
          >
            by{" "}
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70"
              style={{ color: "var(--ink-2)" }}
              aria-label={`email ${site.name}`}
              title={`email ${site.name}`}
            >
              <Mail size={14} strokeWidth={1.8} aria-hidden />
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
            className="flex flex-nowrap items-center justify-center gap-x-2 whitespace-nowrap sm:justify-end sm:justify-self-end"
            style={{ color: "var(--ink-2)" }}
            aria-label="footer"
          >
            <Link
              href="/blog"
              className={iconLinkClass}
              style={{ color: "var(--ink)" }}
              aria-label="blog"
              title="blog"
            >
              <FileText size={19} strokeWidth={1.8} aria-hidden />
              <IconLabel label="blog" />
            </Link>
            <Link
              href="/photos"
              className={iconLinkClass}
              style={{ color: "var(--ink)" }}
              aria-label="photos"
              title="photos"
            >
              <Images size={19} strokeWidth={1.8} aria-hidden />
              <IconLabel label="photos" />
            </Link>
            {homepageSocials.map((item) => {
              const Icon = socialIcons[item.key];

              return (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconLinkClass}
                  style={{ color: "var(--ink)" }}
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon size={19} aria-hidden />
                  <IconLabel label={item.label} />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
