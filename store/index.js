
import Vuex from 'vuex'

// @TODO: Use this as source of truth for components
const gradients = [
  { from: '#FF512F', to: '#F09819' },
  { from: '#02AAB0', to: '#00CDAC' },
  { from: '#FF5F6D', to: '#FFC371' },
  { from: '#FF512F', to: '#DD2476' }
]

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

  /**
   * Toggles hero visiblity to false so other components know that the user
   * can't see the hero
   *
   */
  setHeroHidden (state) {
    state.isHeroVisible = false
  },

  /**
   * Toggles hero visiblity to true so other components know that the user
   * can see the hero
   *
   */
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

// Actions to be used by components
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
      maxNumGradients: gradients.length,
      // Menu should not be visible when the page loads
      menuShown: false,
      isHeroVisible: true,
      gradients
    },
    mutations,
    actions
  })
)

export default createStore
