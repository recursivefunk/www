
import render from './hamburger-renderer'

export default {
  data() {
    return { open: false }
  },
  render,
  methods: {
    onClick() {
      this.open = !this.open
      if (this.open) {
        this.$store.commit('showMenu')
      } else {
        this.$store.commit('hideMenu')
      }
    }
  }
}
