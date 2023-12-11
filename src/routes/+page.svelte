<script>
  import ContentArea from "$lib/ContentArea.svelte";
  import ListVideos from "$lib/ListVideos.svelte";
  import News from "$lib/News.svelte";
  import videoData from "$lib/videos";
</script>

<News limit={1} linkPath="/news" linkText="More" />

<ContentArea title="Official Music Videos" linkPath="/videos" linkText="More">
  <ListVideos idList={videoData.official.slice(0, 4)} responsiveShowOnly={true} />
</ContentArea>

<ContentArea title="Modular Jams" linkPath="/videos" linkText="More">
  <ListVideos idList={videoData.modular.slice(0, 4)} responsiveShowOnly={true} />
</ContentArea>

<ContentArea title="Deluge Jams" linkPath="/videos" linkText="More">
  <ListVideos idList={videoData.deluge.slice(0, 4)} responsiveShowOnly={true} />
</ContentArea>

