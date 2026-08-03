"use client";

import WorldMap from "@/components/ui/world-map";
import { travelDestinations, travelDots, travelOrigin } from "@/app/data/travel";

export default function TravelMap() {
  return (
    <section
      id="places"
      className="w-full scroll-mt-24"
      aria-labelledby="travel-heading"
    >
      <h2
        id="travel-heading"
        className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: "var(--ink-3)" }}
      >
        places
      </h2>
      <p
        className="mx-auto mb-8 max-w-md text-center text-[13px] lowercase leading-relaxed"
        style={{ color: "var(--ink-3)" }}
      >
        from {travelOrigin.name.toLowerCase()} to{" "}
        {travelDestinations.length} cities &amp; countries
      </p>

      <div className="mx-auto w-full max-w-3xl">
        <WorldMap dots={travelDots} lineColor="#171717" />
      </div>
    </section>
  );
}
