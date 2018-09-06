
import Vuex from 'vuex'

const mutations = {
  /**
   * Toggles the visibility state of the nav to true
   *
   */
  setMenuVisible (appState) {
    appState.menuShown = true
  },

  /**
   * Toggles the visibility state of the nav to false
   *
   */
  setMenuHidden (appState) {
    appState.menuShown = false
  },

  setHeroHidden (state) {
    state.isHeroVisible = false
  },

  setHeroVisible (state) {
    state.isHeroVisible = true
  },

  /**
   * Transition the current gradient state. If we're on the last gradient,
   * go back to the beginning
   *
   */
  incrementGradient (appState) {
    if (appState.currentGradient === appState.maxNumGradients) {
      appState.currentGradient = 1
    } else {
      appState.currentGradient += 1
    }
  }
}

const actions = {
  hideHero ({ commit }) {
    commit('setHeroHidden')
  },
  showHero ({ commit }) {
    commit('setHeroVisible')
  },
  hideMenu ({ commit }) {
    commit('setMenuHidden')
  },
  showMenu ({ commit }) {
    commit('setMenuVisible')
  },
  nextGradient ({ commit }) {
    commit('incrementGradient')
  }
}

const createStore = () => (
  new Vuex.Store({
    state: {
      // always
      inspiration: 'I believe in you',
      // Start at the first gradient
      currentGradient: 1,
      maxNumGradients: 4,
      // Menu should not be visible when the page loads
      menuShown: false,
      isHeroVisible: true
    },
    mutations,
    actions
  })
)

export default createStore
