// next.config.js
const isProd = process.env.NODE_ENV === 'production';

// Habilitar PWA solo en producción (Webpack)
const withPWA = isProd
  ? require('next-pwa')({
      dest: 'public',
      register: true,
      skipWaiting: true,
      fallbacks: { document: '/offline' },
      runtimeCaching: require('next-pwa/cache'),
    })
  : (cfg) => cfg;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  // No declaramos turbopack: usaremos Webpack via CLI flag
};

module.exports = withPWA(nextConfig);
