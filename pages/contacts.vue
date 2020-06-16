<template>
  <section ref="contacts" class="contacts">
    <div class="contacts__container">
      <h2 class="contacts__title">Контакты</h2>
      <p class="contacts__text">
        Хочешь узнать больше или просто пообщаться? <br />Напиши!
      </p>
      <p class="contacts__text">
        Хочешь узнать кто я? <br />
        <span class="contacts__link" @click="openAboutSection">Посмотри!</span>
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
  methods: {
    openAboutSection() {
      //this.$router.push(`/`);
      this.$refs.contacts.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    },
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
  height: calc(100vh - 80px);
  background: url('/images/3.jpg') no-repeat center / cover fixed;
  color: #fff;
  padding: 20px;

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
