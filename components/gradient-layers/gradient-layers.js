
import { mapState } from 'vuex'
import render from './gradient-layers-renderer'

export default {
  props: ['reverse', 'small'],
  render,
  data () {
    return {
      layers: [1, 2, 3, 4]
    }
  },
  // Map the currentGradient property to the same property in the vuex store
  // configured in the root component
  computed: mapState([ 'currentGradient' ])
}
