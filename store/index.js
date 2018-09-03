
import Vuex from 'vuex'

const mutations = {
  /**
   * Toggles the visibility state of the nav to true
   *
   */
  showMenu (appState) {
    appState.menuShown = true
  },

  /**
   * Toggles the visibility state of the nav to false
   *
   */
  hideMenu (appState) {
    appState.menuShown = false
  },

  // @TODO: Commit to convention, Johnny. Either a separate mutation for
  // showing and hiding like the menu, or one function like this one.
  heroVisible (state, isVisible) {
    if (isVisible === true || isVisible === false) {
      state.isHeroVisible = isVisible
    } else {
      console.warn(`Invalid val for visible: ${isVisible}`)
    }
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
    mutations
  })
)

export default createStore
