
export default function (h) {
  const classes = ['copy']

  if (this.condensed) {
    classes.push('copy--condensed')
  }

  if (this.fullWidth) {
    classes.push('copy--full-width')
  }

  if (this.centered) {
    classes.push('copy--centered')
  }

  return (
    <p class={classes}>{this.$slots.default}</p>
  )
}
