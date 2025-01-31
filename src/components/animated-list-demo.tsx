"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Hackathon {
  name: string;
  status: string;
  description?: string;
  icon: string;
  color: string;
  time?: string;
}

const hackathons: Hackathon[] = [
  {
    name: "CodeDex Hackathon",
    status: "2nd Place",
    description: "Achieved 2nd place in CodeDex Hackathon.",
    icon: "🥈",
    color: "#FFD700",
  },
  {
    name: "HawkHacks",
    status: "Accepted but did not attend",
    description: "Accepted invitation but unable to attend.",
    icon: "✉️",
    color: "#1E90FF",
  },
  {
    name: "HackThe6ix",
    status: "Rejected",
    description: "Application was not accepted.",
    icon: "❌",
    color: "#FF3D71",
  },
  {
    name: "HackTrent",
    status: "Accepted and participated ✅",
    description: "Successfully participated in HackTrent.",
    icon: "✅",
    color: "#00C9A7",
  },

  {
    name: "OttaHack",
    status: "Rejected",
    description: "Did not meet the selection criteria.",
    icon: "❌",
    color: "#FF3D71",
  },
  {
    name: "McHacks",
    status: "Accepted but did not attend",
    description: "Accepted invitation but unable to attend.",
    icon: "✉️",
    color: "#1E90FF",
  },
  {
    name: "DeltaHacks",
    status: "Rejected",
    description: "Application was not accepted.",
    icon: "❌",
    color: "#FF3D71",
  },
  {
    name: "GeeseHacks",
    status: "Waitlisted",
    description: "Waitlisted",
    icon: "❌",
    color: "#FF3D71",
  },
  {
    name: "HackCanada",
    status: "Pending",
    description: "Application status is pending.",
    icon: "⏳",
    color: "#FFB800",
  },
  {
    name: "CxC Hack",
    status: "Waitlisted",
    description: "Waitlisted",
    icon: "⏳",
    color: "#FFB800",
  },
];

const AnimatedListDemo = ({
  name,
  status,
  description,
  icon,
  color,
}: Hackathon) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{status}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function HackathonList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex  w-full flex-col p-6 overflow-hidden ",
        className
      )}
    >
      <AnimatedList>
        {hackathons.map((hackathon, idx) => (
          <AnimatedListDemo {...hackathon} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
