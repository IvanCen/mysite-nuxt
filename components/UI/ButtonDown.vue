<template>
  <div @click="$emit('btnClick')" class="button-down">
    <button class="button-down__body">
      <svg
        width="38"
        height="15"
        viewBox="0 0 38 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M37 1L19 13L1 1" stroke="white" stroke-width="2" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.button-down {
  transform: translate(47%, -50px);

  &__body {
    border: none;
    cursor: pointer;
  }

  &__body:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease-in-out;
  }

  &__body:focus {
    outline: none;
  }
}
</style>
