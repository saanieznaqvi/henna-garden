import React from "react";
import { GalleryItem } from "./gallery-item";

interface GalleryImage {
  id: string;
  image: string;
  title: string;
  category?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export const GalleryGrid = ({ images }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((item) => (
        <GalleryItem
          key={item.id}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );
};
