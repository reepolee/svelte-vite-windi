import { resolve } from 'path';
import { defineConfig} from "vite";
import svelte from "@svitejs/vite-plugin-svelte";
import windi from "svelte-windicss-preprocess";

export default defineConfig(({ command, mode }) => {
  const production = mode === "production";
  return {
    resolve: {
      alias: {
        $components: resolve('src/components'),
        $assets: resolve('src/assets')
      }
    },
      plugins: [
      svelte({
        preprocess: [
          windi.preprocess({
            config: "windi.config.js",
            compile: false,
            mode: production ? "prod" : "dev",
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
  }

});
