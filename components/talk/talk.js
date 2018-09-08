
import render from './talk-renderer'
import { getAlt } from '../../utils'

export default {
  props: {
    background: {
      require: false,
      default: '#fff'
    },
    logo: {
      required: true
    },
    title: {
      required: false
    },
    outline: {
      require: false
    },
    dest: {
      require: false,
      default: '#'
    }
  },
  render,
  computed: {
    alt () {
      return getAlt(this.logo)
    }
  }
}
