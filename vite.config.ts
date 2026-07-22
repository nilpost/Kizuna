import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Single static-site config. The app is a client-only SPA deployed to
// GitHub Pages behind a custom domain, so base is "/" (served at the domain
// root, not a project subpath). client/index.html is the entry point.
export default defineConfig({
  plugins: [react()],
  root: "client",
  build: {
    outDir: "../dist/public",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
    },
  },
  base: "/",
});
