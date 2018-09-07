
import render from './title-renderer'

export default {
  render,
  props: {
    size: {
      required: false,
      default: 'large'
    },
    pad: {
      default: false,
      require: false
    },
    text: {
      default: 'Text'
    },
    highlight: {
      default: false,
      required: false
    },
    heroTitle: {
      default: false,
      require: false
    },
    tag: {
      default: 'h1',
      require: false,
      validator (val) {
        const validTags = ['h1', 'h2', 'h3']
        const v = val.trim().toLowerCase()
        return validTags.some(tag => tag === v)
      }
    }
  }
}
