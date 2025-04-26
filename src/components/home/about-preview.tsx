import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PremiumButton } from "../ui/premium-button";

export const AboutPreview = () => {
  return (
    <section className="py-24 bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="/assets/about-preview.jpg"
                alt="Saanie applying henna"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-heading text-4xl mb-6 text-primary">
              About Saanie's Henna Garden
            </h2>
            <div className="w-24 h-1 bg-accent mb-8"></div>
            <p className="font-body text-lg mb-6 text-primary/80">
              Welcome to my garden of henna artistry! With a deep love for nature and art, 
              I specialize in creating intricate floral designs that bring beauty to life 
              on your skin. My Pakistani heritage and passion for detailed artwork inspire 
              every design I create.
            </p>
            <p className="font-body text-lg mb-8 text-primary/80">
              Each design is thoughtfully crafted to reflect the delicate beauty of nature, 
              combining traditional techniques with contemporary floral patterns. I'm dedicated 
              to making every client feel beautiful through my dainty and detailed henna art.
            </p>
            <Link to="/about">
              <PremiumButton variant="primary">Learn More About Saanie</PremiumButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
