<template>
  <form class="form" action="https://formspree.io/meqrknjg" method="post">
    <div class="form__subject-container">
      <label class="form__label" for="email">Email</label>
      <input class="form__input" id="email" type="email" />
    </div>
    <div class="form__body-container">
      <label class="form__label form__body-label" for="text">Текст:</label>
      <textarea
        class="form__input form__textarea"
        id="text"
        name="Body"
      ></textarea>
    </div>
    <button class="form__button" type="submit">Отправить письмо</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &__body-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  &__subject-container {
    margin-bottom: 10px;
  }

  &__button {
    max-width: 200px;
    height: 30px;
    border-radius: 5px;
    background-color: #a7a08d;
  }

  &__input {
    background: transparent;
    color: white;
    border-radius: 6px;
  }

  &__textarea {
  }

  &__body-label {
    margin-bottom: 5px;
  }
}
</style>
