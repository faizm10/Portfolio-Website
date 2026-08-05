"use client";

import { useEffect } from "react";

export type LightboxPhoto = {
  image: string;
  date: string;
  location?: string;
};

/**
 * Simple full-screen photo stack for a place.
 */
export default function PhotoLightbox({
  photos,
  onClose,
}: {
  photos: LightboxPhoto[] | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!photos) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [photos, onClose]);

  if (!photos || photos.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={photos[0]?.location ?? "photos"}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 text-sm text-white/80 underline underline-offset-2"
        onClick={onClose}
      >
        close
      </button>
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {photos[0]?.location && (
          <p
            className="mb-3 text-sm font-medium lowercase"
            style={{ color: "var(--ink)" }}
          >
            {photos[0].location}
            <span className="ml-2 font-normal" style={{ color: "var(--ink-3)" }}>
              {photos.length} photo{photos.length > 1 ? "s" : ""}
            </span>
          </p>
        )}
        <ul className="flex flex-col gap-3">
          {photos.map((photo) => (
            <li key={`${photo.image}-${photo.date}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.image}
                alt={photo.location ?? ""}
                className="h-auto w-full rounded-xl object-cover"
                loading="lazy"
              />
              {photo.date && (
                <p
                  className="mt-1 text-xs lowercase"
                  style={{ color: "var(--ink-3)" }}
                >
                  {photo.date}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
