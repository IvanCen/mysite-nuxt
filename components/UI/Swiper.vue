<template>
  <swiper class="swiper" :options="swiperOption">
    <div
      :class="['parallax-bg', `parallax-bg_theme_${getIsThemeLight}`]"
      slot="parallax-bg"
      data-swiper-parallax="-23%"
    ></div>
    <swiper-slide>
      <h1 class="title" data-swiper-parallax="-100">Иван Сеньков</h1>
      <h2 class="subtitle subtitle_border" data-swiper-parallax="-240">
        Фронтенд / Веб разработчик
      </h2>
      <h2 class="text">Санкт-Петербург</h2>
      <!--<img
        class="image"
        src="/images/saint-petersburg-bridge.png"
        alt="Разведенный мосты Санкт-Петербурга"
      />-->
    </swiper-slide>
    <swiper-slide>
      <h2 class="title" data-swiper-parallax="-100">Обо мне</h2>
      <p class="subtitle" data-swiper-parallax="-240">
        Привет, Я Иван – Фронтенд/Веб разработчик из Санкт-Петербурга.
      </p>
      <p class="text" data-swiper-parallax="-360">
        Интересуюсь разработкой веб сайтов и прошел курсы "Веб разработки" в
        Яндекс Практикум. Готов реализовать интересные проекты с замечательными
        людьми.
      </p>
    </swiper-slide>
    <swiper-slide>
      <skill data-swiper-parallax="-360"></skill>
    </swiper-slide>

    <div
      class="swiper-pagination swiper-pagination-white"
      slot="pagination"
    ></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Description from '~/components/Description'
import Skill from '~/components/Skill'

export default {
  name: 'swiper-example-parallax',
  title: 'Parallax',
  components: {
    Swiper,
    SwiperSlide,
    description: Description,
    skill: Skill,
  },
  data() {
    return {
      swiperOption: {
        speed: 1000,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
    }
  },
  computed: {
    getIsThemeLight() {
      return this.$store.getters['pageTheme/getIsThemeLight']
    },
  },
}
</script>

<style lang="scss" scoped>
.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  background-size: cover;
  background-position: left;

  &_theme_light {
    background: url('/images/peak-mountain-light.jpg') no-repeat center / cover
      white;
  }

  &_theme_dark {
    background: url('/images/peak-mountain-dark.jpg') no-repeat center / cover
      #3d4f61;
  }
}

.swiper {
  width: 100%;
  height: calc(100vh - 70px);

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    box-sizing: border-box;
    padding: 0 80px;
    background-color: transparent;

    @media screen and (max-width: 500px) {
      padding: 0 20px;
    }

    .title {
      margin-bottom: 20px;
      font-size: 32px;
      font-weight: bold;
      text-align: end;

      @media screen and (max-width: 500px) {
        font-size: 18px;
      }
    }

    .subtitle {
      margin-bottom: 16px;
      font-size: 32px;
      text-align: end;
      max-width: 800px;

      @media screen and (max-width: 500px) {
        font-size: 22px;
      }

      &_border {
        border-bottom: 1px solid white;
      }
    }

    .text {
      line-height: 1.32;
      text-align: end;
      font-size: 20px;
      max-width: 900px;

      @media screen and (max-width: 500px) {
        font-size: 17px;
      }

      &_compact {
        max-width: 430px;
      }
    }

    .image {
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
}
</style>
