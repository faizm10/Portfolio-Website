/**
 * Travel map — Toronto hub to places I've been.
 */
export type TravelPlace = {
  name: string;
  lat: number;
  lng: number;
};

export const travelOrigin: TravelPlace = {
  name: "Toronto",
  lat: 43.6532,
  lng: -79.3832,
};

/** Destinations drawn as arcs from Toronto. */
export const travelDestinations: TravelPlace[] = [
  { name: "Chicago", lat: 41.8781, lng: -87.6298 },
  { name: "Iceland", lat: 64.1466, lng: -21.9426 }, // Reykjavík
  { name: "Germany", lat: 52.52, lng: 13.405 }, // Berlin
  { name: "Austria", lat: 48.2082, lng: 16.3738 }, // Vienna
  { name: "New York City", lat: 40.7128, lng: -74.006 },
  { name: "Montreal", lat: 45.5017, lng: -73.5673 },
  { name: "Czech Republic", lat: 50.0755, lng: 14.4378 }, // Prague
  { name: "England", lat: 51.5074, lng: -0.1278 }, // London
];

export const travelDots = travelDestinations.map((place) => ({
  start: {
    lat: travelOrigin.lat,
    lng: travelOrigin.lng,
    label: travelOrigin.name,
  },
  end: { lat: place.lat, lng: place.lng, label: place.name },
}));
