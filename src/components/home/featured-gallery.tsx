import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GalleryGrid } from "../gallery/gallery-grid";
import { PremiumButton } from "../ui/premium-button";

interface FeaturedGalleryProps {
  images: {
    id: string;
    image: string;
    title: string;
    category?: string;
  }[];
  hoverEffect?: "zoom" | "overlay" | "reveal";
  expandOnHover?: boolean;
}

export const FeaturedGallery = ({
  images,
  hoverEffect = "zoom",
  expandOnHover = true,
}: FeaturedGalleryProps) => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-heading text-4xl mb-4 text-primary">
            Blooming Gallery of Designs
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="font-body text-lg max-w-2xl mx-auto text-primary/80">
            Discover my garden of intricate henna patterns, where each design blossoms 
            with unique beauty and meaning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <GalleryGrid images={images} hoverEffect={hoverEffect} />
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/gallery">
            <PremiumButton variant="outline">View Full Gallery</PremiumButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
