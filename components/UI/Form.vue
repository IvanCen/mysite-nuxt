<template>
  <form class="form" method="post">
    <div class="form__subject-container">
      <label class="form__label" for="subj">Тема:</label>
      <input
        v-model="subj"
        class="form__input"
        id="subj"
        type="text"
        placeholder="Тема письма"
        required
        @input="$emit('input', $event.target.value)"
      />
    </div>
    <div class="form__body-container">
      <label class="form__label form__body-label" for="text">Текст:</label>
      <textarea
        v-model="text"
        class="form__input form__textarea"
        id="text"
        placeholder="Сообщение"
        required
      ></textarea>
    </div>
    <button @click.prevent="sendForm" class="form__button" type="submit">
      Отправить письмо
    </button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  methods: {
    sendForm() {
      window.open(
        `mailto:ivansenkov.web@gmail.com?subject=${this.subj}&body=${this.text}`
      )
    },
  },
  data() {
    return {
      subj: '',
      text: '',
    }
  },
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
  }

  &__input {
    min-width: 196px;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    padding: 5px;
  }

  &__textarea {
    color: #000000;
    min-height: 200px;
  }

  &__body-label {
    margin-bottom: 5px;
  }
}
</style>
