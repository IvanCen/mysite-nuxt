<template>
  <footer :class="[`footer`, `footer_theme_${getIsThemeLight}`]">
    <p :class="['footer__text', `footer__text_theme_${getIsThemeLight}`]">
      Copyright &#169; {{ year }} Ivan Senkov.
    </p>
    <p
      :class="[
        'footer__text',
        'footer__text_indention',
        `footer__text_theme_${getIsThemeLight}`,
      ]"
    >
      Made with &#9829; on
      <a
        href="https://ru.nuxtjs.org/"
        :class="[
          'link',
          'footer__link',
          `footer__link_theme_${getIsThemeLight}`,
        ]"
        >Nuxt.<span class="footer__link_theme_grass">js</span></a
      >
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
  computed: {
    getIsThemeLight() {
      return this.$store.getters['pageTheme/getIsThemeLight']
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }

  &_theme_light {
    background-color: white;
  }

  &_theme_dark {
    background-color: #474a4c;
  }

  &__text {
    font-size: 14px;

    &_theme_light {
      color: black;
    }

    &_theme_dark {
      color: white;
    }

    &_indention {
      padding-left: 10px;

      @media screen and (max-width: 500px) {
        padding-left: 0;
        padding-top: 5px;
      }
    }
  }

  &__link {
    &_theme_light {
      color: black;
    }

    &_theme_dark {
      color: white;
    }

    &_theme_grass {
      color: #00c58e;
    }
  }
}
</style>
