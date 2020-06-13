<template>
  <header class="header">
    <h1 class="header__logo">Logo</h1>
    <nav class="header__menu">
      <nuxt-link to="/" class="header__link" href="">Главная</nuxt-link>
      <nuxt-link to="/portfolio" class="header__link" href=""
        >Портфолио</nuxt-link
      >
      <nuxt-link to="/" class="header__link" href="">Контакты</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  min-height: 80px;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #000000;

  &__menu {
    @media (max-width: 650px) {
      display: none;
    }
  }

  &__link {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
