/**
 * Places I've been — Mapbox markers + optional photo stacks.
 */

export type PlacePhoto = {
  image: string;
  date: string;
};

export type Place = {
  location: string;
  lng: number;
  lat: number;
  image: string;
  date: string;
  count: number;
  photos: PlacePhoto[];
};

/** Render a photo's ISO timestamp as e.g. "dec 31, 2024". */
export function formatPhotoDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(d)
    .toLowerCase();
}

/**
 * Places I've been, as [lng, lat].
 *
 * Doubles as (a) the coordinate lookup for photos in `photos.json` that have
 * no inline lng/lat, and (b) the pin list for places I've visited but have no
 * photo for yet — those render as initial-only markers.
 *
 * Keys must match the `location` string in `photos.json` exactly, otherwise a
 * place with photos gets a second, empty pin next to its real one.
 */
export const locationCoordinates: Record<string, [number, number]> = {
  "Toronto, Canada": [-79.3832, 43.6532],
  "Ottawa, Canada": [-75.6972, 45.4215],
  "Montreal, Canada": [-73.5673, 45.5017],
  "Chicago, Illinois": [-87.6298, 41.8781],
  "Manchester, UK": [-2.2426, 53.4808],
  "Berlin, Germany": [13.405, 52.52],
  "Dresden, Germany": [13.7373, 51.0504],
  "Frankfurt, Germany": [8.6821, 50.1109],
  "Munich, Germany": [11.582, 48.1351],
  "Prague, Czech Republic": [14.4378, 50.0755],
  "Salzburg, Austria": [13.055, 47.8095],
};

/** Places I want to visit — travel page bucket list. */
export const travelBucketList = [
  "los angeles",
  "south korea",
  "china",
  "italy",
  "hong kong",
  "singapore",
  "vietnam",
  "malaysia",
] as const;

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

/** Aggregate photos.json into place pins (photo places only). */
export function getPlacesFromPhotos(
  photos: RawPhoto[],
): Place[] {
  const byLocation = new Map<string, Place>();

  photos
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

  return Array.from(byLocation.values());
}
