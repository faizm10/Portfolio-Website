import BlobLaptop from "./BlobLaptop";
import CartoonTired from "./CartoonTired";

export type LoadingVariant = "tired" | "working";

export const LOADING_VARIANTS: readonly LoadingVariant[] = ["tired", "working"];

const ZZZ = [
  { className: "left-0 top-2 text-base", delay: "0s" },
  { className: "left-4 -top-1 text-xl", delay: "0.6s" },
  { className: "left-9 -top-5 text-2xl", delay: "1.2s" },
];

const DOTS = ["0s", "0.18s", "0.36s"];

/**
 * The tired face droops until it catches itself; the z's drift off with it.
 */
function Tired() {
  return (
    <div className="relative motion-safe:animate-drowsy-breathe">
      <div aria-hidden className="absolute -top-2 left-full ml-1 h-16 w-20">
        {ZZZ.map(({ className, delay }, i) => (
          <span
            key={i}
            style={{ animationDelay: delay }}
            className={`absolute font-[family-name:var(--font-inter)] italic text-neutral-400 opacity-40 motion-safe:animate-zzz-drift motion-safe:opacity-0 ${className}`}
          >
            z
          </span>
        ))}
      </div>

      <CartoonTired
        aria-hidden
        className="h-28 w-28 text-neutral-900 motion-safe:animate-nod-off sm:h-32 sm:w-32"
      />

      <div
        aria-hidden
        className="mx-auto h-2 w-20 rounded-[50%] bg-neutral-900 opacity-[0.16] blur-[3px] motion-safe:animate-rest-shadow"
      />
    </div>
  );
}

/**
 * The blob keeps typing, with thinking dots instead of z's — same beat,
 * opposite mood, so the two variants don't feel like one animation reskinned.
 */
function Working() {
  return (
    <div className="relative">
      <BlobLaptop
        aria-hidden
        className="h-28 w-28 text-neutral-900 motion-safe:animate-desk-bob sm:h-32 sm:w-32"
        armClassName="origin-right [transform-box:fill-box] motion-safe:animate-arm-tap"
      />

      <div
        aria-hidden
        className="mt-1 flex items-center justify-center gap-1.5"
      >
        {DOTS.map((delay, i) => (
          <span
            key={i}
            style={{ animationDelay: delay }}
            className="h-1.5 w-1.5 rounded-full bg-neutral-900 opacity-20 motion-safe:animate-think-dot"
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Full-screen loading state. Pure CSS animation so it renders instantly as a
 * Suspense fallback, and holds still for anyone who asked for reduced motion.
 */
export default function LoadingScreen({
  variant = "tired",
}: {
  variant?: LoadingVariant;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-white px-6"
    >
      {variant === "working" ? <Working /> : <Tired />}

      {/* No visible label by request — screen readers still get one. */}
      <span className="sr-only">Loading, please wait.</span>
    </div>
  );
}
