"use strict";
const path = require("path");
module.exports = {
  publicPath: "/glue/",
  outputDir: "../../dist",
  lintOnSave: true,
  devServer: {
    open: true,
    port: 3001,
    https: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    proxy: {
      "^/vue2-preview": {
        target: "http://127.0.0.1:3002",
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", path.join(__dirname, "src"));
  },
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: [{ loader: "vue-loader" }, { loader: "@glue/markdown-loader" }]
    });
  },
  pages: {
    desktop: {
      entry: "src/desktop/main.js", // page 的入口
      template: "public/index.html", // 模板来源
      filename: "index.html" // 在 dist/index.html 的输出
    }
    // mobile: {
    //   entry: "src/mobile/main.js",
    //   template: "public/index.html",
    //   filename: "mobile.html"
    // }
  },
  productionSourceMap: false
};
