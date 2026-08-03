"use client";

import Image from "next/image";

/**
 * Wide twilight banner with a slow Ken Burns drift + soft fade into the page.
 */
export default function HeroBanner() {
  return (
    <div
      aria-hidden
      className="pointer-events-none relative z-[1] w-full overflow-hidden"
      style={{
        height: "clamp(96px, 18vw, 200px)",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
      }}
    >
      <div className="absolute inset-0 origin-center animate-ken-burns">
        <Image
          src="/hero-sky.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{
            /* Shift purple twilight → warmer peach / amber */
            filter: "hue-rotate(-35deg) saturate(0.85) brightness(1.05)",
          }}
        />
      </div>
      {/* Extra white wash so the fade into the page feels soft */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.55) 55%, #fff)",
        }}
      />
    </div>
  );
}
