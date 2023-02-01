import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/preview-vue3",
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
    port: 3003,
  },
  resolve: {
    alias: {
      "~": "/src",
    },
  },
});
