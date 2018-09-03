
export default function(h) {
  const layers = this.layers.map(num => {
    let classes = ['gradient-layer']
    if (this.currentGradient === num) {
      classes.push('gradient-layer--active')
    }
    if (this.reverse) {
      classes.push(`gradient-layer--reverse-${num}`)
    } else {
      classes.push(`gradient-layer--${num}`)
    }
    return <div class={classes}></div>
  })

  return (
    <div class={{
      'gradient-layers': true,
      'gradient-layers--80': this.small }}>{layers}
    </div>
  )
}
