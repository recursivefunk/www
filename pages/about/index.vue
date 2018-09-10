<template>
    <span>
        <div class="container">
            <section class="Section">
                <funky-title
                    text="About"
                    size="large"
                    highlight=true
                    tag="h1">
                </funky-title>
                <div class="Media-Text-Grid">
                    <media-text img="/img/kid-me.jpg"></media-text>
                    <media-text img="/img/me-no-look.jpg" displayWhen="show-lg-up"></media-text>
                </div>
            </section>
            <section class="Section">
                <div class="copy-paragraph">
                    <copy>Johnny is an experienced engineering leader with interest in everything from UX design to distributed systems. He is an active member of the open source community - contributing to projects such as Node.js as well as authoring an array of NPM modules. His specialty is in full stack JavaScript but has experience with Python and Go.</copy>
                </div>
                <div class="copy-paragraph">
                    <copy>Johnny serves as a member of the IT advisory board for the National Academy Foundation where he helps to ensure students receive the resources necessary to prepare them for industry or higher education. He is the former Curriculum Development Lead for the DC chapter of Black Girls Code - an organization dedicated to teaching young women of color how to program. Johnny now serves as a technology advisor for Black Girls Code.</copy>
                </div>
                <div class="copy-paragraph">
                    <copy>He is also an educator - having taught Front End Web Development as well as JavaScript courses through General Assembly. During his time as Director of Technology at iStrategyLabs, Johnny led the development of projects and campaigns for clients such as Facebook, NBC Universal, Kroger, Volkswagen more.</copy>
                </div>
                <div class="copy-paragraph">
                    <copy>As a member of the Tech Fellows program, Johnny helped drive the engineering culture at Capital One through high impact technology contributions and thought leadership. He also helped launch Capital One's Eno product - a Machine Learning enabled intelligent assistant that helps customers manage their money.</copy>
                </div>
                <div class="copy-paragraph">
                    <copy>Johnny is currently running engineering for Mapbox's core capabilities for navigation and its related APIs and infrastructure as Head of Directions in Washington, DC.</copy>
                </div>
            </section>
        </div>
    </span>
</template>

<script>
import GradientLayers from '~/components/gradient-layers/index.vue'
import GradientSection from '~/components/gradient-section/index.vue'
import Hero from '~/components/hero/index.vue'
import MediaText from '~/components/media-text/index.vue'
import copy from '~/components/copy/index.vue'
import FunkyTitle from '~/components/title/index.vue'
import { mapState } from 'vuex'
// Load MapboxGL asynchronously _after_ the page is ready
const loadGL = () => import('mapbox-gl')

export default {
  async mounted () {
    if (process.browser) {
      const mapboxgl = await loadGL()
      mapboxgl.accessToken = 'pk.eyJ1IjoicmVjdXJzaXZlZnVuayIsImEiOiJjamJ4eWo0YzQydGowMnZ1Zjg4dGFoNHBvIn0.3yfGCrsomP8itKOxcqowRQ'
      const map = new mapboxgl.Map({
        container: 'map',
        interactive: false,
        style: `mapbox://styles/recursivefunk/cjlwevz533k412sqmpx3anvox?${Date.now()}`,
        // DC!
        center: [-77.038, 38.899],
        zoom: 12.0
      })

      // when the gradient changes, for the UI, change the map highlight colors
      // to change in sync. This makes it look like one UI
      this.$store.subscribe((mutation, type) => {
        if (mutation.type === 'incrementGradient') {
          const colorMap = this.gradients[this.currentGradient - 1]
          // secondary roads are colored with the left gradient and water is
          // colored with the right gradient
          map.setPaintProperty('road-secondary-tertiary', 'line-color', colorMap.from)
          map.setPaintProperty('water', 'fill-color', colorMap.to)
        }
      })
    }
  },
  head () {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css'
        }
      ]
    }
  },
  computed: mapState(['gradients', 'currentGradient']),
  components: {
    'hero': Hero,
    'gradient-layers': GradientLayers,
    'gradient-section': GradientSection,
    'media-text': MediaText,
    'funky-title': FunkyTitle,
    copy
  }
}
</script>
