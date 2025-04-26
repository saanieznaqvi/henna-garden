import React from 'react';
import { Helmet } from 'react-helmet';

export const MetaTags = () => {
  const siteUrl = 'https://saanieshennagarden.vercel.app';
  const previewImage = `${siteUrl}/assets/hero-background.JPG`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Saanie's Henna Garden - Professional Henna Artistry</title>
      <meta name="title" content="Saanie's Henna Garden - Professional Henna Artistry" />
      <meta name="description" content="Professional henna artistry services for weddings, parties, and special occasions. Book your appointment today!" />
      <link rel="icon" href="/assets/logo2.png" />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Saanie's Henna Garden" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content="Saanie's Henna Garden - Professional Henna Artistry" />
      <meta property="og:description" content="Professional henna artistry services for weddings, parties, and special occasions. Book your appointment today!" />
      <meta property="og:image" content={previewImage} />
      <meta property="og:image:secure_url" content={previewImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Saanie's Henna Garden - Professional Henna Services" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@saanieshennagarden" />
      <meta name="twitter:creator" content="@saanieshennagarden" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content="Saanie's Henna Garden - Professional Henna Artistry" />
      <meta name="twitter:description" content="Professional henna artistry services for weddings, parties, and special occasions. Book your appointment today!" />
      <meta name="twitter:image" content={previewImage} />
      <meta name="twitter:image:alt" content="Saanie's Henna Garden - Professional Henna Services" />
    </Helmet>
  );
}; 