<template>
  <section :class="['skill', `skill_theme_${getIsThemeLight}`]">
    <div class="skill__icon-container">
      <div class="skill__item ">
        <img class="skill__icon" src="images\logo\html.svg" alt="icon_html" />
        <p class="skill__item-text">HTML5</p>
      </div>
      <div class="skill__item ">
        <img class="skill__icon" src="images\logo\css.svg" alt="icon_css" />
        <p class="skill__item-text">CSS3</p>
      </div>
      <div class="skill__item ">
        <img class="skill__icon" src="images\logo\js.svg" alt="icon_js" />
        <p class="skill__item-text">Java Script</p>
      </div>
      <div class="skill__item ">
        <img
          class="skill__icon"
          src="images\logo\nodejs.svg"
          alt="icon_nodejs"
        />
        <p class="skill__item-text">Node.js</p>
      </div>
      <div class="skill__item ">
        <img class="skill__icon" src="images\logo\vue.png" alt="icon_vue" />
        <p class="skill__item-text">Vue</p>
      </div>
      <div class="skill__item ">
        <img class="skill__icon" src="images\logo\nuxt.svg" alt="icon_nuxt" />
        <p class="skill__item-text">Nuxt</p>
      </div>
      <div class="skill__item ">
        <img class="skill__icon" src="images\logo\figma.svg" alt="icon_figma" />
        <p class="skill__item-text">Figma</p>
      </div>
      <div class="skill__item ">
        <img class="skill__icon" src="images\logo\git.svg" alt="icon_git" />
        <p class="skill__item-text">Git</p>
      </div>
      <div class="skill__item ">
        <img
          class="skill__icon"
          src="images\logo\webpack.svg"
          alt="icon_webpack"
        />
        <p class="skill__item-text">Webpack</p>
      </div>
      <div class="skill__item ">
        <img class="skill__icon" src="images\logo\bem.svg" alt="icon_bem" />
        <p class="skill__item-text">BEM</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skill',
  computed: {
    getIsThemeLight() {
      return this.$store.getters['pageTheme/getIsThemeLight']
    },
  },
}
</script>

<style lang="scss" scoped>
.skill {
  color: white;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 40px 20px;

  @media screen and (max-width: 500px) {
    padding: 20px 10px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
  }

  &__title {
    text-align: center;
    margin-bottom: 40px;
  }

  &__text {
    text-align: center;
    font-size: 24px;
    margin: 0 0 30px 0;
  }

  &__icon-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-gap: 20px;

    @media screen and (max-width: 1025px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(90px, 2fr));
      grid-gap: 10px;
    }

    @media screen and (max-width: 900px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(80px, 2fr));
      grid-gap: 5px;
    }
  }

  &__icon {
    position: relative;
    width: 125px;
    height: 125px;
    margin-bottom: 10px;

    @media screen and (max-width: 1025px) {
      width: 100px;
      height: 100px;
    }

    @media screen and (max-width: 900px) {
      width: 70px;
      height: 70px;
      margin-bottom: 0;
    }
  }

  &__item-text {
    font-size: 24px;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }

  &__item:hover .skill__item-text {
    opacity: 1;
  }
}
</style>
