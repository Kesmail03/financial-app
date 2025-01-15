import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
	target: "http://50.19.182.206:5000",
	changeOrigin: true,
	secure: false,
      },
    },
  },
  css: {
    postcss: "./postcss.config.js", // Point to your PostCSS configuration
  },
});
