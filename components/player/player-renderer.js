
export default function (h) {
  const styles = {
    width: this.progressWidth,
    background: this.targetColor,
    'box-shadow': `0.015em 0.01em 0.05em 0.01em ${this.targetColor}`
  }
  const copyStyle = {
    'padding-top': 0
  }
  const cls = ['play-button']

  if (!this.isPlaying) {
    cls.push('paused')
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
        <a class={cls} onClick={this.onClick} href="#">
          <div class="left"></div>
          <div class="right"></div>
          <div class="triangle-1"></div>
          <div class="triangle-2"></div>
        </a>
        <p class="copy copy--centered copy--italic" style={copyStyle}>{this.artist}</p>
      </div>
      <div class="Player__progress-bar">
        <div class="Player-Progress-Bar__progress" style={styles}></div>
      </div>
    </div>
  )
}
