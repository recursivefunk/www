
import render from './gradient-section-renderer'

export default {
  props: ['img', 'offset', 'overlay'],
  delimeters: ['[[', ']]'],
  render,
  data() {
    let background
    let styles = {}

    if (this.img) {
      background = `url(${this.img}) center center no-repeat`
      return {
        styles: { 'background': background }
      }
    } else {
      return {}
    }
  },
}
