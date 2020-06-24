<template>
  <section
    :class="['contacts', `contacts_theme_${getIsThemeLight}`]"
    ref="contacts"
  >
    <div class="contacts__container">
      <h2 class="contacts__title">Контакты</h2>
      <p class="contacts__text">
        Хочешь узнать больше или просто пообщаться? <br />Напиши!
      </p>
      <button-form
        class="contacts__button"
        theme="sky"
        indentDirection="bottom"
        @btnClick="togglePopup"
        >Написать
      </button-form>
      <a
        href="mailto:ivansenkov.web@gmail.com"
        class="contacts__link contacts__email"
        >ivansenkov.web@gmail.com</a
      >
      <a
        href="https://teleg.run/IvanCen"
        class="contacts__link contacts__telegram"
        >Телеграмм</a
      >
    </div>
  </section>
</template>

<script>
import ButtonMain from '~/components/UI/ButtonMain'

export default {
  name: 'about',
  components: {
    'button-form': ButtonMain,
  },
  computed: {
    getIsThemeLight() {
      return this.$store.getters['pageTheme/getIsThemeLight']
    },
  },
  methods: {
    togglePopup() {
      this.$store.commit('popup/togglePopup')
    },
  },
}
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 70px);

  color: #fff;
  padding: 20px;

  &_theme_light {
    background: url('/images/forest-light.jpg') no-repeat center / cover fixed
      white;
  }

  &_theme_dark {
    background: url('/images/forest-dark.jpg') no-repeat center / cover fixed
      #3d4f61;
  }

  &__title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  &__text {
    font-size: 20px;
    margin-bottom: 20px;
  }

  &__link {
    color: red;
  }

  &__button {
    position: relative;
    border: none;
    outline: none;
    transition: opacity 0.2s ease-in;
    border-radius: 20px;
    color: black;

    &:hover {
      opacity: 0.8;
    }
  }

  &__email {
    display: block;
    width: fit-content;
    color: #fff;
    margin-bottom: 10px;
    font-size: 20px;
  }

  &__telegram {
    display: block;
    width: fit-content;
    color: #fff;
    font-size: 20px;
  }

  &__link {
    transition: opacity ease-in 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
