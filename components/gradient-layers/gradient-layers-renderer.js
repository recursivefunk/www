
export default function (h) {
  const layers = this.layers.map(num => {
    let classes = ['gradient-layer']

    if (this.currentGradient === num) {
      classes.push('gradient-layer--active')
    }

    classes.push(`gradient-layer--${num}`)
    return <div class={classes}></div>
  })

  return (
    <div class={{
      'gradient-layers': true,
      'gradient-layers--full': this.full,
      'gradient-layers--80': this.small }}>{layers}
    </div>
  )
}
