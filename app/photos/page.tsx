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

export default function PhotosPage() {
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

  return (
    <main className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-10 md:px-8 md:pt-12">
      <div className="mx-auto max-w-xl">
        <Link
          href="/"
          className="text-sm lowercase transition-opacity hover:opacity-70"
          style={{ color: "var(--ink-2)" }}
        >
          ← home
        </Link>

        <h1
          className="mt-8 text-2xl font-semibold tracking-tight lowercase md:text-[1.75rem]"
          style={{ color: "var(--ink)" }}
        >
          photos
        </h1>
        <p
          className="mt-3 text-[15px] lowercase leading-7 md:text-base md:leading-8"
          style={{ color: "var(--ink-2)" }}
        >
          sidequesting at its finest
        </p>

        <div className="mt-10">
          {allPhotos.length > 0 ? (
            <PhotoGrid photos={allPhotos} />
          ) : (
            <p
              className="text-[15px] lowercase italic"
              style={{ color: "var(--ink-3)" }}
            >
              stay tuned!
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
