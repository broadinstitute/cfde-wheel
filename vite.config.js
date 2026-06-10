import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default {
  plugins: [cssInjectedByJsPlugin()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: "src/index.js",
      name: "CfdeWheel",
      formats: ["iife"],
      fileName: () => "cfde-wheel.js"
    }
  }
};
