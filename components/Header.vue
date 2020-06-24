<template>
  <header :class="[`header`, `header_theme_${getIsThemeLight}`]">
    <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo">
      <img
        class="header__logo"
        :src="`images/logo/my-logo-${getIsThemeLight}.svg`"
        alt="Логотип"
      />
    </nuxt-link>
    <img
      class="header__logo"
      v-else
      :src="`images/logo/my-logo-${getIsThemeLight}.svg`"
      alt="Логотип"
    />
    <nav class="header__menu">
      <nuxt-link
        v-if="$route.path !== '/portfolio'"
        to="/portfolio"
        :class="[`header__link`, `header__link_theme_${getIsThemeLight}`]"
        >Портфолио
      </nuxt-link>
      <nuxt-link
        :event="disabledContactsLink ? '' : 'click'"
        v-if="$route.path !== '/contacts'"
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
  z-index: 1;
  min-height: 70px;
  display: flex;
  position: sticky;
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
