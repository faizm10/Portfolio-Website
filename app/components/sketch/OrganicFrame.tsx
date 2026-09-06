import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { doodleProps, doodleStroke } from "./stroke";

export default function OrganicFrame({
  children,
  className,
  accent = false,
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return (
    <div className={cn("organic-frame", accent && "is-accent", className)}>
      {children}
      <svg
        {...doodleProps}
        className="organic-frame-stroke"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          {...doodleStroke}
          vectorEffect="non-scaling-stroke"
          d="M6.2 8.4c18.4-4.8 68.2-5.6 86.8 1.2 4.6 1.8 5.8 8.4 5.2 18.6-1.1 22.4-1.8 44.8.4 62.2.8 6.4-3.6 10.8-12.4 11.6-22.6 2.2-58.8 1.6-76.4-1.8C3.2 98.4 1.8 92.6 2.4 84.2 3.8 64.8 3.2 32.4 4.8 16.6 5.4 12.2 4.8 9.4 6.2 8.4z"
        />
      </svg>
    </div>
  );
}
