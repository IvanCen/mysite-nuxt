<template>
  <div>
    <a href="" id="main"></a>
    <main-header />
    <nuxt />
    <main-footer />
    <transition name="popup__fade">
      <overlay v-if="popupShown" @overlayClick="togglePopup" />
    </transition>
    <transition name="popup__fade">
      <popup v-if="popupShown" @closeClick="togglePopup" theme="light">
        <my-form />
      </popup>
    </transition>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Overlay from '~/components/ui/Overlay'
import Popup from '~/components/Popup'
import Form from '~/components/UI/Form'
import Footer from '~/components/Footer'

export default {
  components: {
    'main-header': Header,
    overlay: Overlay,
    popup: Popup,
    'my-form': Form,
    'main-footer': Footer,
  },
  methods: {
    togglePopup() {
      this.$store.commit('popup/togglePopup')
    },
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown']
    },
  },
}
</script>

<style lang="scss">
.popup__fade-enter,
.popup__fade-leave-active {
  opacity: 0;
}

.popup__fade-enter-active,
.popup__fade-leave-active {
  transition: opacity 0.2s ease;
}

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
  scroll-behavior: smooth;
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

.link {
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.7;
  }
}
</style>
