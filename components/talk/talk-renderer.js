
export default function (h) {
  const style = {
    background: this.background
  }
  const titleClasses = ['Talk__title']
  let contentStyle = {}

  if (this.outline) {
    contentStyle.border = `solid ${this.outline} 2px`
  }

  if (this.flavor === 'dark') {
    titleClasses.push('Talk__title--dark')
  }

  return (
    <div class="Talk">
      <div class="Talk__logo-wrapper" style={style}>
        <a href={this.dest} target="_blank">
          <div class="Talk__content" style={contentStyle}>
            <img class="Talk__logo" src={this.logo} alt="org_logo" />
          </div>
        </a>
      </div>
      <p class={titleClasses}>{this.title}</p>
    </div>
  )
}
