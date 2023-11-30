<script>
  import "../app.css";
  import Fa from 'svelte-fa'
  import { faFacebook, faSpotify, faBandcamp, faYoutube, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
</script>

<div class="bg-[url('/background.png')] bg-auto h-screen">
  <div class="h-screen bg-gradient-to-r from-[#d7000088] to-[#d7330088]">
    <div class="grid grid-cols-3 pt-14 pl-16 pr-16 mb-10">
      <div class="rounded-2xl bg-white pt-4 pb-4 pl-6 bg-opacity-20 grid grid-cols-5">
        <a target="_blank" href="https://open.spotify.com/artist/2gI8ydRR48dn8MwQ9hzQ2U?si=l8QIZSG7TlGOqjfkB5dZaA">
          <Fa size="3x" color="black" icon={faSpotify} />
        </a>
        <a target="_blank" href="https://hurphendale.bandcamp.com">
          <Fa size="3x" icon={faBandcamp} />
        </a>
        <a rel="me" target="_blank" href="https://www.youtube.com/channel/UCcMrCmTWJGn_QY3lNKidhwg">
          <Fa size="3x" icon={faYoutube} />
        </a>
        <a rel="me" target="_blank" href="https://www.facebook.com/hurphendale">
          <Fa size="3x" icon={faFacebook} />
        </a>
        <a rel="me" target="_blank" href="https://www.soundcloud.com/hurphendale">
          <Fa size="3x" icon={faSoundcloud} />
        </a>
      </div>
      <div></div>
      <div>
        <h1 class="text-5xl font-bold text-gray-100 font-gruppo p-nickname" about="#me" property="foaf:nick" content="hurphendale">Hurphendale</h1>
      </div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</div>