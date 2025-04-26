import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/page-container";
import { PageTitle } from "@/components/common/page-title";
import { featuredImages } from "@/data/site-data";
import { ChevronDown } from "lucide-react";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const initialImages = featuredImages.slice(0, 3);
  const remainingImages = featuredImages.slice(3);

  return (
    <PageContainer pageTransition="scale">
      <PageTitle 
        title="Gallery" 
        subtitle="Explore my blooming collection of henna artistry, where each design tells a story through delicate petals and flowing vines" 
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {initialImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-[300px] group-hover:h-[600px] object-cover rounded-lg shadow-lg transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>

            {!showAll && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAll(true)}
                  className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <span>View More Designs</span>
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            )}

            {showAll && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
              >
                {remainingImages.map((image) => (
                  <motion.div
                    key={image.id}
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-[300px] group-hover:h-[600px] object-cover rounded-lg shadow-lg transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}

            <p className="text-center mt-8 text-sm text-primary/70 italic max-w-2xl mx-auto">
              All photos in the gallery are my original work, showcasing my personal henna artistry and design style.
            </p>
          </motion.div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Gallery;
