
import { mapState } from 'vuex'
import render from './header-renderer'
import GradientLayers from '../gradient-layers'
import GradientSection from '../gradient-section'
import Hamburger from '../hamburger'

export default {
  render,
  computed: mapState({
    menuShown: state => state.menuShown,
    isHeroVisible: state => state.isHeroVisible,
    currentGradient: state => state.currentGradient,
    isFixed () {
      if (this.$nuxt.$route.name === 'index') {
        return false
      }
      return true
    }
  }),
  components: {
    'gradient-layers': GradientLayers,
    'gradient-section': GradientSection,
    hamburger: Hamburger
  }
}
