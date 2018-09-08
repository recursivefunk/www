
export default function (h) {
  let markup
  const cls = {
    'gradient-section': true,
    'gradient-section--offset': this.offset
  }
  markup = (
    <div
      style={this.styles}
      class={cls}>
      { this.overlay ? <div class="gradient-section__overlay"></div> : null }
    </div>
  )

  return markup
}
