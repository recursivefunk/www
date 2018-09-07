
export default function (h) {
  const c = {
    'Menu': true,
    'Menu--shown': this.menuShown,
    'Menu--pushed': !this.isHeroVisible && !this.menuShown
  }
  const links = this.links.map(link => (
    <li class="Menu__nav-item">
      <h2 class="title title--light">
        <a href={link.href}>{link.label}</a>
      </h2>
    </li>)
  )

  const style = {}
  style.display = this.ready ? 'block' : 'none'

  return (
    <div
      style={style}
      class={c}>
      <div class="Menu__overlay"></div>
      <div class="Menu__content">
        <ul class="Menu__nav">{links}</ul>
      </div>
    </div>
  )
}
