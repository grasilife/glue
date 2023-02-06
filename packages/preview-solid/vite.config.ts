import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  base: "/preview-solid",
  plugins: [solidPlugin()],
  server: {
    port: 3007,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      "~": "/src",
    },
  },
});
