
import { mapState } from 'vuex'
import render from './menu-renderer'

export default {
  render,
  computed: mapState([ 'menuShown', 'isHeroVisible' ]),
  mounted () {
    setTimeout(() => {
      this.ready = true
    }, 500)
  },
  data () {
    return {
      ready: false,
      links: [
        {
          label: 'Home',
          href: '/'
        },
        {
          label: 'About',
          href: '/about'
        },
        {
          label: 'Speaking',
          href: '/speaking'
        },
        {
          label: 'Uses',
          href: '/uses'
        }
      ]
    }
  }
}
