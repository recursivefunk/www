
import render from './hero-renderer'
import GradientSection from '../gradient-section'
import GradientLayers from '../gradient-layers'
import FunkyTitle from '../title'
import {
  debounce,
  isBooly,
  createComputedBooly
} from '../../utils'

export default {
  props: {
    img: {
      required: true
    },
    overlay: {
      require: false,
      default: true,
      validator: val => isBooly(val)
    }
  },
  render,
  mounted () {
    const body = document.getElementById('body-scroll')
    const update = () => {
      if (window.scrollY > this.lastKnownScrollY) {
        this.scrollDirection = 'down'
      } else if (window.scrollY < this.lastKnownScrollY) {
        this.scrollDirection = 'up'
      } else {
        this.scrollDirection = null
      }
      this.lastKnownScrollY = window.scrollY
    }
    body.onscroll = debounce(update, 10)
  },
  data () {
    return {
      opacity: 1,
      lastKnownScrollY: process.browser.scrollY,
      scrollDirection: null
    }
  },
  computed: {
    _overlay: createComputedBooly('overlay')
  },
  watch: {
    lastKnownScrollY (val) {
      const animationDelay = 200
      const breakpointUp = 350
      const breakpointDown = 250
      if (this.scrollDirection === 'down' && val > breakpointDown && this.opacity > 0) {
        this.opacity = 0
        setTimeout(() => this.$store.commit('heroVisible', false), animationDelay)
      } else if (this.scrollDirection === 'up' && val < breakpointUp && this.opacity < 1) {
        this.opacity = 1
        setTimeout(() => this.$store.commit('heroVisible', true), animationDelay)
      }
    }
  },
  components: {
    'gradient-section': GradientSection,
    'gradient-layers': GradientLayers,
    'funky-title': FunkyTitle
  }
}
