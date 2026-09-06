import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { doodleProps, doodleStroke } from "./stroke";

type Direction = "right" | "left" | "down" | "up";

const rotate: Record<Direction, string> = {
  right: "0deg",
  left: "180deg",
  down: "90deg",
  up: "-90deg",
};

export default function DoodleArrow({
  className,
  direction = "right",
  wobble = false,
}: {
  className?: string;
  direction?: Direction;
  wobble?: boolean;
}) {
  return (
    <svg
      {...doodleProps}
      className={cn("doodle-arrow", wobble && "is-wobbly", className)}
      viewBox="0 0 72 28"
      width="72"
      height="28"
      style={{ "--arrow-dir": rotate[direction] } as CSSProperties}
    >
      <path
        {...doodleStroke}
        d="M4.2 15.2c11.6-1.8 23.8-4.6 36.4-5.1 8.2-.3 16.4.9 23.2 3.4"
      />
      <path {...doodleStroke} d="M54.6 6.4c4.8 2.1 9.4 5.2 12.2 8.8-4.2.6-8.8 1.8-12.8 3.7" />
    </svg>
  );
}
