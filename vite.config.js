import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/front-4th-chapter1-1/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    exclude: ["**/e2e/**", "**/*.e2e.spec.js", "**/node_modules/**"],
  },
});
