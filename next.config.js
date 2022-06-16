// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
  images: {
    domains: ["source.unsplash.com"],
  },
};
