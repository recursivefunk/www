
export default function (h) {
  let style = { opacity: this.opacity }

  return (
    <div id="hero-scroll" class="hero hero--full pad-half" style={style} ref="el">
      <gradient-section overlay="true"></gradient-section>
      <gradient-layers></gradient-layers>
      <div class="hero__brand-wrapper">
        <img src="/img/logo@200.png" class="hero__logo" alt="logo@200" />

          <funky-title
              text="Recursive Funk"
              size="large"
              centered={true}
              highlight={true}
              heroTitle={true}
              tag="h1">
        </funky-title>

      </div>
    </div>
  )
}
