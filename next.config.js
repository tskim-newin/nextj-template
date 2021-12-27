const { i18n } = require("./next-i18next.config");
const webpack = require("webpack");
const path = require("path");
const withFonts = require("next-fonts");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/docs": {
        page: "/docs",
      },
      "/contact": {
        page: "/contact",
      },
    };
  },
  webpack: (config) => {
    config.resolve.modules = [
      path.resolve("./node_modules"),
      path.resolve("src"),
    ];
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    return config;
  },
};

module.exports = {
  i18n,
};
