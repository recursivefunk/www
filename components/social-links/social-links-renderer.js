
export default function (h) {
  const links = this.links.map(link => {
    const icon = `icon-${link.name}`
    return (
      <li class="Social-Links__item">
        <a href={link.href} target="_blank" class="Social-Links__link">
          <span class={icon}></span>
        </a>
      </li>
    )
  })

  return (
    <ul class="Social-Links">{links}</ul>
  )
}
