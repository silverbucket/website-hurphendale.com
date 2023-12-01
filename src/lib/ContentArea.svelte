<script lang="ts">
  export let title: string = "";
  export let moreLink: string;
  export let moreText: string;

  export let backLink: string;
  export let backText: string;
</script>
<div class="relative rounded-2xl bg-gradient-to-r from-[#ffffff40] to-[#00000020] p-4 mb-4 lg:mb-16 text-white">
  {#if title}
    <div class="text-center">
      <h2 class="font-gruppo text-lg sm:text-2xl md:text-3xl xl:text-4xl uppercase">{title}</h2>
    </div>
  {/if}
  {#if backLink}
    <div class="absolute top-3 sm:top-5 left-4">
      <a class="link text-sm sm:text-lg md:text-xl lg:text-2xl" href={backLink}>
        <span class="pr-1">&#8592;</span>
        {#if backText}{backText}{:else}{backLink}{/if}
      </a>
    </div>
  {/if}
  {#if moreLink}
    <div class="absolute top-3 sm:top-5 right-4">
      <a class="link text-sm sm:text-lg md:text-xl lg:text-2xl" href={moreLink}>
        {#if moreText}{moreText}{:else}{moreLink}{/if}
        <span class="pl-1">&#8594;</span>
      </a>
    </div>
  {/if}
  <div>
    <slot/>
  </div>
</div>