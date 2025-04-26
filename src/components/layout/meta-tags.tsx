import React from 'react';
import { Helmet } from 'react-helmet';

export const MetaTags = () => {
  const siteUrl = 'https://saanieshennagarden.vercel.app';
  const previewImage = `${siteUrl}/assets/logo2.png`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Saanie's Henna Garden - Professional Henna Artistry</title>
      <meta name="title" content="Saanie's Henna Garden - Professional Henna Artistry" />
      <meta name="description" content="Professional henna artistry services for weddings, parties, and special occasions. Book your appointment today!" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content="Saanie's Henna Garden - Professional Henna Artistry" />
      <meta property="og:description" content="Professional henna artistry services for weddings, parties, and special occasions. Book your appointment today!" />
      <meta property="og:image" content={previewImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content="Saanie's Henna Garden - Professional Henna Artistry" />
      <meta property="twitter:description" content="Professional henna artistry services for weddings, parties, and special occasions. Book your appointment today!" />
      <meta property="twitter:image" content={previewImage} />
    </Helmet>
  );
}; 