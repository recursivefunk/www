<template>
    <span>
        <hero overlay=true img="/img/logo@200.png"></hero>
        <div class="container">
            <div class="Media-Text-Grid">
                <media-text img="/img/home-fists.jpg"></media-text>
                <media-text title="TL;DR">
                    My name is Johnny - I run engineering at <a
                        target="_blank"
                        href="https://www.hellotill.com/">Till</a>, in Washington, DC. My past
                    includes Engineering Director at <a
                        target="_blank" href="https://mapbox.com">Mapbox</a>,
                    Director of Technology at <a href="https://isl.co"
                        target="_blank">ISL</a>, as well as engineering
                    leadership at <a href="https://capitalone.com"
                        target="_blank">Capital One</a> and <a
                        href="https://everfi.com"
                        target="_blank">EverFi</a>.<br><br>If you're looking
                    for someone to <a href="/speaking">speak</a> about
                    engineering leadership, JavaScript or just want to say
                    hello, feel free to <a href="mailto:hi@johnnyray.me">reach
                        out</a>!
                </media-text>
            </div>
            <div class="Media-Text-Grid">
                <media-text title="Me" displayWhen="show-lg-up">
          I have a decade and a half of experience building and designing
          systems, as well as leading successful engineering and product teams.
          I'm an <a href="/speaking">international speaker</a>, a writer, and
          an educator. I sometimes advise early-stage startups and have even
          built some prototypes. If you want to learn more about my work, <a
          href="mailto:hi@johnnyray.me">drop me a line</a>! You can read more about my background <a href="/about">here</a>.
                </media-text>
                <media-text img="/img/workspace.jpg"></media-text>
                <media-text title="Me" displayWhen="hide-lg-up">
          I have a decade and a half of experience building and designing
          systems, as well as leading successful engineering and product teams.
          I'm an <a href="/speaking">international speaker</a>, a writer, and
          an educator. I sometimes advise early-stage startups and have even
          built some prototypes. If you want to learn more about my work, <a
          href="mailto:hi@johnnyray.me">drop me a line</a>! You can read more about my background <a href="/about">here</a>.
                </media-text>
            </div>

            <div class="Media-Text-Grid">
                <media-text img="/img/records.jpg"></media-text>
                <media-text title="Recursive Funk">
          I'm interested in everything at the intersection of technology and art. I'm an introverted people-person, and I'm immediately drawn to eccentricity. I enjoy not only meeting new and exciting people, but I like getting to know them as well. I value strong, lasting relationships.
                </media-text>
            </div>
        </div>
        <div class="Media-Text-Grid">
            <media-text img="/img/cornel-west.jpeg" displayWhen="hide-lg-up"></media-text>
            <player/>
            <media-text img="/img/cornel-west.jpeg" displayWhen="show-lg-up"></media-text>
        </div>
    </span>
</template>

<script>
import GradientLayers from '~/components/gradient-layers/index.vue'
import GradientSection from '~/components/gradient-section/index.vue'
import Hero from '~/components/hero/index.vue'
import MediaText from '~/components/media-text/index.vue'
import Player from '~/components/player/index.vue'
import Talk from '~/components/talk/index.vue'
import FunkyTitle from '~/components/title/index.vue'
import FunkyHR from '~/components/funky-hr/index.vue'

export default {
  components: {
    'hero': Hero,
    'gradient-layers': GradientLayers,
    'gradient-section': GradientSection,
    'media-text': MediaText,
    'player': Player,
    'talk': Talk,
    'funky-title': FunkyTitle,
    'funky-hr': FunkyHR
  }
}
</script>
