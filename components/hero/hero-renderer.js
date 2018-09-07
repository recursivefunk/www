
export default function (h) {
  let style = { opacity: this.opacity }

  return (
    <div id="hero-scroll" class="hero hero--full pad-half" style={style} ref="el">
      <gradient-section overlay={this._overlay}></gradient-section>
      <gradient-layers></gradient-layers>
      <div class="hero__brand-wrapper">
        <img src={this.img} class="hero__logo" alt="logo@200" />
        <funky-title
          text="Recursive Funk"
          size="large"
          highlight={true}
          heroTitle={true}
          tag="h1">
        </funky-title>
      </div>
    </div>
  )
}
