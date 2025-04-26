import React from 'react';
import { ChevronDown } from 'lucide-react';

export const ScrollArrow = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      onClick={scrollToContent}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-accent uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-6 h-6 text-accent" />
      </div>
    </div>
  );
}; 