import type { Configuration } from 'webpack';
import type { NextConfig } from 'next';

const config: NextConfig = {
  webpack: (config: Configuration) => {
    config.resolve!.fallback = { 
      fs: false, 
      net: false, 
      tls: false 
    };
    return config;
  },
};

module.exports = config;