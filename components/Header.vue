<template>
  <header :class="[`header`, `header_theme_${getIsThemeLight}`]">
    <nuxt-link to="/" class="header__logo">
      <svg
        :class="[`header__logo`, `header__logo_theme_${getIsThemeLight}`]"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 640 640"
      >
        <defs>
          <text
            id="bm7vkAETA"
            x="539.18"
            y="245.6"
            font-size="384"
            font-family="Montserrat-ExtraBold"
            font-weight="normal"
            font-style="normal"
            letter-spacing="0"
            alignment-baseline="before-edge"
            transform="matrix(1 0 0 1 -219.1820040899795 -159.25308345033272)"
            style="line-height:100%"
            xml:space="preserve"
            dominant-baseline="text-before-edge"
          >
            <tspan
              x="539.18"
              dy="0em"
              alignment-baseline="before-edge"
              dominant-baseline="text-before-edge"
              text-anchor="middle"
            >
              ICe
            </tspan>
          </text>
          <style id="montserratnormalnormal">
            @font-face {
              font-family: 'Montserrat';
              font-weight: normal;
            }
          </style>
          <path
            d="M113.51 462.24L7.1 461.77L7.2 438.16L113.61 438.62L113.51 462.24Z"
            id="g51ZqpQvHd"
          ></path>
          <path
            d="M398.93 440.38L145.77 439.27L145.67 462.89L398.83 463.99L398.93 440.38Z"
            id="br1gzpoly"
          ></path>
          <path
            d="M627.7 441.93L420.14 441.03L420.05 461.33L627.62 462.24L627.7 441.93Z"
            id="c1eRjQTyyP"
          ></path>
        </defs>
        <g>
          <g>
            <g id="c2qQNy0WiB">
              <use
                xlink:href="#bm7vkAETA"
                opacity="1"
                fill="#000000"
                fill-opacity="1"
              ></use>
            </g>
            <g>
              <use
                xlink:href="#g51ZqpQvHd"
                opacity="1"
                fill="#000000"
                fill-opacity="1"
              ></use>
            </g>
            <g>
              <use
                xlink:href="#br1gzpoly"
                opacity="1"
                fill="#000000"
                fill-opacity="1"
              ></use>
            </g>
            <g>
              <use
                xlink:href="#c1eRjQTyyP"
                opacity="1"
                fill="#000000"
                fill-opacity="1"
              ></use>
            </g>
          </g>
        </g>
      </svg>
    </nuxt-link>
    <nav class="header__menu">
      <nuxt-link
        v-if="!/\/portfolio\/?/.test($route.path)"
        to="/portfolio"
        :class="[`header__link`, `header__link_theme_${getIsThemeLight}`]"
        >Портфолио
      </nuxt-link>
      <nuxt-link
        :event="disabledContactsLink ? '' : 'click'"
        v-if="!/\/contacts\/?/.test($route.path)"
        to="/contacts"
        :class="[`header__link`, `header__link_theme_${getIsThemeLight}`]"
        >Контакты
      </nuxt-link>
      <button
        :class="[`header__button`, `header__button_theme_${getIsThemeLight}`]"
        @click="switchTheme"
      >
        {{ buttonText }}
      </button>
    </nav>
    <v-navigation-drawer
      v-model="drawer"
      app
      right="right"
      :dark="dark"
      class="header__nav-menu"
    >
      <v-list dense>
        <v-list-item-group
          active-class="header__list-item_active"
          color="indigo"
        >
          <nuxt-link
            v-if="$route.path !== '/'"
            :event="disabledPortfolioLink ? '' : 'click'"
            @click="switchLink(disabledHomeLink)"
            to="/"
            :class="[`header__link`, `header__link_theme_${getIsThemeLight}`]"
          >
            <v-list-item link>
              <v-icon class="icon">mdi-home</v-icon>
              <v-list-item-content>Главная</v-list-item-content>
            </v-list-item>
          </nuxt-link>
          <nuxt-link
            :event="disabledPortfolioLink ? '' : 'click'"
            @click="switchLink(disabledPortfolioLink)"
            to="/portfolio"
            :class="[`header__link`, `header__link_theme_${getIsThemeLight}`]"
          >
            <v-list-item link>
              <v-icon class="icon">mdi-briefcase-account</v-icon>
              <v-list-item-content>Портфолио</v-list-item-content>
            </v-list-item>
          </nuxt-link>
          <nuxt-link
            :event="disabledPortfolioLink ? '' : 'click'"
            @click="switchLink(disabledPortfolioLink)"
            to="/contacts"
            :class="[`header__link`, `header__link_theme_${getIsThemeLight}`]"
          >
            <v-list-item @click="" link>
              <v-icon class="icon">mdi-contacts</v-icon>
              <v-list-item-content>Контакты</v-list-item-content>
            </v-list-item>
          </nuxt-link>
        </v-list-item-group>
      </v-list>
      <button
        @click="switchTheme"
        :class="[`header__button`, `header__button_theme_${getIsThemeLight}`]"
      >
        {{ buttonText }}
      </button>
    </v-navigation-drawer>
    <v-app-bar-nav-icon
      class="header__nav-button"
      :dark="dark"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      dark: false,
      buttonText: 'Light',
      disabledPortfolioLink: false,
      disabledContactsLink: false,
      disabledHomeLink: false,
      selectable: true,
    }
  },
  methods: {
    switchTheme() {
      this.$store.commit('pageTheme/switchTheme')
      this.dark = !this.dark
      if (this.getIsThemeLight === 'light') {
        this.buttonText = 'Light'
      } else {
        this.buttonText = 'Dark'
      }
    },
    switchLink(link) {
      link = !link
    },
  },
  computed: {
    getIsThemeLight() {
      return this.$store.getters['pageTheme/getIsThemeLight']
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  margin-right: 20px;
}

.header {
  z-index: 2;
  max-height: 70px;
  display: flex;
  top: 0;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #000000;
  padding: 0 20px;

  @media screen and (max-width: 500px) {
    justify-content: space-between;
  }

  &_theme_light {
    background-color: white;
  }

  &_theme_dark {
    background-color: #474a4c;
  }

  &__logo {
    width: 70px;
    height: 70px;

    &_theme_light {
    }

    &_theme_dark {
      filter: brightness(0) invert(1);
    }
  }

  &__list-item {
    &_active {
      color: #000;
    }
  }

  &__nav-menu {
    display: none;

    @media screen and (max-width: 500px) {
      display: block;
    }
  }

  &__menu {
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  &__button {
    padding: 5px 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.24), 0 8px 12px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    border-radius: 15px;
    border: 0;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    text-align: center;

    &_theme_light {
      background-color: white;
      color: black;
    }

    &_theme_dark {
      background-color: #474a4c;
      color: white;
    }

    @media screen and (max-width: 500px) {
      position: absolute;
      bottom: 20px;
      left: 20px;

      &_theme_light {
        background-color: #474a4c;
        color: white;
      }

      &_theme_dark {
        background-color: white;
        color: black;
      }
    }
  }

  &__nav-button {
    display: none;

    @media screen and (max-width: 500px) {
      display: block;
    }
  }

  &__link {
    margin-right: 25px;

    &_theme_light {
      color: black;
    }

    &_theme_dark {
      color: white;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
