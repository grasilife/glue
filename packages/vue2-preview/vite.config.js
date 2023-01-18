import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
// import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue2-preview",
  //dynamicImportVars为了支持vue2的路由懒加载
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("glue-"),
        },
      },
    }),
  ],
  server: {
    port: 3002,
  },
  resolve: {
    alias: {
      "~": "/src",
    },
  },
  // build: {
  //   outDir: "../../dist/vue2-preview",
  //   file: "vue2.index",
  // },
});
