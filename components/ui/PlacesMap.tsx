"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PhotoLightbox from "@/components/ui/PhotoLightbox";
import type { Place } from "@/app/data/places";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? "";

type PlacesMapProps = {
  places: Place[];
  zoom?: number;
  pitch?: number;
};

/**
 * Spinning Mapbox globe with place markers (photo thumb when available).
 * Light preset only — this site has no dark theme.
 */
export default function PlacesMap({
  places,
  zoom = 1.4,
  pitch = 20,
}: PlacesMapProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  const [activePlace, setActivePlace] = useState<Place | null>(null);
  const openPlace = useRef(setActivePlace);
  openPlace.current = setActivePlace;

  const spinRef = useRef(() => {});
  const interactingRef = useRef(false);
  const lightboxOpenRef = useRef(false);

  const hasToken = Boolean(process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN);

  useEffect(() => {
    if (!hasToken || !mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [-100, 40],
      zoom,
      pitch,
      projection: "globe",
      attributionControl: false,
      style: "mapbox://styles/mapbox/standard",
    });

    const secondsPerRevolution = 120;

    const spinGlobe = () => {
      if (
        !map.current ||
        interactingRef.current ||
        lightboxOpenRef.current ||
        map.current.getZoom() > 4
      ) {
        return;
      }
      const center = map.current.getCenter();
      center.lng -= 360 / secondsPerRevolution;
      map.current.easeTo({ center, duration: 1000, easing: (n) => n });
    };
    spinRef.current = spinGlobe;

    const startInteract = () => {
      interactingRef.current = true;
    };
    (["mousedown", "dragstart", "touchstart"] as const).forEach((evt) =>
      map.current!.on(evt, startInteract),
    );

    map.current.on("moveend", () => {
      if (!interactingRef.current) spinGlobe();
    });

    (["mouseup", "touchend", "dragend"] as const).forEach((evt) =>
      map.current!.on(evt, () => {
        interactingRef.current = false;
        spinGlobe();
      }),
    );

    const optimized = (src: string, width: number, quality = 70) =>
      `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;

    map.current.on("style.load", () => {
      try {
        map.current?.setConfigProperty("basemap", "lightPreset", "light");
      } catch {
        /* standard style without basemap config is fine */
      }
      spinGlobe();

      places.forEach((place) => {
        const el = document.createElement("button");
        el.className = "place-marker";
        el.type = "button";
        el.setAttribute("aria-label", `Photos from ${place.location}`);

        if (place.image) {
          el.style.backgroundImage = `url(${optimized(place.image, 96)})`;
        } else {
          el.classList.add("place-marker--empty");
          el.textContent = place.location.slice(0, 1);
        }

        if (place.count > 1) {
          const badge = document.createElement("span");
          badge.className = "place-marker__badge";
          badge.textContent = String(place.count);
          el.appendChild(badge);
        }

        const popupHtml = place.image
          ? `<div class="place-popup__inner">
               <img src="${optimized(place.image, 384)}" alt="${place.location}" loading="lazy" />
               <div class="place-popup__meta">
                 <span class="place-popup__loc">${place.location}</span>
                 <span class="place-popup__count">${place.count} photo${
                   place.count > 1 ? "s" : ""
                 }</span>
               </div>
             </div>`
          : `<div class="place-popup__inner place-popup__inner--text">
               <div class="place-popup__meta">
                 <span class="place-popup__loc">${place.location}</span>
               </div>
             </div>`;

        const popup = new mapboxgl.Popup({
          offset: 22,
          closeButton: false,
          className: "place-popup",
        }).setHTML(popupHtml);

        const marker = new mapboxgl.Marker({ element: el })
          .setLngLat([place.lng, place.lat])
          .setPopup(popup)
          .addTo(map.current!);

        el.addEventListener("mouseenter", () => marker.togglePopup());
        el.addEventListener("mouseleave", () => marker.togglePopup());
        el.addEventListener("click", () => {
          if (place.photos.length > 0) openPlace.current(place);
        });

        markers.current.push(marker);
      });
    });

    return () => {
      markers.current.forEach((m) => m.remove());
      markers.current = [];
      map.current?.remove();
      map.current = null;
    };
  }, [hasToken, places, zoom, pitch]);

  useEffect(() => {
    lightboxOpenRef.current = activePlace !== null;
    if (activePlace) {
      map.current?.stop();
    } else {
      spinRef.current();
    }
  }, [activePlace]);

  if (!hasToken) {
    return (
      <div
        className="flex h-[400px] items-center justify-center rounded-2xl border px-6 text-center text-sm lowercase"
        style={{ borderColor: "var(--border)", color: "var(--ink-3)" }}
      >
        add{" "}
        <code className="mx-1 normal-case" style={{ color: "var(--ink-2)" }}>
          NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        </code>{" "}
        to enable the places map
      </div>
    );
  }

  return (
    <>
      <div className="overflow-clip" style={{ height: "400px" }}>
        <div
          ref={mapContainer}
          className="map-container h-full w-full rounded-2xl"
        />
      </div>
      <PhotoLightbox
        photos={
          activePlace
            ? activePlace.photos.map((p) => ({
                ...p,
                location: activePlace.location,
              }))
            : null
        }
        onClose={() => setActivePlace(null)}
      />
    </>
  );
}
