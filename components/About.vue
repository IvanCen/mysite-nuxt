<template>
  <section :class="[`about`, `about_theme_${getIsThemeLight}`]">
    <div class="container about__container">
      <h2 class="title about__title">Обо мне</h2>
      <div class="about__text-container">
        <p class="about__text">
          Привет, Я Иван – Фронтенд/Веб разработчик из Санкт-Петербурга.
        </p>
        <p class="about__text">
          Я интересуюсь разработкой веб сайтов и прошел курсы "Веб разработки" в
          Яндекс Практикум.
        </p>
        <p class="about__text">
          Готов реализовать интересные проекты с замечательными людьми.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  methods: {
    switchTheme() {
      this.$store.commit('pageTheme/switchTheme')
    },
  },
  computed: {
    getIsThemeLight() {
      return this.$store.getters['pageTheme/getIsThemeLight']
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 350px;
  padding: 40px;

  &_theme_light {
    background-color: white;
    color: black;
  }

  &_theme_dark {
    background-color: #474a4c;
    color: white;
  }

  &__container {
    align-items: normal;
  }

  &__text-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-gap: 20px;
  }

  &__title {
    margin-bottom: 20px;
  }

  &__text {
    font-size: 18px;
  }
}
</style>
