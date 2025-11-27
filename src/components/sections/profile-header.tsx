"use client"

import { notifications } from "@/lib/constants"
import { useState } from "react"

interface ProfileHeaderProps {
  name: string
  username: string
  isActive: boolean
}

export function ProfileHeader({
  name,
  username,
  isActive
}: ProfileHeaderProps) {
  const [dismissedNotifications, setDismissedNotifications] = useState<Set<string>>(new Set())
  
  const activeNotifications = notifications.filter(
    (notif) => notif.active && !dismissedNotifications.has(notif.id)
  )

  const handleDismiss = (id: string) => {
    setDismissedNotifications((prev) => new Set(prev).add(id))
  }

  return (
    <header className="top-0 z-50 w-full animate-slide-from-down-and-fade-1 cursor-context-menu">
      <div className="flex flex-col space-y-3">
        {/* Notifications */}
        {activeNotifications.length > 0 && (
          <div className="flex flex-col gap-2">
            {activeNotifications.map((notif) => (
              <div
                key={notif.id}
                className="flex items-center justify-between rounded-md border border-input bg-muted/50 px-3 py-2 text-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="absolute flex size-3">
                    <span className="absolute top-[3px] size-1.5 animate-ping rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative top-[3px] size-1.5 rounded-full bg-blue-500"></span>
                  </div>
                  <span className="prose prose-neutral ml-4 dark:prose-invert text-[13px] text-muted-foreground">
                    {notif.message}
                  </span>
                </div>
                <button
                  onClick={() => handleDismiss(notif.id)}
                  className="ml-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Dismiss notification"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="cursor-pointer">
          <h1 className="font-medium text-[15px] transition-element">
            <span className="sr-only">{name}</span>
            <span
              aria-hidden="true"
              className="group relative block overflow-hidden"
            >
              <span className="group-hover:-translate-y-full inline-block transition-all duration-300 ease-in-out">
                <span
                  className="inline-block"
                  style={{ transitionDelay: "275ms" }}
                >
                  {name}
                </span>
              </span>
              <span className="absolute top-0 left-0 inline-block translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
                <span
                  className="inline-block"
                  style={{ transitionDelay: "175ms" }}
                >
                  {username}
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* Status */}
        {isActive && (
          <div className="flex items-center">
            <div className="absolute flex size-4">
              <span className="absolute top-[4.5px] size-2 animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative top-[4.5px] size-2 rounded-full bg-green-500"></span>
            </div>
            <span className="prose prose-neutral ml-4 dark:prose-invert text-[14px]">
              seeking for summer 2026 internships
            </span>
          </div>
        )}
      </div>
    </header>
  )
}
