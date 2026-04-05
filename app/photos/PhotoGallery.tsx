"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  photos: string[];
}

export default function PhotoGallery({ photos }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
  }, [lightboxIndex, photos.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % photos.length);
  }, [lightboxIndex, photos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prev, next]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <div className="relative min-h-screen w-full">
      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        {/* Header */}
        <header className="mb-10">
          <Link
            href="/"
            className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors mb-4 inline-block"
          >
            ← back
          </Link>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
            photos
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            {photos.length > 0
              ? `${photos.length} photo${photos.length !== 1 ? "s" : ""}`
              : "no photos yet"}
          </p>
        </header>

        {photos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            {/* <div className="text-4xl mb-4 text-neutral-200 select-none">⬜</div> */}
            <p className="text-sm text-neutral-400">
              <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded text-neutral-600">
                coming soon
              </code>
            </p>
          </div>
        ) : (
          /* Masonry grid via CSS columns */
          <div
            style={{
              columns: "2",
              columnGap: "12px",
            }}
            className="[&>*]:break-inside-avoid [&>*]:mb-3 sm:[&>*]:mb-3"
          >
            {photos.map((src, i) => (
              <PhotoCard
                key={src}
                src={src}
                index={i}
                onClick={() => openLightbox(i)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/60 hover:text-white text-sm transition-colors z-10 cursor-pointer"
            aria-label="Close"
          >
            esc
          </button>

          {/* Counter */}
          <span className="absolute top-5 left-5 text-white/40 text-xs tabular-nums">
            {lightboxIndex + 1} / {photos.length}
          </span>

          {/* Prev */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xl transition-colors z-10 px-3 py-2 cursor-pointer"
              aria-label="Previous photo"
            >
              ←
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightboxIndex]}
              alt={`photo ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[88vh] object-contain rounded-lg shadow-2xl"
              style={{ display: "block" }}
            />
          </div>

          {/* Next */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xl transition-colors z-10 px-3 py-2 cursor-pointer"
              aria-label="Next photo"
            >
              →
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function PhotoCard({
  src,
  index,
  onClick,
}: {
  src: string;
  index: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative block w-full overflow-hidden rounded-xl bg-neutral-100 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
      aria-label={`View photo ${index + 1}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`photo ${index + 1}`}
        className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        loading={index < 4 ? "eager" : "lazy"}
        decoding="async"
      />
      {/* Subtle hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl" />
      {/* Expand hint on hover */}
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
          view
        </div>
      </div>
    </button>
  );
}
