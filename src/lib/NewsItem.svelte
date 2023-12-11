<script lang="ts">
  import EmbedYoutube from "$lib/EmbedYoutube.svelte";
  import EmbedSpotify from "$lib/EmbedSpotify.svelte";
  import ContentArea from "$lib/ContentArea.svelte";

  export let title: string;
  export let subtitle: string;
  export let date: string;
  export let youtubeId: string = "";
  export let spotifyId: string = "";
  export let bandcampId: string = "";
  export let image: string = "";
  export let link: string = "";
  export let linkText: string = "";
</script>

<ContentArea>
  <div>
    <h2 class="font-gruppo text-sm sm:text-1xl md:text-2xl xl:text-3xl uppercase md:mb-4">
      {title}
      <span class="text-sm md:text-xl">{#if subtitle}<br/>{/if}{subtitle}</span>
    </h2>

    <div>
      {#if link && !bandcampId}
        <div class="text-center">
          <a target="_blank" href={link}>
        {#if image}
            <img alt={title} class="ml-auto mr-auto" src="{image}" />{linkText}
        {/if}
          </a>
        </div>
      {/if}
      {#if youtubeId}
        <EmbedYoutube youtubeId={youtubeId} />
      {:else if spotifyId}
        <EmbedSpotify spotifyId={spotifyId} />
      {/if}
    </div>
        <p class="text-xs md:text-lg">
          {date}
        </p>
  </div>
</ContentArea>
