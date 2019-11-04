export const state = () => ({
  toggleDarkMode: false
})

export const mutations = {
  TOGGLE_DARK_MODE (state) {
    state.toggleDarkMode = !state.toggleDarkMode
  }
}

export const actions = {
  toggleDarkMode ({ commit }) {
    commit('TOGGLE_DARK_MODE')
  }
}

export const getters = {
  toggleDarkMode: state => state.toggleDarkMode
}
