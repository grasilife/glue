"use strict";

const path = require("path");
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  lintOnSave: true,
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 3001,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "/rest": {
        target: "http://0.0.0.0",
        changeOrigin: true,
        pathRewrite: {
          "^/rest": "",
        },
        // cookiePathRewrite: {
        //   "/iov/subject": "/"
        // },
        // cookieDomainRewrite: {}
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.join(__dirname, "src"));
    // config.module
    //   .rule("md")
    //   .test(/\.md$/)
    //   .use("@vant/markdown-loader");
  },
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: ["@vant/markdown-loader"],
    });
  },
  pages: {
    desktop: {
      entry: "src/desktop/main.js", // page 的入口
      template: "public/index.html", // 模板来源
      filename: "desktop.html", // 在 dist/index.html 的输出
    },
    mobile: {
      entry: "src/mobile/main.js",
      template: "public/index.html",
      filename: "mobile.html",
    },
  },
  productionSourceMap: false,
};
