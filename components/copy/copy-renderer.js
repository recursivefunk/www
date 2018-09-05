
export default function (h) {
  const obj = {
    'copy': true,
    'copy--condensed': this._condensed === true,
    'copy--full-width': this._fullWidth === true,
    'copy--centered': this._centered === true
  }

  const classes = Object.keys(obj).filter(k => obj[k])

  return (
    <p class={classes}>{this.$slots.default}</p>
  )
}
