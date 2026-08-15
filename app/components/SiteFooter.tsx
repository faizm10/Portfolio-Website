import { homepageSocials } from "@/app/data/site";
import {
  socialIcons,
  type SocialIconKey,
} from "@/app/components/SocialIcons";

/**
 * Minimal site footer: social icons only.
 */
export default function SiteFooter() {
  return (
    <footer
      className="w-full border-t bg-white py-5"
      style={{ borderColor: "var(--border)" }}
    >
      <nav
        className="mx-auto flex w-full max-w-3xl items-center justify-center gap-x-5 px-6"
        aria-label="social links"
      >
        {homepageSocials.map((item) => {
          const Icon = socialIcons[item.key as SocialIconKey];
          return (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center transition-opacity hover:opacity-70"
              style={{ color: "var(--ink)" }}
              aria-label={item.label}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </nav>
    </footer>
  );
}
