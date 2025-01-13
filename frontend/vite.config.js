import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://18.237.243.243:5000",
      changeOrigin: true,
      secure: false,
    },
    css: {
      postcss: "./postcss.config.js", // Point to your PostCSS configuration
    },
  },
});
