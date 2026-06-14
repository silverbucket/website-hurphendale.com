<script lang="ts">
  export let youtubeId: string;
</script>
<div class="aspect-[8/4]">
  <iframe title="youtube" class="h-full w-full" src="https://www.youtube-nocookie.com/embed/{youtubeId}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
</div>
