<script lang="ts">
  export let title: string = "";
  export let linkPath: string;
  export let linkText: string;
  export let isBackLink: boolean = false;
</script>
<div class="relative rounded-2xl bg-gradient-to-r from-[#ffffff40] to-[#00000020] p-4 mb-4 lg:mb-16 text-white">
  {#if title}
    <div class="text-center">
      <h2 class="font-gruppo text-lg sm:text-2xl md:text-3xl xl:text-4xl uppercase">{title}</h2>
    </div>
  {/if}
  {#if linkPath}
    <div class="absolute top-3 sm:top-5 {isBackLink ? 'left-4' : 'right-4'}">
      <a class="link text-sm sm:text-lg md:text-xl lg:text-2xl" href={linkPath}>
        {#if isBackLink}
          <span class="pr-1">&#8592;</span>
        {/if}
        {#if linkText}{linkText}{:else}{linkPath}{/if}
        {#if !isBackLink}
          <span class="pl-1">&#8594;</span>
        {/if}
      </a>
    </div>
  {/if}
  <div>
    <slot/>
  </div>
</div>