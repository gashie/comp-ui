// vite.config.js
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "@redux": path.resolve(__dirname, "redux"),
      // "@/": path.resolve(__dirname, "src"),
      // "./": path.resolve(__dirname, "src"),
    },
  },

  server: {
    proxy: {
      "/api/v1/comp/": {
        target: `http://194.5.157.163:9006`,
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api\/v1\/comp\/, ""),
      },
    },
  },

  // Customize Babel options
  // babel: {
  //   presets: ["@babel/preset-react"],
  //   plugins: ["@babel/plugin-transform-runtime"],
  // },
});
