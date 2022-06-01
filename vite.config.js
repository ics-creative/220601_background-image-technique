const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    outDir: "../docs",
    minify: false,
  },
  base: "/220601_background-image-technique",
  root: "src",
  server: {
    port: 3331,
  },
});
