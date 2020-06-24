<template>
  <section
    :class="[`portfolio`, `portfolio_theme_${getIsThemeLight}`]"
    id="portfolio"
  >
    <h2
      :class="[`portfolio__title`, `portfolio__title_theme_${getIsThemeLight}`]"
    >
      Портфолио
    </h2>
    <div v-for="card in cards" :key="card.id" class="portfolio__card">
      <h3
        :class="[
          `portfolio__image-title`,
          `portfolio__image-title_theme_${getIsThemeLight}`,
        ]"
      >
        {{ card.title }}
      </h3>
      <a :href="card.demoLink">
        <img class="portfolio__image" :src="card.image" alt="фото проекта" />
        <p
          :class="[
            `portfolio__text`,
            `portfolio__text_theme_${getIsThemeLight}`,
          ]"
        >
          {{ card.text }}
        </p>
      </a>
      <a
        :href="card.githubLink"
        :class="[`portfolio__link`, `portfolio__link_theme_${getIsThemeLight}`]"
        >github</a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      text: 'hello',
    }
  },
  computed: {
    cards() {
      return this.$store.getters['project/getProjectCards']
    },
    getIsThemeLight() {
      return this.$store.getters['pageTheme/getIsThemeLight']
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 20px;

  &_theme_light {
    background-color: #f6f6f6;
  }

  &_theme_dark {
    background-color: #3d4f61;
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-bottom: 40px;
  }

  &__link {
    align-self: flex-end;

    &_theme_light {
      color: black;
    }

    &_theme_dark {
      color: white;
    }

    &:hover {
      color: #4c4c4c;
    }
  }

  &__link-text {
    width: 200px;
    font-size: 32px;
    text-align: center;
    margin-top: 50px;
    color: black;

    &_theme_light {
      color: black;
    }

    &_theme_dark {
      color: white;
    }
  }

  &__link-text:after {
    transition: width 0.5s ease-in-out;
    width: 0;
    height: 1px;
    background-color: #000000;
    display: block;
    content: '';
  }

  &__link-text:hover:after {
    width: 100%;
  }

  &__title {
    font-size: 36px;
    margin-top: 35px;
    margin-bottom: 35px;
    padding-bottom: 25px;
    border-bottom: #000000 solid 2px;
    text-align: center;
    width: 100%;

    &_theme_light {
      color: black;
    }

    &_theme_dark {
      color: white;
    }
  }

  &__text {
    margin-bottom: 10px;

    &_theme_light {
      color: black;
    }

    &_theme_dark {
      color: white;
    }
  }

  &__image-title {
    font-size: 28px;
    margin-bottom: 10px;

    &_theme_light {
      color: black;
    }

    &_theme_dark {
      color: white;
    }
  }

  &__image {
    width: 100%;
    max-width: 800px;
    transition: opacity ease-in 0.2s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin-bottom: 10px;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
