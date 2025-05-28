"use client"

import { useEffect, useState } from "react"

export default function ViewCounter({
  slug,
  initialViews,
  trackView = true,
}: {
  slug: string
  initialViews: number
  trackView?: boolean
}) {
  const [views, setViews] = useState(initialViews)
  const [hasTracked, setHasTracked] = useState(false)

  useEffect(() => {
    if (!trackView || hasTracked) return

    const registerView = async () => {
      try {
        console.log("Registering view for:", slug)

        const response = await fetch("/api/views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug }),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log("View registered, new count:", data.views)

        setViews(data.views)
        setHasTracked(true)
      } catch (error) {
        console.error("Failed to register view:", error)
      }
    }

    // Add a small delay to ensure the component is mounted
    const timer = setTimeout(registerView, 100)

    return () => clearTimeout(timer)
  }, [slug, trackView, hasTracked])

  return (
    <span className="text-sm text-neutral-600 dark:text-neutral-400">
      {`${views.toLocaleString()} view${views === 1 ? "" : "s"}`}
    </span>
  )
}
