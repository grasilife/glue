"use strict";

const path = require("path");
const resolve = (dir) => {
  return path.join(__dirname, "./", dir);
};
module.exports = {
  publicPath: "./",
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 3000,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  configureWebpack: () => ({
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  }),
};
