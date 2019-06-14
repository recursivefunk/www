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
                    <copy>Johnny is an engineering leader with experience building cross-functional teams while driving towards technology, product and revenue goals. He is an active member of the open source community - contributing to projects such as Node.js and many others.</copy>
                </div>
                <div class="copy-paragraph">
                    <copy>Johnny serves as a member of the IT advisory board for the National Academy Foundation where he helps to ensure students receive the resources necessary to prepare them for industry or higher education. He is the former Curriculum Development Lead for the DC chapter of Black Girls Code - an organization dedicated to teaching young women of color how to program. Johnny now serves as a technology advisor for Black Girls Code.</copy>
                </div>
                <div class="copy-paragraph">
                    <copy>He is also an educator - having taught Front End Web Development as well as JavaScript courses through General Assembly. During his time as Director of Technology at iStrategyLabs, Johnny led the development of projects and campaigns for clients such as Facebook, NBC Universal, Kroger, Volkswagen and more.</copy>
                </div>
                <div class="copy-paragraph">
                    <copy>As a member of the Tech Fellows program, Johnny helped drive the engineering culture at Capital One through high impact technology contributions and thought leadership. He also helped launch Capital One's Eno product - a Machine Learning enabled intelligent assistant that helps customers manage their money.</copy>
                </div>
                <div class="copy-paragraph">
                    <copy>As Mapbox's Navigation Engineering Director, Johnny
                    led a cross-functional team to transform the way Mapbox
                    detected new data in the road network. Through the use of
                    computer vision and statistical analysis, his team added
                    tens of thousands of new road data points over the course
                    of several months. He also formed and led the Logistics
                    product vertical -  solving problems for customers
                    concerned with highly-efficient delivery optimization
                    scenarios.</copy>
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

export default {
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
