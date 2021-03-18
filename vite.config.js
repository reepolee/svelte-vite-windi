import { defineConfig } from "vite";
import svelte from "@svitejs/vite-plugin-svelte";
import windi from "svelte-windicss-preprocess";

const production = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [
        windi.preprocess({
          compile: false,
          prefix: "windi-",
        }),
      ],
      emitCss: true,
      hot: !production,
    }),
  ],
});
