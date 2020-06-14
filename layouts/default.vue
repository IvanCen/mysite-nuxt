<template>
  <div>
    <main-header />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    'main-header': Header,
  },
}
</script>

<style lang="scss">
html {
  font-family: 'Jet Brains', monospace, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

a {
  color: black;
  text-decoration: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
