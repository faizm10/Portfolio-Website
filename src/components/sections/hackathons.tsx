"use client"

import { Icons } from "@/components/icons"
import { ShellSection } from "@/components/ui/shell"
import { hackathons } from "@/lib/constants"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"

export interface HackathonProps {
  name: string
  dates: string
  location: string
  description: string
  badges?: string[]
  links?: {
    github?: string
    site?: string
  }
  featured?: boolean
}

export function Hackathons() {
  return (
    <ShellSection index={6} title="Hackathons">
      <div className="grid grid-cols-1 gap-6">
        {hackathons.map((hackathon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex cursor-pointer flex-col space-y-3 rounded-md duration-300 hover:before:absolute hover:before:-inset-2.5 hover:before:rounded-md hover:before:bg-accent/20 hover:before:content-['']"
          >
            <div className="flex flex-col space-y-2 z-10">
              <div className="flex items-center space-x-2 flex-wrap">
                <span className="text-[15px] font-medium leading-4">
                  {hackathon.name}
                </span>
                {hackathon.badges && hackathon.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {hackathon.badges.map((badge, badgeIndex) => (
                      <motion.div
                        key={badgeIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + badgeIndex * 0.05 }}
                        className="inline-flex items-center rounded-full border border-input px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs font-normal text-muted-foreground"
                      >
                        {badge}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>{hackathon.dates}</span>
                <span>•</span>
                <span>{hackathon.location}</span>
              </div>
              <span className="text-[15px] prose prose-zinc dark:prose-invert">
                {hackathon.description}
              </span>
              {hackathon.links && (
                <div className="flex items-center space-x-3 pt-1">
                  {hackathon.links.github && (
                    <Link
                      href={hackathon.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Icons.gitHub className="size-4" />
                    </Link>
                  )}
                  {hackathon.links.site && (
                    <Link
                      href={hackathon.links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Live Site"
                    >
                      <Icons.link className="size-4" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.a
        href="https://github.com/stars/faizm10/lists/hackathons"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
      >
        <span>View additional hackathons on GitHub</span>
        {/* <Icons.github className="size-4" /> */}
      </motion.a>
    </ShellSection>
  )
}
