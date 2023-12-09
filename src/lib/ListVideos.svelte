<script lang="ts">
  import EmbedYoutube from "$lib/EmbedYoutube.svelte";

  export let idList =  [];
  export let responsiveShowOnly: boolean = false;

  function shuffleArray(arr: []): [] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
</script>
<div class="grid sm:grid-cols-2 xl:grid-cols-4">
  {#each responsiveShowOnly ? shuffleArray(idList) : idList as youtubeId, i}
  <div class="mb-4 mt-4 mr-4 {responsiveShowOnly ? i === 0 ? '' : i <= 1 ? 'hidden sm:block' : 'hidden xl:block' : ''}">
    <EmbedYoutube youtubeId={youtubeId} />
  </div>
  {/each}
</div>