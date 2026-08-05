import PlacesMap from "@/components/ui/PlacesMap";
import photosData from "@/app/data/photos.json";
import {
  formatPhotoDate,
  locationCoordinates,
  type Place,
} from "@/app/data/places";

type RawPhoto = {
  filename: string;
  date: string;
  location: string;
  lng?: number | null;
  lat?: number | null;
};

function coordsFor(photo: RawPhoto): [number, number] | null {
  if (photo.lng != null && photo.lat != null) return [photo.lng, photo.lat];
  return locationCoordinates[photo.location] ?? null;
}

function getPlaces(): Place[] {
  const byLocation = new Map<string, Place>();

  (photosData as RawPhoto[])
    .filter((p) => p.location && p.filename && coordsFor(p))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .forEach((photo) => {
      const image = `/img/photos/${photo.filename}`;
      const date = formatPhotoDate(photo.date);
      const existing = byLocation.get(photo.location);
      if (existing) {
        existing.count += 1;
        existing.photos.push({ image, date });
        return;
      }
      const [lng, lat] = coordsFor(photo)!;
      byLocation.set(photo.location, {
        location: photo.location,
        lng,
        lat,
        image,
        date,
        count: 1,
        photos: [{ image, date }],
      });
    });

  // Only places I have photos of — somewhere I've been but not shot yet
  // doesn't earn a pin.
  return Array.from(byLocation.values());
}

export default function TravelMap() {
  const places = getPlaces();

  return (
    <section
      id="places"
      className="mx-auto w-full max-w-3xl scroll-mt-24"
      aria-labelledby="travel-heading"
    >
      <h2
        id="travel-heading"
        className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: "var(--ink-3)" }}
      >
        places
      </h2>
      <p
        className="mx-auto mb-8 max-w-md text-center text-[13px] lowercase leading-relaxed"
        style={{ color: "var(--ink-3)" }}
      >
        a map of places i&apos;ve been with my camera
      </p>
      <PlacesMap places={places} />
    </section>
  );
}
