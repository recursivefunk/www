
export default function (h) {
  const headerStyle = {
    top: (this.isHeroVisible && !this.menuShown && !this.isFixed) ? '-85px' : 0
  }
  return (
    <header class="header header-grid" style={headerStyle}>
      <div>
        <div class="header__logo-wrapper">
          < a href="/">
            <img src={this.logo} alt={this.alt} />
          </a>
        </div>
      </div>

      <div>
        <hamburger></hamburger>
      </div>

      <div class="header__border">
        <gradient-layers></gradient-layers>
      </div>
    </header>
  )
}
