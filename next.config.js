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
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
  sassOptions: {
    prependData: `@import "./src/shared/styles/variable.scss"; @import "./src/shared/styles/_mantine.scss"; @import "./src/shared/styles/mixin.scss";`,
  },
};

module.exports = nextConfig;
