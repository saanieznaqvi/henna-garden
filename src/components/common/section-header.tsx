import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  darkBackground?: boolean;
  textColor?: string;
}

export const SectionHeader = ({ title, subtitle, darkBackground = false, textColor = "text-primary" }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <div className="flex justify-center mb-6">
        <img
          src={darkBackground ? "/assets/logo.png" : "/assets/logo2.png"}
          alt="Saanie's Henna Garden Logo"
          className="w-20 h-auto"
        />
      </div>
      <h2 className={`font-heading text-3xl mb-4 ${textColor}`}>{title}</h2>
      {subtitle && (
        <p className={`font-body max-w-2xl mx-auto ${textColor}/80`}>{subtitle}</p>
      )}
      <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
    </div>
  );
}; 