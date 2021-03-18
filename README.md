# Svelte + Vite + Windi

This template should help get you started developing with Svelte in Vite, styled by WindiCSS.

![Svelte Vite Windi](https://raw.githubusercontent.com/reepolee/svelte-vite-windi/main/svelte-vite-windi.jpg)

## Setup

```bash
npx degit reepolee/svelte-vite-windi#main svelte-app
cd svelte-app
npm i
npm run dev -- --open
```

## Windi config

Check out the extended colors in `windi.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        svelte: {
          100: "#ffece6",
          500: "#ff3e00",
          700: "#bf2e00",
        },
        vite: {
          500: "#646cff",
          700: "#747bff",
        },
        windi: {
          500: "#0ea5e9",
          700: "#25b3f5",
        },
      },
    },
  },
};
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)  
[Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)  
[WindiCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)

## Credits

[Svelte](https://svelte.dev)  
[Vite](https://vitejs.dev)  
[WindiCSS](https://windicss.org/)
