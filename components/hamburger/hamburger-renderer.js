
export default function (h) {
  return (
    <div
      class={{
        "Hamburger": true,
        "open": this.open
      }}
      onClick={this.onClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}
