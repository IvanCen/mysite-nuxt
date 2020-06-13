<template>
  <section class="description">
    <div class="description__container-header">
      <h1 class="description__title">Иван Сеньков</h1>
      <h2 class="description__subtitle">Фронтенд / Веб разработчик</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Description',
}
</script>

<style lang="scss" scoped>
.description {
  color: white;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('/images/1.jpg') no-repeat center / cover fixed;

  &__container-header {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }

  &__title {
    font-size: 36px;
    margin-bottom: 50px;
  }

  &__subtitle {
    font-size: 32px;
  }
}
</style>
