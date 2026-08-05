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

/** Hardcoded fallbacks when a photo has no lat/lng yet. */
export const locationCoordinates: Record<string, [number, number]> = {
  Toronto: [-79.3832, 43.6532],
  Chicago: [-87.6298, 41.8781],
  Iceland: [-21.9426, 64.1466],
  Germany: [13.405, 52.52],
  Austria: [16.3738, 48.2082],
  "New York City": [-74.006, 40.7128],
  Montreal: [-73.5673, 45.5017],
  "Czech Republic": [14.4378, 50.0755],
  England: [-0.1278, 51.5074],
};

/**
 * Seed places from the coordinate table (used until photos.json is filled).
 * Replace/extend by adding entries under `app/data/photos.json`.
 */
export function placesFromCoordinates(): Place[] {
  return Object.entries(locationCoordinates).map(([location, [lng, lat]]) => ({
    location,
    lng,
    lat,
    image: "",
    date: "",
    count: 0,
    photos: [],
  }));
}
