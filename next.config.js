/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-maps.yandex.ru",
        port: "",
        pathname: "/services/constructor/1.0/static/**",
      },
    ],
  },
};

module.exports = nextConfig;
