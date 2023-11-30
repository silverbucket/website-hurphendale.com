<script>
  import "../app.css";
</script>

<div class="bg-[url('/background.png')] bg-auto h-screen">
  <div class="h-screen bg-gradient-to-r from-[#d7000066] to-[#d7330066]">
    <div class="grid grid-cols-3 border-2 p-16 border-2">
      <div class=""></div>
      <div></div>
      <div>
        <h1 class="text-3xl text-white p-nickname" about="#me" property="foaf:nick" content="hurphendale">Hurphendale</h1>
      </div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</div>