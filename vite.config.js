/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";

export default defineConfig({
  base: "",
  root: "src",
  build: {
    outDir: "../dist",
  },
  server: {
    port: 3000,
  },
});
