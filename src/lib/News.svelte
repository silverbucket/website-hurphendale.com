<script lang="ts">
  import NewsItem from "$lib/NewsItem.svelte";
  import ContentArea from "$lib/ContentArea.svelte";
  import newsData from "$lib/news";

  export let limit: number = 0;
  export let linkPath: string;
  export let linkText: string;
  export let isBackLink: boolean = false;

  $: items = limit > 0 ? newsData.slice(0, limit) : newsData;

  const wrapperClass = "md:pl-8 md:pr-8 lg:pl-32 lg:pr-32 xl:pl-64 xl:pr-64"
</script>

<ContentArea title="News" {linkPath} {linkText} {isBackLink}>
  <div class="mt-4 lg:mt-8"></div>
  {#each items as item, i}
  <div class={i < items.length - 1 ? `mb-8 ${wrapperClass}` : wrapperClass}>
    <NewsItem title={item.title} subtitle={item.subtitle} date={item.date}
              youtubeId={item.youtubeId}
              spotifyId={item.spotifyId}
              bandcampId={item.bandcampId}
              image={item.image}
              link={item.link}
              linkText={item.linkText}
    />
  </div>
  {/each}
</ContentArea>