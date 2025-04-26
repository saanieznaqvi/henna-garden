import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedGallery } from "@/components/home/featured-gallery";
import { AboutPreview } from "@/components/home/about-preview";
import { ServiceCards } from "@/components/services/service-cards";
import { featuredImages, serviceCategories } from "@/data/site-data";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <PageContainer pageTransition="fade" headerTransparent={true}>
      <HeroSection showLogo={true} showCta={true} />
      <FeaturedGallery 
        images={featuredImages.slice(0, 3)} 
        hoverEffect="zoom" 
        expandOnHover={true} 
      />
      <AboutPreview />
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl mb-4 text-primary">My Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="font-body text-lg max-w-2xl mx-auto text-primary/80">
              From delicate petal-like patterns to flourishing bridal designs, my garden 
              of henna artistry offers something for every occasion. Each design is
              carefully crafted to bloom beautifully on your skin.
            </p>
          </div>
          <ServiceCards 
            services={serviceCategories} 
            expandOnHover={true} 
          />
          <motion.p 
            className="text-center mt-8 text-sm text-primary/70 italic max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            * The images shown are examples of work by talented henna artists and are used for 
            illustrative purposes. While these images represent the style and quality level of 
            my services, they are not my personal work. Rest assured, my designs maintain the 
            same level of intricacy and attention to detail.
          </motion.p>
          <p className="text-sm text-gray-500 italic mt-4">
            Note: While these images represent my services, they are not my personal work. Rest assured, my designs maintain the
            same level of artistry and attention to detail.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Index;
