<template>
    <span>
        <hero overlay=true img="/img/logo@200.png"></hero>
        <div class="container">
            <div class="Media-Text-Grid">
                <media-text img="/img/me-train.jpg"></media-text>
                <media-text title="TL;DR">
                    My name is Johnny. I work at <a href="https://mapbox.com" target="_blank">Mapbox</a> in DC as Head of Directions. My past includes Director of Technology at <a href="https://isl.co" target="_blank">ISL</a>, as well as engineering leadership at <a href="https://capitalone.com" target="_blank">Capital One</a>, <a href="https://everfi.com" target="_blank">EverFi</a> and more.<br><br>If you're looking for someone to <a href="/speaking">speak</a> about engineering leadership, JavaScript or just want to say hello, feel free to reach out!
                </media-text>
            </div>

            <div class="Media-Text-Grid">
                <media-text title="Me" displayWhen="show-lg-up">
          I'm a software professional with over a decade of experience building and designing systems. I'm a public speaker, a writer, and an educator. I sometimes advise early stage startups and have even built some prototypes. If you want to learn more about my work, <a href="mailto:johnny@johnnyray.me">drop me a line</a>! You can read more about my background <a href="/about">here</a>.
                </media-text>
                <media-text img="/img/view.jpg"></media-text>
                <media-text title="Me" displayWhen="hide-lg-up">
          I'm a software professional with over a decade of experience building and designing systems. I'm a public speaker, a writer, and an educator. I sometimes advise early stage startups and have even built some prototypes. If you want to learn more about my work, <a href="/work">head here</a> or <a href="mailto:johnny@johnnyray.me">drop me a line</a>! You can read more about my background <a href="/about">here</a>.
                </media-text>
            </div>

            <div class="Media-Text-Grid">
                <media-text img="/img/records.jpg"></media-text>
                <media-text title="Recursive Funk">
          I'm interested in everything at the intersection of technology and art. I'm an introverted people-person, and I'm immediately drawn to eccentricity. I enjoy not only meeting new and exciting people, but I like getting to know them as well. I value strong, lasting relationships.
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

export default {
  components: {
    'hero': Hero,
    'gradient-layers': GradientLayers,
    'gradient-section': GradientSection,
    'media-text': MediaText
  }
}
</script>
