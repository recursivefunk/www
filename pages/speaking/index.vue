<template>
    <span>
        <div class="container">
            <section class="Section">
                <funky-title
                    text="Speaking"
                    size="large"
                    highlight=true
                    tag="h1">
                </funky-title>

                <div class="Media-Text-Grid">
                    <media-text img="/img/cascadia-stage.jpg" displayWhen="show-lg-up"></media-text>
                    <media-text img="/img/cto-summit-2019.jpg"></media-text>
                </div>
            </section>

            <funky-hr />

            <section class="Section">
                <funky-title
                    text="Upcoming"
                    size="small"
                    highlight=true
                    tag="h2">
                </funky-title>

                <div class="Talk-Grid Talk-Grid--Single">
                    <talk
                        background="#ffffff"
                        dest="https://newyork2020.theleaddeveloper.com/talks#johnny-austin"
                        outline="#000"
                        logo="/img/logos/lead-dev-logo.svg">
                    </talk>
                </div>
            </section>

            <section class="Section">
                <funky-title
                    text="Past Appearances"
                    size="small"
                    highlight=true
                    tag="h2">
                </funky-title>
                <div class="Talk-Grid">
                    <talk
                        background="#b9debc"
                        dest="https://2019.cascadiajs.com/speakers/johnny-ray-austin"
                        logo="/img/logos/cascadiajs.svg">
                    </talk>
                    <talk
                        background="#e10079"
                        dest="https://2019.jsconf.eu/johnny-austin/finding-your-abstraction-sweet-spot.html"
                        logo="/img/logos/jsconf.png">
                    </talk>
                    <talk
                        dest="https://youtu.be/i8RoNdLuOYU"
                        outline="#000"
                        logo="/img/logos/strangeloop.jpg"
                        background="#fff">
                    </talk>
                    <talk
                        dest="http://afrotech.com/"
                        logo="/img/logos/afrotech-logo.png"
                        background="#000">
                    </talk>
                    <talk
                        dest="https://ampmdc.co/"
                        outline="#000"
                        logo="/img/logos/ampm.jpg"
                        background="#fff">
                    </talk>
                    <talk
                        dest="https://www.ctoconnection.com/"
                        logo="/img/logos/cto-logo.png"
                        background="#f7931e">
                    </talk>

                    <talk
                        dest="http://frontendcareers.website/"
                        outline="#000"
                        flavor="dark"
                        logo="/img/logos/frontend-careers.png"
                        background="#fff">
                    </talk>
                    <talk
                        dest="http://wearecolorcoded.us/"
                        outline="#000"
                        flavor="dark"
                        logo="/img/logos/color-coded.jpg"
                        background="#fff">
                    </talk>
                    <talk
                        dest="http://codelandconf.com/"
                        flavor="dark"
                        logo="/img/logos/2018-codeland-logo.png"
                        background="#FFD65C">
                    </talk>
                    <talk
                        dest="http://nationjs.com/"
                        flavor="dark"
                        logo="/img/logos/nationjs-logo.png"
                        outline="#000">
                    </talk>
                    <talk
                        dest="https://www.modev.com/"
                        logo="/img/logos/cww.png"
                        background="#e23430">
                    </talk>
                    <talk
                        dest="https://generalassemb.ly/"
                        outline="#000"
                        flavor="dark"
                        logo="/img/logos/ga.png">
                    </talk>
                    <talk
                        dest="https://contrarycon.com/"
                        flavor="dark"
                        logo="/img/logos/contrary-con.svg"
                        background="#fcf6f5">
                    </talk>
                </div> <!-- end talk grid -->
            </section>
        </div>
    </span>
</template>

<script>
import GradientLayers from '~/components/gradient-layers/index.vue'
import GradientSection from '~/components/gradient-section/index.vue'
import MediaText from '~/components/media-text/index.vue'
import copy from '~/components/copy/index.vue'
import FunkyTitle from '~/components/title/index.vue'
import Talk from '~/components/talk/index.vue'
import FunkyHR from '~/components/funky-hr/index.vue'

export default {
  components: {
    'gradient-layers': GradientLayers,
    'gradient-section': GradientSection,
    'media-text': MediaText,
    'funky-title': FunkyTitle,
    talk: Talk,
    copy,
    'funky-hr': FunkyHR
  }
}
</script>
