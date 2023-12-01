<script lang="ts">
  import NewsItem from "$lib/NewsItem.svelte";
  import newsData from "$lib/news.ts";

  export let limit: number = 0;

  $: items = limit > 0 ? newsData.slice(0, limit) : newsData;
</script>

<div class="pb-4 pt-4">
  {#each items as item, i}
  <div class={i < items.length - 1? "mb-8" : ""}>
    <NewsItem title={item.title} subtitle={item.subtitle} date={item.date}
              youtubeId={item.youtubeId}
              spotifyId={item.spotifyId}
              bandcampId={item.bandcampId}
              image={item.image}
              link={item.link}
    />
  </div>
  {#if limit === 0 && i < items.length - 1 }
    <div class="opacity-20 rounded bg-black w-[102%] -ml-4 p-10 mb-8">
    </div>
  {/if}
  {/each}
</div>