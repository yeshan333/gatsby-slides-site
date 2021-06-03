import React from 'react';
import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>ShanSan-Slides Site</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description"
        content="Cloudys's personal slides site." />
      <meta name="keywords"
        content="Cloudys, slides site, ShanSan" />
      <meta property="og:title" content="ShanSan-Slides Site" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https:slide.shan333.cn" />
      <meta property="og:description"
        content="Cloudys's personal slides site." />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content="en_EN" />
      <meta property="og:site_name" content="ShanSan-Slides Site" />
      <meta property="og:url" content="https:slide.shan333.cn" />
      <meta property="twitter:title" content="ShanSan-Slides Site" />
      <meta property="twitter:description"
        content="Cloudys's personal slides site." />
      <meta property="twitter:site" content="https:slide.shan333.cn" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
    </Helmet>
  );
}

export default Head;