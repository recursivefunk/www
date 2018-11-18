
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
	    verbose: true,
      soundManager: sm.soundManager,
      songs: [
        {
          url: 'sound/voodoo.mp3',
          artist: 'Frank Ocean',
          title: 'VooDoo'
        }
      ],
      onPlay: () => self.isPlaying = true,
      onPause: () => self.isPlaying = false,
      onResume: () => self.isPlaying = true,
      onFinish: () => {
        self.isPlaying = false
        self.progressWidth = 0
      },
      whilePlaying: function( time, percentComplete ) { // looks good
        if (percentComplete % 2 === 0) {
          self.progressWidth = `${percentComplete}%`
        }
      },
      onReady (song) {
        self.title = song.title
        // SHAME!...SHAME!...SHAME!...SHAME!
        //delete window.soundManager
      }
    })
  },
  data () {
    return {
      isPlaying: false,
      title: '',
      progressWidth: 0
    }
  },
  render,
  methods: {
    onClick (e) {
      e.preventDefault()
      this.player.play()
    }
  },
  computed: {
    btnClasses () {
      const cls = ['play-button']
      if (!this.isPlaying) {
        cls.push('paused')
      }
      return cls
    }
  },
  components: {
    'gradient-section': GradientSection,
    'funky-title': FunkyTitle,
    'gradient-layers': GradientLayers,
  }
}
