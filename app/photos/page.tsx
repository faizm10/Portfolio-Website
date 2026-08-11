import type { Metadata } from "next";
import Link from "next/link";
import PhotoGrid from "@/components/ui/PhotoGrid";
import photosData from "@/app/data/photos.json";
import { formatPhotoDate } from "@/app/data/places";
import { site } from "@/app/data/site";

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
    <main className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-10 md:px-8 md:pt-12">
      <div className="mx-auto max-w-xl">
        <Link
          href={placeFilter ? "/travel" : "/"}
          className="text-sm lowercase transition-opacity hover:opacity-70"
          style={{ color: "var(--ink-2)" }}
        >
          {placeFilter ? "← travel" : "← home"}
        </Link>

        <h1
          className="mt-8 text-2xl font-semibold tracking-tight lowercase md:text-[1.75rem]"
          style={{ color: "var(--ink)" }}
        >
          {placeFilter ? placeFilter.toLowerCase() : "photos"}
        </h1>
        <p
          className="mt-3 text-[15px] lowercase leading-7 md:text-base md:leading-8"
          style={{ color: "var(--ink-2)" }}
        >
          {placeFilter ? (
            <>
              {photos.length} {photos.length === 1 ? "photo" : "photos"} ·{" "}
              <Link
                href="/photos"
                className="underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70"
                style={{ color: "var(--ink)" }}
              >
                all photos
              </Link>
            </>
          ) : (
            "sidequesting at its finest"
          )}
        </p>

        <div className="mt-10">
          {photos.length > 0 ? (
            <PhotoGrid photos={photos} />
          ) : (
            <p
              className="text-[15px] lowercase italic"
              style={{ color: "var(--ink-3)" }}
            >
              {placeFilter
                ? "no photos for this place yet."
                : "stay tuned!"}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
