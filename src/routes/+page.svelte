<script>
  import ContentArea from "$lib/ContentArea.svelte";
  import ListVideos from "$lib/ListVideos.svelte";

  const videos = {
    'official': [
      'HY8hrtxplac',
      'lJpqPOwh5vM',
      'F34CAOld72g',
      '8xSKNknrBR0',
      '7iy5QsisZ5w'
    ],
    'modular': [
      'yLz3L4YLfS4"',
      'uJTZ_s0Oe9s',
      'g3rGywGJyUI',
      'wVJZs-oe3M8'
    ],
    'deluge': [
      '5kkBi6I2oT8',
      'omvufDq7fkY',
      'CDBVkKm1_Vk',
      'lhA_SgGU8OM'
    ]
  };
</script>

<ContentArea>
  Hello World
</ContentArea>

<ContentArea title="Official Music Videos">
  <ListVideos idList={videos.official.slice(0, 4)} />
</ContentArea>

<ContentArea title="Modular Jams">
  <ListVideos idList={videos.modular.slice(0, 4)} />
</ContentArea>

<ContentArea title="Deluge Jams">
  <ListVideos idList={videos.deluge.slice(0, 4)} />
</ContentArea>

