
import { mapState } from 'vuex'
import render from './header-renderer'
import GradientLayers from '../gradient-layers'
import GradientSection from '../gradient-section'
import Hamburger from '../hamburger'
import { getAlt } from '../../utils'

export default {
  props: {
    logo: {
      require: true
    }
  },
  render,
  data () {
    return { offset: 85 }
  },
  computed: mapState({
    // Can we see the menu?
    menuShown: state => state.menuShown,
    // Is any part of the hero visible?
    isHeroVisible: state => state.isHeroVisible,
    // What is the current gradient index?
    currentGradient: state => state.currentGradient,
    // Only make the header fixed, if we're not on the home page.
    // The home page does a fancy hide-and-seek type deal based
    // on the scroll position
    isFixed () {
      return this.$nuxt.$route.name !== 'index'
    },
    alt () {
      return getAlt(this.logo)
    }
  }),
  components: {
    'gradient-layers': GradientLayers,
    'gradient-section': GradientSection,
    hamburger: Hamburger
  }
}
