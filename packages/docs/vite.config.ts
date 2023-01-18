import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("glue-"),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "~": "/src",
    },
  },
  server: {
    port: 3001,
    proxy: {
      "^/vue2-preview": {
        target: "http://127.0.0.1:3002",
        changeOrigin: true,
      },
    },
  },
});
