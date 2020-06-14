<template>
  <header class="header">
    <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo"
      >Logo</nuxt-link
    >
    <h1 class="header__logo" v-else>Logo</h1>
    <nav class="header__menu">
      <nuxt-link to="/portfolio" class="header__link">Портфолио</nuxt-link>
      <nuxt-link to="/contacts" class="header__link">Контакты</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  z-index: 1;
  min-height: 80px;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #000000;

  &__logo {
    font-size: 26px;
  }

  &__link {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
