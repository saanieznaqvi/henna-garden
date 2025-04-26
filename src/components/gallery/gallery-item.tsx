import React from "react";
import { motion } from "framer-motion";

interface GalleryItemProps {
  image: string;
  title: string;
  category?: string;
}

export const GalleryItem = ({
  image,
  title,
}: GalleryItemProps) => {
  return (
    <motion.div
      className="gallery-item relative overflow-hidden rounded-lg shadow-lg"
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { scale: 1, y: 0 },
        hover: { 
          scale: 1.1,
          y: -10,
          transition: { 
            duration: 0.4,
            ease: "easeOut"
          }
        }
      }}
    >
      <motion.div
        className="image-container aspect-[3/4]"
        variants={{
          initial: { scale: 1 },
          hover: { 
            scale: 1.2,
            transition: { 
              duration: 0.6,
              ease: "easeOut"
            }
          }
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};
