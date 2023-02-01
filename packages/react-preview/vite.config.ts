import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-preview",
  plugins: [react()],
  server: {
    port: 3004,
  },
  resolve: {
    alias: {
      "~": "/src",
    },
  },
});
