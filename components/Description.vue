<template>
  <section :class="['description']">
    <!--     <div :class="['description__photo', `description__photo_theme_${getIsThemeLight}`]"></div>-->
    <div class="description__container-header"></div>
  </section>
</template>

<script>
export default {
  name: 'Description',
  computed: {
    getIsThemeLight() {
      return this.$store.getters['pageTheme/getIsThemeLight']
    },
  },
}
</script>

<style lang="scss" scoped>
.description {
  position: relative;
  color: white;
  margin: 0 auto;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    padding-bottom: 100%;
    width: 100%;
    height: 100%;

    &_theme_light {
      background: url('/images/peak-mountain-light.jpg') no-repeat center /
        cover fixed white;
    }

    &_theme_dark {
      background: url('/images/peak-mountain-dark.jpg') no-repeat center / cover
        fixed #3d4f61;
    }
  }

  &_theme_light {
    background: url('/images/peak-mountain-light.jpg') no-repeat center / cover
      fixed white;
  }

  &_theme_dark {
    background: url('/images/peak-mountain-dark.jpg') no-repeat center / cover
      fixed #3d4f61;
  }

  &__container-header {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    z-index: 1;
  }

  &__title {
    font-size: 36px;
    margin-bottom: 50px;

    @media screen and (max-width: 500px) {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }

  &__subtitle {
    font-size: 32px;
    font-weight: normal;

    @media screen and (max-width: 500px) {
      font-size: 23px;
    }

    &_border {
      border-bottom: 1px solid white;

      /*@media screen and (max-width: 500px) {
          border-bottom: none;
        }*/
    }
  }

  &__image {
    position: absolute;
    transform: translateY(30%);
    max-width: 400px;
    max-height: 400px;
    filter: brightness(0) invert(1);

    @media screen and (max-width: 500px) {
      max-width: 200px;
      max-height: 200px;
      transform: translateY(57%);
    }
  }
}
</style>
