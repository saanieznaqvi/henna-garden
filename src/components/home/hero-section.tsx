import React from "react";
import { motion } from "framer-motion";
import { PremiumButton } from "../ui/premium-button";
import { ChevronUp } from "lucide-react";

interface HeroSectionProps {
  showLogo?: boolean;
  showCta?: boolean;
}

export const HeroSection = ({ showLogo = true, showCta = true }: HeroSectionProps) => {
  return (
    <motion.section
      className="relative h-screen flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/hero-background.JPG')`,
        }}
      />
      {/* Teal overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(145, 185, 185, 0.6)',
        }}
      />
      
      {/* Content */}
      <div className="container relative mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {showLogo && (
            <>
              <img 
                src="/assets/logo.png" 
                alt="Saanie's Henna Garden Logo" 
                className="w-48 h-auto mx-auto mb-8"
              />
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                Saanie's Henna Garden
              </h1>
            </>
          )}
          <p className="font-body text-xl md:text-2xl mx-auto mb-8" style={{ color: '#1A4747' }}>
            Blooming with beautiful floral henna designs
          </p>
          {showCta && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PremiumButton variant="primary" size="lg" style={{ backgroundColor: '#1A4747', borderColor: '#1A4747', color: '#FFFFFF' }}>
                View Gallery
              </PremiumButton>
              <PremiumButton variant="outline" size="lg" style={{ borderColor: '#1A4747', color: '#1A4747' }}>
                Book Appointment
              </PremiumButton>
            </div>
          )}
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronUp size={24} color="#1A4747" />
      </motion.div>
    </motion.section>
  );
};
