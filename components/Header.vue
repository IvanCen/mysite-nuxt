<template>
  <header class="header">
    <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo">
      <img class="header__logo" src="images/logo/my-logo.svg" alt="Логотип" />
    </nuxt-link>
    <img
      class="header__logo"
      v-else
      src="images/logo/my-logo.svg"
      alt="Логотип"
    />
    <nav class="header__menu">
      <nuxt-link
        v-if="$route.path !== '/portfolio'"
        to="/portfolio"
        class="header__link"
        >Портфолио</nuxt-link
      >
      <nuxt-link
        v-if="$route.path !== '/contacts'"
        to="/contacts"
        class="header__link"
        >Контакты</nuxt-link
      >
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
    width: 70px;
    height: 70px;
  }

  &__link {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
