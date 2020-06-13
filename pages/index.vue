<template>
  <div class="wraper">
    <description-section />
    <about-section />
    <skill-section />
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
  data() {
    return {
      text: '',
    }
  },
}
</script>

<style scoped lang="scss"></style>
