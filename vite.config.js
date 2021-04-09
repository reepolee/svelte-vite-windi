import { resolve } from "path";
import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import windi from "vite-plugin-windicss";

export default defineConfig(({ command, mode }) => {
  const production = mode === "production";
  return {
    resolve: {
      alias: {
        $components: resolve("src/components"),
        $assets: resolve("src/assets"),
      },
    },
    plugins: [
      windi(),
      svelte({
        hot: !production,
      }),
    ],
  };
});
