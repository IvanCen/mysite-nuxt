<template>
  <section class="contacts">
    <div class="contacts__container">
      <h2 class="contacts__title">Контакты</h2>
      <p class="contacts__text">
        Хочешь узнать больше или просто пообщаться? <br />Напиши!
      </p>
      <!--<my-form />-->
      <button-form theme_sky="true" margin-bottom_normal="true"
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
import Form from '~/components/UI/Form'
import ButtonMain from '~/components/UI/ButtonMain'

export default {
  name: 'about',
  components: {
    'my-form': Form,
    'button-form': ButtonMain,
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

  &__button {
    position: relative;
    border: none;
    border-radius: 20px;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: 0.5s;
      border-radius: 20px;
    }

    &:hover:before {
      opacity: 0.8;
      border-radius: 20px;
    }

    &:hover {
      opacity: 1;
      transition: opacity 0.1s ease-in;
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
