<script lang="ts">
  import EmbedVideo from "$lib/EmbedVideo.svelte";

  export let idList =  [];
</script>
<div class="grid sm:grid-cols-2 lg:grid-cols-4">
  {#each idList as youtubeId}
    <EmbedVideo youtubeId={youtubeId} />
  {/each}
</div>