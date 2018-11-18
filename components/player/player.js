
import { mapState } from 'vuex'
import FunkyTitle from '../title'
import GradientSection from '../gradient-section'
import GradientLayers from '../gradient-layers'
import render from './player-renderer'
import Plae from './plae'
const loadSM = () => import('soundmanager2/script/soundmanager2-nodebug.js')

export default {
  async mounted () {
    const self = this
    const sm = await loadSM()
    this.player = new Plae({
      url: '/swf',
      verbose: false,
      soundManager: sm.soundManager,
      songs: this.songs,
      onPlay: () => { self.isPlaying = true },
      onPause: () => { self.isPlaying = false },
      onResume: () => { self.isPlaying = true },
      onFinish: () => {
        self.isPlaying = false
        self.progressWidth = 0
      },
      whilePlaying (time, percentComplete) {
        // Don't update the UI for every progress notification. Smoothly
        // transition for every couple of updates. Not precise, but looks
        // better IMHO, and this is _my_ website, afterall.
        if (percentComplete % 2 === 0) {
          self.progressWidth = `${percentComplete}%`
        }
      },
      onReady (song) {
        self.title = song.title
        self.artist = song.artist
      }
    })

    // Keep up with the global current gradient pair. Update the progress bar
    // to reflect the ending gradient color. This makes the progress appear to
    // "breathe" along with the rest of the UI
    this.$store.subscribe((mutation, type) => {
      if (mutation.type === 'incrementGradient') {
        const colorMap = this.gradients[this.currentGradient - 1]
        this.targetColor = colorMap.to
      }
    })
  },
  data () {
    return {
      isPlaying: false,
      title: '',
      artist: '',
      progressWidth: 0,
      targetColor: '',
      songs: [
        {
          url: 'sound/voodoo.mp3',
          artist: 'Frank Ocean',
          title: 'VooDoo'
        }
      ]
    }
  },
  render,
  methods: {
    onClick (e) {
      e.preventDefault()
      this.player.play()
    }
  },
  computed: mapState(['gradients', 'currentGradient']),
  components: {
    'gradient-section': GradientSection,
    'funky-title': FunkyTitle,
    'gradient-layers': GradientLayers
  }
}
