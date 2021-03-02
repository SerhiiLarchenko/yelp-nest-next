/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  env: {
    API_URL: process.env.REACT_APP_API_URL,
  },
};

const imagesConfig = {
  // bitmap images should be imported like path
  fileExtensions: ['jpg', 'jpeg', 'png', 'webp'],
  // svg files should be imported like React component
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

const plugins = [withImages(imagesConfig)];

module.exports = withPlugins(plugins, nextConfig);
