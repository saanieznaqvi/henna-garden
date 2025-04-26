import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FullGalleryProps {
  images: Array<{
    id: string;
    image: string;
    title: string;
  }>;
  onClose: () => void;
}

export const FullGallery = ({ images, onClose }: FullGalleryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
    >
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="fixed top-4 right-4 text-white hover:text-accent transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}; 