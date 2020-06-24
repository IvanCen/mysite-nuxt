<template>
  <button
    class="button"
    :class="[`button_theme_${theme}`, `button_indent_${indentDirection}`]"
    @click="$emit('btnClick')"
  >
    <slot>text</slot>
  </button>
</template>

<script>
export default {
  name: 'buttonMain',
  props: ['theme', 'indentDirection'],
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
    background-color: rgba(220, 226, 238, 0.8);
  }

  &_indent_bottom {
    margin-bottom: 20px;
  }
}
</style>
