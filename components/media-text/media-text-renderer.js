
export default function (h) {
  let content
  const cls = []

  if (this.displayWhen) {
    cls.push(this.displayWhen)
  }

  if (this.img) {
    cls.push('Media-Text__Media')
    content = (
      <div class={cls}>
        <gradient-section
          offset={true}
          img={this.img}>
        </gradient-section>
        <gradient-layers small={true}></gradient-layers>
      </div>
    )
  } else {
    let title
    cls.push('Media-Text__Text')

    if (this.title) {
      title = (
        <funky-title
          tag="h2"
          text={this.title}
          highlight={true}
          size="small"
          centered={true}>
        </funky-title>
      )
    }

    content = (
      <div class={cls}>
        <div class="Media-Text__Content">
          {title}
          <copy>
            {this.$slots.default}
          </copy>
        </div>
      </div>
    )
  }

  return content
}
