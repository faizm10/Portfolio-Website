import { cn } from "@/lib/utils";
import { doodleProps, doodleStroke } from "./stroke";

export default function AnimatedStar({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      {...doodleProps}
      className={cn("animated-star", className)}
      viewBox="0 0 24 24"
    >
      <path
        {...doodleStroke}
        d="M12.2 3.4 13.8 9l5.8.4-4.6 3.6 1.6 5.6-4.4-3.2-4.6 3 1.8-5.6L4.6 9.2l5.8-.2z"
      />
    </svg>
  );
}
