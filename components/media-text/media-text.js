
import FunkyTitle from '../title'
import render from './media-text-renderer'
import GradientSection from '../gradient-section'
import GradientLayers from '../gradient-layers'
import copy from '../copy'

export default {
  props: ['img', 'title', 'displayWhen'],
  render,
  components: {
    'gradient-section': GradientSection,
    'funky-title': FunkyTitle,
    'gradient-layers': GradientLayers,
    copy
  }
}
