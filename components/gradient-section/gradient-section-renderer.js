
export default function (h) {
  let markup
  if (this.overlay) {
    markup = (
      <div
        style={this.styles}
        class={{
          'gradient-section': true,
          'gradient-section--offset': this.offset
        }}>
          <div class="gradient-section__overlay"></div>
      </div>
    )
  } else {
    markup = (
      <div
        style={this.styles}
        class={{
          'gradient-section': true,
          'gradient-section--offset': this.offset
        }}>
      </div>
    )
  }

  return markup
}
