const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    outDir: "../docs",
    minify: false,
  },
  base: "/",
  root: "src",
  server: {
    port: 3331,
  },
});
