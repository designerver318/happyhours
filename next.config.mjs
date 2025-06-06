/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
