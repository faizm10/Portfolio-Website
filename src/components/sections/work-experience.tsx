import { buttonVariants } from "@/components/ui/button"
import { ShellSection } from "@/components/ui/shell"
import { workExperience } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import type React from "react"

export interface WorkProps {
  href: string
  title: string
  status: string
  buttonText?: string
  employer?: string
  positions?: Array<{
    title: string
    href: string
    status: string
    buttonText?: string
  }>
}

export function WorkExperience() {
  const groupedExperience = workExperience.reduce((acc, work) => {
    const employer = work.employer || work.title.split('@')[1]?.trim() || work.title
    if (!acc[employer]) {
      acc[employer] = []
    }
    acc[employer].push(work)
    return acc
  }, {} as Record<string, typeof workExperience>)

  return (
    <ShellSection index={3} title="Work Experience">
      {Object.entries(groupedExperience).map(([employer, positions], employerIndex) => (
        <div key={employerIndex} className="space-y-3">
          {positions.length > 1 ? (
            <>
              <div className="text-sm font-medium text-muted-foreground mb-2">
                {employer}
              </div>
              {positions.map((work, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-full justify-between items-center flex border-input pl-4"
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-[15px] leading-4">{work.title}</span>
                    {work.status && (
                      <div className="hidden md:inline-flex items-center rounded-full border border-input px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs font-normal text-muted-foreground">
                        {work.status}
                      </div>
                    )}
                  </div>
                  <Link
                    href={work.href}
                    className={buttonVariants({
                      variant: "outline",
                      size: "xs",
                      className: " text-xs text-muted-foreground"
                    })}
                  >
                    {work.buttonText ? work.buttonText : "View Details "}
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <div
              className={cn(
                "w-full justify-between items-center flex border-input"
              )}
            >
              <div className="flex items-center space-x-2">
                <span className="text-[15px] leading-4">{positions[0].title}</span>
                {positions[0].status && (
                  <div className="hidden md:inline-flex items-center rounded-full border border-input px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs font-normal text-muted-foreground">
                    {positions[0].status}
                  </div>
                )}
              </div>
              <Link
                href={positions[0].href}
                className={buttonVariants({
                  variant: "outline",
                  size: "xs",
                  className: " text-xs text-muted-foreground"
                })}
              >
                {positions[0].buttonText ? positions[0].buttonText : "View Details "}
              </Link>
            </div>
          )}
        </div>
      ))}
    </ShellSection>
  )
}
