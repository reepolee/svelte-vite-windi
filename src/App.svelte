<script>
  import svelteLogo from "./assets/svelte.svg";
  import windiLogo from "./assets/windi.svg";
</script>

<div class="min-h-screen grid place-items-center">
  <div>
    <div class="flex h-24">
      <img src={svelteLogo} alt="Svelte Logo" class="h-24" />
      <img src={windiLogo} alt="WindiCSS Logo" class="h-24" />
    </div>
    <h5>Svelte + Vite + Windi App</h5>
  </div>
</div>

<style>
  h5 {
    @apply text-center text-4xl;
  }
</style>
