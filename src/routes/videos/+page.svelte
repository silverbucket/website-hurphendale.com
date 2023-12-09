<script lang="ts">
  import ContentArea from "$lib/ContentArea.svelte";
  import ListVideos from "$lib/ListVideos.svelte";
  import videoData from "$lib/videos";
</script>

<ContentArea title="Videos" isBackLink={true} linkPath="/" linkText="Home">
  <div class="mt-8 lg:mt-16"></div>

  <ContentArea title="Official">
    <ListVideos idList={videoData.official} responsiveShowOnly={false} />
  </ContentArea>

  <ContentArea title="Modular Jams">
    <ListVideos idList={videoData.modular} responsiveShowOnly={false} />
  </ContentArea>

  <ContentArea title="Deluge Jams">
    <ListVideos idList={videoData.deluge} responsiveShowOnly={false} />
  </ContentArea>
</ContentArea>
