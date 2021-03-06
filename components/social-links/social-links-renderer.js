
export default function (h) {
  const links = this.links
    .map(link => ({
      icon: `icon-${link.name}`,
      href: link.href
    }))
    .map(link =>
      <li class="Social-Links__item">
        <a href={link.href} target="_blank" class="Social-Links__link">
          <i class={link.icon}></i>
        </a>
      </li>
    )

  return (
    <ul class="Social-Links">{links}</ul>
  )
}
