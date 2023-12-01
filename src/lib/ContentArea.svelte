<script lang="ts">
  export let title: string = "";
</script>
<div class="rounded-2xl bg-gradient-to-r from-[#ffffff40] to-[#00000020] p-4 mb-8 sm:mb-16 text-white">
  {#if title}
    <div class="text-center">
      <h1 class="font-gruppo text-1xl sm:text-2xl md:test-3xl uppercase">{title}</h1>
    </div>
  {/if}
  <div class="text-xs">
    <slot/>
  </div>
</div>