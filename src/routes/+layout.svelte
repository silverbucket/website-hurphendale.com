<script>
  import "../app.css";
  import ContentArea from "$lib/ContentArea.svelte";
</script>

<div class="bg-gradient-to-r from-[#d7000090] to-[#d7330090]">
  <div class="bg-black bg-opacity-40 pt-8 pl-8 pr-8 sm:pt-16 sm:pl-16 sm:pr-16">
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div class="rounded-2xl bg-gradient-to-r from-[#ffffff40] to-[#44444440] pt-4 pb-4 pl-6 pr-6 grid grid-cols-5 max-w-lg gap-8">
      <div>
        <a target="_blank" href="https://open.spotify.com/artist/2gI8ydRR48dn8MwQ9hzQ2U?si=l8QIZSG7TlGOqjfkB5dZaA">
          <img src="/icons/spotify_icon.svg" />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://hurphendale.bandcamp.com">
          <img src="/icons/bandcamp_icon.svg" />
        </a>
      </div>
      <div>
        <a rel="me" target="_blank" href="https://www.youtube.com/channel/UCcMrCmTWJGn_QY3lNKidhwg">
          <img src="/icons/youtube_icon.svg" />
        </a>
      </div>
      <div>
        <a rel="me" target="_blank" href="https://www.facebook.com/hurphendale">
          <img src="/icons/fb_icon.svg" />
        </a>
      </div>
      <div>
        <a rel="me" target="_blank" href="https://www.soundcloud.com/hurphendale">
          <img src="/icons/soundcloud_icon.svg" />
        </a>
      </div>
    </div>
    <div class="pt-2 text-center">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 p-nickname"
          about="#me" property="foaf:nick" content="hurphendale">Hurphendale</h1>
    </div>
  </div>
  <div class="pt-8 sm:pt-16">
    <slot />
  </div>
  <footer>
    <ContentArea>
      <div class="text-center text-sm lg:text-2xl">
        <div about="#me">
          <p>
            Hurphendale is the solo electronic project of American musician <span about="#me" class="p-name" property="foaf:name" typeof="foaf:Person">Nick Jennings</span>.
            Blending and mixing melodic ideas, spun into the gravity wells of glitchy electronic beats.
          </p>
        </div>
        <p>Contact <a about="#me" class="link u-email" rel="foaf:mbox" href="mailto:info@hurphendale.com">info@hurphendale.com</a></p>
      </div>
    </ContentArea>
    <div class="text-white italic text-xs sm:text-sm">
      <p>
        <span><i>© Hurphendale 2021</i></span>
        <span>- Design by <a class="link" target="_blank" href="https://silverbucket.net">silverbucket.net</a></span>
        <span>- View this page as an <a class="link" target="_blank" href="http://indiewebify.me/validate-h-card/?url=https%3A%2F%2Fhurphendale.com">h-card</a></span>
      </p>
    </div>
    <div class="hidden">
      <div>
        <a about="#me" class="u-url u-uid" rel="foaf:homepage" href="https://hurphendale.com">homepage</a>
        <a about="#me" rel="foaf:depiction" class="u-photo" href="https://hurphendale.com/res/hurphendale.png">photo</a>
        <span about="#me" class="p-category">music</span>
        <span about="#me" class="p-category">artist</span>
        <span about="#me" class="p-category">electronica</span>
        <span about="#me" class="p-category">performance</span>
      </div>
    </div>
  </footer>
  </div>
</div>
