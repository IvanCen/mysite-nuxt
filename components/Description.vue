<template>
  <section class="description">
    <div class="description__container-header">
      <h1 class="description__title">Иван Сеньков</h1>
      <h2 class="description__subtitle description__subtitle_border">
        Фронтенд / Веб разработчик
      </h2>
      <h2 class="description__subtitle">Санкт-Петербург</h2>
      <img
        class="description__image"
        src="/images/saint-petersburg-bridge.png"
        alt="Разведенный мосты Санкт-Петербурга"
      />
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
  position: relative;
  color: white;
  margin: 0 auto;
  min-height: calc(100vh - 70px);
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

    @media screen and (max-width: 500px) {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }

  &__subtitle {
    font-size: 32px;
    font-weight: normal;

    @media screen and (max-width: 500px) {
      font-size: 23px;
    }

    &_border {
      border-bottom: 1px solid white;

      /*@media screen and (max-width: 500px) {
        border-bottom: none;
      }*/
    }
  }

  &__image {
    position: absolute;
    transform: translateY(30%);
    max-width: 400px;
    max-height: 400px;
    filter: brightness(0) invert(1);

    @media screen and (max-width: 500px) {
      max-width: 200px;
      max-height: 200px;
      transform: translateY(57%);
    }
  }
}
</style>
