import { cn } from "@/lib/utils";
import { doodleProps, doodleStroke } from "./stroke";

export default function HandDrawnCircle({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      {...doodleProps}
      className={cn("hand-circle", className)}
      viewBox="0 0 72 72"
    >
      <path
        {...doodleStroke}
        d="M18.4 16.8c14.8-9.6 38.6-7.4 46.2 8.8 7.4 15.8 1.2 37.6-16.4 43.8-16.2 5.8-36.8-3.4-40.2-20.6C5.2 32.4 9.8 22.1 18.4 16.8z"
      />
    </svg>
  );
}
