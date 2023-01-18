"use strict";
const path = require("path");
module.exports = {
  publicPath: "/glue/",
  // outputDir: "../../dist",
  lintOnSave: true,
  devServer: {
    host: "127.0.0.1",
    open: true,
    port: 3001,
    https: false,
    proxy: {
      "^/vue2-preview": {
        target: "http://127.0.0.1:3002",
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("~", path.join(__dirname, "src"));
  },
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: [{ loader: "vue-loader" }, { loader: "@glue/markdown-loader" }]
    });
  },
  productionSourceMap: false
};
