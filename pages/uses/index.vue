<template>
    <span>
        <div class="container">
            <section class="Section">
                <funky-title
                    text="Uses"
                    size="large"
                    highlight=true
                    tag="h1">
                </funky-title>
            </section>

            <!-- Thinkpad -->
            <div class="Media-Text-Grid">
                <media-text img="https://via.placeholder.com/600/"></media-text>
                <media-text title="The Machine">
                    foo
                </media-text>
            </div>

            <!-- Keyboard -->
            <div class="Media-Text-Grid">
                <media-text title="The Board" displayWhen="show-lg-up">
                    foo
                </media-text>
                <media-text img="https://via.placeholder.com/600/"></media-text>
                <media-text title="Me" displayWhen="hide-lg-up">
                    foo
                </media-text>
            </div>

            <!-- Microphone -->
            <div class="Media-Text-Grid">
                <media-text img="https://via.placeholder.com/600/"></media-text>
                <media-text title="The Mic">foo
                    <!-- Audio Technica AT2020 -->
                </media-text>
            </div>

            <!-- Headphones -->
            <div class="Media-Text-Grid">
                <media-text title="The Cans" displayWhen="show-lg-up">
                    foo
                </media-text>
                <media-text img="https://via.placeholder.com/600/"></media-text>
                <media-text title="Me" displayWhen="hide-lg-up">
                    foo
                </media-text>
            </div>

            <!-- Vim -->
            <div class="Media-Text-Grid">
                <media-text img="https://via.placeholder.com/600/"></media-text>
                <media-text title="The Editor">foo
                    <!-- Vim -->
                </media-text>
            </div>
        </div>
    </span>
</template>

<script>
import GradientLayers from '~/components/gradient-layers/index.vue'
import GradientSection from '~/components/gradient-section/index.vue'
import Hero from '~/components/hero/index.vue'
import MediaText from '~/components/media-text/index.vue'
import Talk from '~/components/talk/index.vue'
import FunkyTitle from '~/components/title/index.vue'
import FunkyHR from '~/components/funky-hr/index.vue'

export default {
  components: {
    'hero': Hero,
    'gradient-layers': GradientLayers,
    'gradient-section': GradientSection,
    'media-text': MediaText,
    'talk': Talk,
    'funky-title': FunkyTitle,
    'funky-hr': FunkyHR
  }
}
</script>
