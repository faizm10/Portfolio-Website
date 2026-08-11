import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PlacesMap from "@/components/ui/PlacesMap";
import photosData from "@/app/data/photos.json";
import { getPlacesFromPhotos, travelBucketList } from "@/app/data/places";
import { site } from "@/app/data/site";

export const metadata: Metadata = {
  title: `travel · ${site.name}`,
  description: `places ${site.nameFormal} has been with a camera`,
};

function photosHref(location: string) {
  return `/photos?place=${encodeURIComponent(location)}`;
}

export default function TravelPage() {
  const places = getPlacesFromPhotos(photosData).sort((a, b) =>
    a.location.localeCompare(b.location),
  );

  return (
    <main className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-10 md:px-8 md:pt-12">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/"
          className="text-sm lowercase transition-opacity hover:opacity-70"
          style={{ color: "var(--ink-2)" }}
        >
          ← home
        </Link>

        <h1
          className="mt-8 font-[family-name:var(--font-newsreader)] text-2xl font-medium tracking-tight lowercase md:text-[1.85rem]"
          style={{ color: "var(--ink)" }}
        >
          travel
        </h1>
        <p
          className="mt-3 text-[15px] lowercase leading-7 md:text-base md:leading-8"
          style={{ color: "var(--ink-2)" }}
        >
          a map of places i&apos;ve been with my camera
        </p>

        <div className="mt-8">
          <PlacesMap places={places} />
        </div>

        <section className="mt-14" aria-labelledby="places-list-heading">
          <h2
            id="places-list-heading"
            className="mb-5 text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--ink-3)" }}
          >
            places
          </h2>

          {places.length === 0 ? (
            <p
              className="text-[15px] lowercase italic"
              style={{ color: "var(--ink-3)" }}
            >
              stay tuned!
            </p>
          ) : (
            <ul className="flex flex-col gap-1">
              {places.map((place) => (
                <li key={place.location}>
                  <Link
                    href={photosHref(place.location)}
                    className="group flex items-center gap-3 rounded-lg py-2 transition-opacity hover:opacity-70"
                  >
                    <div className="relative size-11 shrink-0 overflow-hidden rounded-md bg-[var(--ink-3)]/10 sm:size-12">
                      <Image
                        src={place.image}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover"
                        aria-hidden
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div
                        className="truncate text-[15px] font-medium lowercase underline decoration-[var(--ink-3)] underline-offset-[3px] md:text-base"
                        style={{ color: "var(--ink)" }}
                      >
                        {place.location}
                      </div>
                      <div
                        className="text-[13px] lowercase"
                        style={{ color: "var(--ink-3)" }}
                      >
                        {place.count} {place.count === 1 ? "photo" : "photos"}
                      </div>
                    </div>
                    <span
                      className="shrink-0 text-sm transition-transform group-hover:translate-x-0.5"
                      style={{ color: "var(--ink-3)" }}
                      aria-hidden
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mt-14" aria-labelledby="bucket-list-heading">
          <h2
            id="bucket-list-heading"
            className="mb-5 text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--ink-3)" }}
          >
            bucket list
          </h2>
          <ul className="flex flex-col gap-2">
            {travelBucketList.map((place) => (
              <li
                key={place}
                className="flex items-baseline gap-2 text-[15px] lowercase md:text-base"
                style={{ color: "var(--ink-2)" }}
              >
                <span style={{ color: "#e85d04" }} aria-hidden>
                  →
                </span>
                <span style={{ color: "var(--ink)" }}>{place}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
