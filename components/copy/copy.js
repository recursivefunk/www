
import render from './copy-renderer'
import { isBooly, createComputedBooly } from '../../utils'

export default {
  props: {
    condensed: {
      required: false,
      default: false,
      validator: val => isBooly(val)
    },
    fullWidth: {
      required: false,
      default: false,
      validator: val => isBooly(val)
    },
    centered: {
      required: false,
      default: false,
      validator: val => isBooly(val)
    }
  },
  computed: {
    _centered: createComputedBooly('centered'),
    _fullWidth: createComputedBooly('fullWidth'),
    _condensed: createComputedBooly('condensed')
  },
  render
}
