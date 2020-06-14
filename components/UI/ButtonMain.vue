<template>
  <button
    class="button"
    :class="{
      button_theme_sky: 'theme_sky',
      'button_margin-bottom_normal': 'margin-bottom_normal',
    }"
  >
    <slot>text</slot>
  </button>
</template>

<script>
export default {
  name: 'buttonMain',
  props: ['theme_sky', 'margin-bottom_normal'],
}
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 20px;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  transition: opacity ease-in 0.2s;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &_theme_sky {
    background-color: rgba(215, 222, 236, 0.8);
  }

  &_margin-bottom_normal {
    margin-bottom: 20px;
  }
}
</style>
