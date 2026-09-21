"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { Place } from "@/app/data/places";

const PlacesMap = dynamic(() => import("@/components/ui/PlacesMap"), {
  ssr: false,
  loading: () => <div className="home-photos-map-slot" aria-hidden />,
});

export default function HomePhotosGlobe({ places }: { places: Place[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!root.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={root} className="home-photos-map">
      {visible ? (
        <PlacesMap places={places} height={340} linkToPhotos />
      ) : (
        <div className="home-photos-map-slot" />
      )}
    </div>
  );
}
