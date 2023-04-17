import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  root: resolve("src"),
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
  },
  server: {
    host: true,
    port: 3333,
  },
  resolve: {
    alias: {
      "@": resolve("src")
    },
  },
  plugins: [react()],
});
