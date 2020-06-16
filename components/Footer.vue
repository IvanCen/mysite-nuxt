<template>
  <footer class="footer">
    <p class="footer__author">
      Copyright &#169; 2020 Ivan Senkov. Made with &#9829; on
      <a href="https://ru.nuxtjs.org/" class="link footer__link"
        >Nuxt.<span class="footer__link_theme_grass">js</span></a
      >
    </p>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: #828282;
  padding: 10px;

  &__author {
    font-size: 14px;
  }

  &__link {
    color: white;

    &_theme_grass {
      color: #00c58e;
    }
  }
}
</style>
