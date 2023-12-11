<script lang="ts">
  export let youtubeId: string;
</script>
<div class="aspect-w-8 aspect-h-4">
  <iframe title="youtube" src="https://www.youtube-nocookie.com/embed/{youtubeId}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
</div>
