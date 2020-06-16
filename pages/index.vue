<template>
  <div class="wraper">
    <description-section />
    <about-section ref="about" />
    <skill-section />
    <a class="button-up" href="#main">&and;</a>
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
  beforeMount() {
    this.$store.dispatch('project/fetchLessons')
  },

  async fetch({ store }) {
    await store.dispatch('project/fetchLessons')
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
  background-color: #000000;
  border-radius: 50%;
  font-size: 25px;
  text-decoration: none;
  text-align: center;
  line-height: 40px;
  color: #ffffff;
  z-index: 10;
  font-weight: 700;
  transition: opacity 0.1s ease-out;
  border-width: 0 3px 3px 0;
}
</style>
