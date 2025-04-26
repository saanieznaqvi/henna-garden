import React from 'react';
import { ScrollArrow } from '../common/scroll-arrow';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#2A3635]">
      <div className="text-center">
        <img 
          src="/assets/logo.png" 
          alt="Saanie's Henna Garden Logo" 
          className="w-48 h-auto mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-6xl font-display tracking-widest mb-4 text-white">
          Saanie's Henna Garden
        </h1>
        <p className="text-lg md:text-xl tracking-wider text-white">
          Traditional & Modern Henna Artistry
        </p>
      </div>
      <ScrollArrow />
    </section>
  );
}; 