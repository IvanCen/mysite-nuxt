export const state = () => ({
  themeLight: 'light',
})

export const mutations = {
  switchTheme(state) {
    if (state.themeLight === 'light') {
      return (state.themeLight = 'dark')
    } else {
      return (state.themeLight = 'light')
    }
  },
}

export const getters = {
  getIsThemeLight(state) {
    return state.themeLight
  },
}
