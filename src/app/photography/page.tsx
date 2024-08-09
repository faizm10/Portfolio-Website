import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";
import {Skeleton} from "@nextui-org/skeleton";
// Define the type for a single photo
interface Photo {
  location: string;
  src: string;
}

// Define the props type for PhotosPage
interface PhotosPageProps {
  photos: Photo[];
}

const PhotosPage: React.FC<PhotosPageProps> = ({ photos }) => {
  return (
    <>
      <div className="w-full px-6 py-8" style={{ backgroundColor: "#fdddb7" }}>
        <h1 className="text-5xl font-bold mb-12 text-center">Photography</h1>

        <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-2 px-8 p-4">
          {photos.map((photo, index) => (
            <Card key={index} className="col-span-12 sm:col-span-4 h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white text-center uppercase font-bold">
                📍 {photo.location}
                </p>
              </CardHeader>
              <Image
                isZoomed
                removeWrapper
                alt={`Photo from ${photo.location}`}
                className="z-0 w-full h-full object-cover"
                src={photo.src}
              />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default function App() {
  const photoData: Photo[] = [
    {
      location: "HeartLake Secondary School",
      src: "/photography/photo1.jpeg",
    },
    { location: "Guelph Soccer Complex", src: "/photography/photo2.jpeg" },
    // { location: "HeartLake Secondary School", src: "/photography/photo3.jpeg" },
    { location: "Brampton", src: "/photography/photo4.jpeg" },
    // { location: "HeartLake Secondary School", src: "/photography/photo5.jpeg" },
  ];

  return <PhotosPage photos={photoData} />;
}
