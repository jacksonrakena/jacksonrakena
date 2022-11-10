/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["app.gradekeeper.xyz", "d.lu.je"],
  },
};

module.exports = nextConfig;
