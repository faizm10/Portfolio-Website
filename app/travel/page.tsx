import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PlacesMap from "@/components/ui/PlacesMap";
import photosData from "@/app/data/photos.json";
import { getPlacesFromPhotos, travelBucketList } from "@/app/data/places";
import { site } from "@/app/data/site";
import PageIntro from "@/app/components/sketch/PageIntro";
import DoodleArrow from "@/app/components/sketch/DoodleArrow";
import SketchMark from "@/app/components/sketch/SketchMark";

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
    <main className="personal-page-inner">
      <PageIntro
        eyebrow="with a camera"
        title="travel"
        note="← pins from the road"
        character="walk"
      >
        <p>a map of places i&apos;ve been, and a few still waiting.</p>
      </PageIntro>

      <div className="mt-2">
        <PlacesMap places={places} />
      </div>

      <section className="minimal-section" aria-labelledby="places-list-heading">
        <h2 id="places-list-heading">places</h2>
        {places.length === 0 ? (
          <p className="hand-note" style={{ color: "var(--ink-3)" }}>
            stay tuned!
          </p>
        ) : (
          <ul className="minimal-list">
            {places.map((place) => (
              <li key={place.location}>
                <Link href={photosHref(place.location)} className="minimal-row">
                  <span className="inline-flex min-w-0 items-center gap-3">
                    <span className="relative size-11 shrink-0 overflow-hidden sm:size-12">
                      <Image
                        src={place.image}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover"
                        aria-hidden
                      />
                    </span>
                    <span>
                      {place.location}
                      <span className="ml-2 text-[13px]" style={{ color: "var(--ink-3)" }}>
                        {place.count} {place.count === 1 ? "photo" : "photos"}
                      </span>
                    </span>
                  </span>
                  <DoodleArrow className="hidden sm:block" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="minimal-section" aria-labelledby="bucket-list-heading">
        <SketchMark kind="cloud" className="section-doodle is-leaf" />
        <h2 id="bucket-list-heading">bucket list</h2>
        <ul className="build-list">
          {travelBucketList.map((place) => (
            <li key={place}>
              <span className="build-arrow" aria-hidden>
                →
              </span>
              <span>{place}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
