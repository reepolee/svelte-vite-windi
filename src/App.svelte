<script>
  import svelteLogo from "$assets/svelte.svg";
  import viteLogo from "$assets/vite.svg";
  import windiLogo from "$assets/windi.svg";
  import Footer from "$components/Footer.svelte";
  import TwitterIcon from "$components/TwitterIcon.svelte";
  import GithubIcon from "$components/GithubIcon.svelte";
</script>

<main class="flex flex-col apply min-h-screen text-gray-600">
  <div class="grid place-items-center flex-grow h-100">
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
  </div>
  <Footer>
    <div class="flex space-x-4">
      <a href="https://github.com/reepolee" alt="Reepolee on GitHub"><GithubIcon /></a>
      <a href="https://twitter.com/alesvaupotic" alt="Aleš Vaupotič on Twitter"><TwitterIcon /></a>
    </div>
  </Footer>
</main>

<style global lang="postcss">
  @import "style.css";

  :global(footer) {
    @apply bg-teal-500;
  }

  h5 {
    @apply text-center text-4xl;
  }

  img {
    @apply h-24;
  }
</style>
