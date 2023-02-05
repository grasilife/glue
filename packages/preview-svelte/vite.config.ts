import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/preview-svelte",
  plugins: [svelte()],
  server: {
    port: 3005,
  },
  resolve: {
    alias: {
      "~": "/src",
    },
  },
});
