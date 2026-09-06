import type { Metadata } from "next";
import Link from "next/link";
import PhotoGrid from "@/components/ui/PhotoGrid";
import photosData from "@/app/data/photos.json";
import { formatPhotoDate } from "@/app/data/places";
import { site } from "@/app/data/site";
import PageIntro from "@/app/components/sketch/PageIntro";

export const metadata: Metadata = {
  title: `photos · ${site.name}`,
  description: `photos by ${site.nameFormal}`,
};

type RawPhoto = {
  filename: string;
  date: string;
  location: string;
  width: number;
  height: number;
};

type PhotosPageProps = {
  searchParams: Promise<{ place?: string }>;
};

export default async function PhotosPage({ searchParams }: PhotosPageProps) {
  const { place: placeParam } = await searchParams;
  const placeFilter = placeParam?.trim() || null;

  const allPhotos = (photosData as RawPhoto[])
    .filter((p) => p.filename)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((photo) => ({
      image: `/img/photos/${photo.filename}`,
      location: photo.location,
      date: formatPhotoDate(photo.date),
      width: photo.width,
      height: photo.height,
    }));

  const photos = placeFilter
    ? allPhotos.filter((p) => p.location === placeFilter)
    : allPhotos;

  return (
    <main className="personal-page-inner">
      <PageIntro
        eyebrow={placeFilter ? "from the map" : "field notes"}
        title={placeFilter ? placeFilter.toLowerCase() : "photos"}
        note={placeFilter ? "← a little pocket of a place" : "← sidequesting at its finest"}
        character={placeFilter ? "peek" : "sit"}
      >
        {placeFilter ? (
          <p>
            {photos.length} {photos.length === 1 ? "photo" : "photos"} ·{" "}
            <Link href="/photos">all photos</Link>
          </p>
        ) : (
          <p>quiet frames, leftover light, and the walk between them.</p>
        )}
      </PageIntro>

      <div className="mt-4">
        {photos.length > 0 ? (
          <PhotoGrid photos={photos} />
        ) : (
          <p className="hand-note" style={{ color: "var(--ink-3)" }}>
            {placeFilter ? "no photos for this place yet." : "stay tuned!"}
          </p>
        )}
      </div>
    </main>
  );
}
