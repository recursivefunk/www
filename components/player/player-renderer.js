
export default function (h) {
  const styles = {
    width: this.progressWidth
  }
  return (
    <div class="Player">
      <div class="Player__content">
        <funky-title
          tag="h2"
          text={this.title}
          highlight={true}
          size="small">
        </funky-title>
        <a class={this.btnClasses} onClick={this.onClick} href="#">
          <div class="left"></div>
          <div class="right"></div>
          <div class="triangle-1"></div>
          <div class="triangle-2"></div>
        </a>
      </div>
      <div class="Player__progress-bar">
        <div class="Player-Progress-Bar__progress" style={styles}></div>
      </div>
    </div>
  )
}
