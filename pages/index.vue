<template>
  <div class="wraper">
    <swiper></swiper>
  </div>
</template>

<script>
import About from '~/components/About'
import Skill from '~/components/Skill'
import Description from '~/components/Description'
import ScrollToComponent from '~/components/UI/ScrollToComponent'
import ButtonDown from '~/components/UI/ButtonDown'
import Swiper from '~/components/UI/Swiper'

export default {
  data() {
    return {}
  },
  components: {
    'description-section': Description,
    'about-section': About,
    'skill-section': Skill,
    'scroll-to-component': ScrollToComponent,
    'button-down': ButtonDown,
    swiper: Swiper,
  },
  methods: {
    scroll() {
      this.$refs.element.scrollTo()
    },
  },
  computed: {
    getIsThemeLight() {
      return this.$store.getters['pageTheme/getIsThemeLight']
    },
    getScrollToDescription() {
      return this.$store.getters['scroll/getScrollToDescription']
    },
  },
}
</script>

<style scoped lang="scss">
.button-up {
  position: fixed;
  bottom: 40px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 25px;
  text-decoration: none;
  text-align: center;
  line-height: 40px;
  z-index: 10;
  font-weight: 700;
  transition: opacity 0.1s ease-out;
  border-width: 0 3px 3px 0;

  &_theme_light {
    background-color: white;
    color: black;
  }

  &_theme_dark {
    background-color: #474a4c;
    color: white;
  }
}
</style>
