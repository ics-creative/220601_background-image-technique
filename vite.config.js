const { resolve } = require("path");

const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    outDir: "docs",
  },
  base: "/",
  server: {
    port: 3331,
  },
});
