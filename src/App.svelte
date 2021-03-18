<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "./assets/vite.svg";
  import windiLogo from "./assets/windi.svg";
</script>

<main class="apply min-h-screen grid place-items-center text-gray-600">
  <div>
    <div class="flex h-24 justify-between">
      <img src={svelteLogo} alt="Svelte Logo" />
      <img src={viteLogo} alt="Vite Logo" />
      <img src={windiLogo} alt="WindiCSS Logo" />
    </div>
    <h5 class="pt-12">
      <span class="text-svelte-500"> Svelte</span>
      +
      <span class="text-vite-500"> Vite</span>
      +
      <span class="text-windi-500">Windi</span>
    </h5>
  </div>
</main>

<style>
  h5 {
    @apply text-center text-4xl;
  }

  img {
    @apply h-24;
  }
</style>
