import { ShellSection } from "@/components/ui/shell"
import { siteConfig } from "@/config/site"
import Link from "next/link"

export function ContactMe() {
  return (
    <ShellSection index={5} title="Connect">
      <div className="prose prose-zinc dark:prose-invert text-[15px]">
        <p>
          If you're looking to connect for a project, feel free to reach out via{" "}
          <CustomLink href="mailto:faizmustansar10@gmail.com?subject=Hi%2C%20Faiz!">
            Email
          </CustomLink>
          . You can also follow me on{" "}
          <CustomLink href="https://github.com/faizm10">
            Github
          </CustomLink>{" "}.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <CustomLink href={siteConfig.links.github}>GitHub</CustomLink>
          <span>•</span>
          <CustomLink href={siteConfig.links.twitter}>Twitter</CustomLink>
          <span>•</span>
          <CustomLink href={siteConfig.url}>Site</CustomLink>
        </div>
      </div>
    </ShellSection>
  )
}

interface CustomLinkProps {
  href: string
  children: React.ReactNode
}

export function CustomLink({ href, children }: CustomLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="prose prose-zinc dark:prose-invert underline-offset-4 text-[15px]  border-b border-dashed border-neutral-700 no-underline pb-[1.4px] hover:border-solid "
    >
      {children}
    </Link>
  )
}
