<template>
  <div class="wraper">
    <description-section />
    <about-section ref="about" />
    <skill-section />
    <a :class="['button-up', `button-up_theme_${getIsThemeLight}`]" href="#main"
      >&and;</a
    >
  </div>
</template>

<script>
import About from '~/components/About'
import Skill from '~/components/Skill'
import Description from '~/components/Description'

export default {
  components: {
    'about-section': About,
    'skill-section': Skill,
    'description-section': Description,
  },
  computed: {
    getIsThemeLight() {
      return this.$store.getters['pageTheme/getIsThemeLight']
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
