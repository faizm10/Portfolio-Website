"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import PhotoLikeButton from "./PhotoLikeButton";

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

          {/* Polaroid frame in lightbox */}
          <div
            className="relative max-h-[90vh] max-w-[min(90vw,420px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-sm border border-neutral-200/90 bg-[#f5f3ef] p-3 pb-2 shadow-2xl ring-1 ring-black/5">
              <div className="max-h-[min(72vh,520px)] overflow-hidden bg-neutral-200 shadow-inner">
                <img
                  src={photos[lightboxIndex]}
                  alt={`photo ${lightboxIndex + 1}`}
                  className="max-h-[min(72vh,520px)] w-full object-contain"
                  style={{ display: "block" }}
                />
              </div>
              <div className="flex min-h-[52px] items-center justify-end px-1 pt-3 pb-1">
                <PhotoLikeButton photoSrc={photos[lightboxIndex]} />
              </div>
            </div>
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
  const tilt = index % 2 === 0 ? "-rotate-[1.5deg]" : "rotate-[1.5deg]";
  return (
    <div
      className={`group break-inside-avoid mb-4 w-full transition-transform duration-300 hover:z-10 hover:scale-[1.02] hover:rotate-0 ${tilt}`}
    >
      <div className="rounded-sm border border-neutral-200/90 bg-[#f5f3ef] p-2.5 pb-0 shadow-[0_6px_24px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04]">
        <button
          type="button"
          onClick={onClick}
          className="block w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f3ef]"
          aria-label={`View photo ${index + 1}`}
        >
          <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`photo ${index + 1}`}
              className="h-full w-full object-cover object-center transition-[filter] duration-300 group-hover:brightness-[0.97]"
              loading={index < 4 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        </button>
        {/* Polaroid bottom margin — likes in the corner */}
        <div className="flex min-h-[3.25rem] items-center justify-between gap-2 px-1 pb-2.5 pt-2.5">
          <span className="pointer-events-none select-none text-[10px] uppercase tracking-wider text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100">
            view
          </span>
          <div className="ml-auto shrink-0">
            <PhotoLikeButton photoSrc={src} />
          </div>
        </div>
      </div>
    </div>
  );
}
