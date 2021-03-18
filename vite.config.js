import { defineConfig } from "vite";
import svelte from "@svitejs/vite-plugin-svelte";
import windi from "svelte-windicss-preprocess";
const production = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [
        windi.preprocess({
          config: "windi.config.js",
          compile: false,
          mode: production ?  "prod" : "dev" 
          // prefix: "windi-",
          // verbose: true,
          // silent: false,
          // debug: true,
        }),
      ],
      emitCss: true,
      hot: !production,
    }),
  ],
});
