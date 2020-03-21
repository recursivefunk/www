<template> <span>
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
                <media-text img="/img/machine.jpg"></media-text>
                <media-text title="The Machine">
                    I use the <a :href="laptop">Lenovo ThinkPad X1 Carbon 7th
                        Gen, Black</a> (running <a :href="os">Ubuntu</a> LTS), connected to a
                    <a :href="dockingStation">Gen 2 Lenovo ThinkPad docking station</a> with
                    two <a :href="monitor">27-inch Dell LED-Lit monitors</a>. No trackpad for me. I use a
                    <a :href="mouse">Logitech MX Ergo Wireless Trackball Mouse</a>.
                </media-text>
            </div>

            <!-- Keyboard -->
            <div class="Media-Text-Grid">
                <media-text title="The Board" displayWhen="show-lg-up">
                    In truth, I have at least four different keyboards. The
                    prettiest one (and my most commonly used one) is the
                    <a :href="keyboard">Massdrop Ctrl Mechanical Keyboard (halo
                        clear switches)</a>.
                    It's bright, loud, obnoxious, and I love it. It's connected
                    to my dock using a <a :href="usbCable">Mechcables Pulse V2 Custom Coated-Coil
                        USB cable</a>, which looks great.
                </media-text>
                <media-text img="/img/board.jpg"></media-text>
                <media-text title="The Board" displayWhen="hide-lg-up">
                    In truth, I have at least four different keyboards. The
                    prettiest one (and my most commonly used one) is the
                    <a :href="keyboard">Massdrop Ctrl Mechanical Keyboard (halo
                        clear switches)</a>.
                    It's bright, loud, obnoxious, and I love it. It's connected
                    to my dock using a <a :href="usbCable">Mechcables Pulse V2 Custom Coated-Coil
                        USB cable</a>, which looks great.
                </media-text>
            </div>

            <!-- Microphone -->
            <div class="Media-Text-Grid">
                <media-text img="/img/mic.jpg"></media-text>
                <media-text title="The Mic">
                    The <a :href="mic">Audio Technica AT2020</a> is phenomenal. I receive a ton of
                    compliments on the quality of the sound when I'm on calls
                    with people. Can you buy a higher-end mic? For sure. For
                    practical purposes, I don't think you need to. It's paired
                    with a <a :href="audioInterface">Focusrite Scarlett Solo (3rd Gen) USB Audio
                        Interface</a>.
                </media-text>
            </div>

            <!-- Headphones -->
            <div class="Media-Text-Grid">
                <media-text title="The Cans" displayWhen="show-lg-up">
                    My primary headphones are the <a :href="headphones2"
                        target="_blank">Massdrop Sennheiser X
                        Massdrop HD 6XXs</a>, which are open-back. They're
                    great for acheiving that airy soundstage. Open-back headphones,
                    however, leak noise into the mic, causing echos. So for
                    taking calls, I switch to the <a target="_blank" :href="headphones">Sony
                        MDR7506's</a> which are super solid.
                </media-text>
                <media-text img="/img/cans.jpg"></media-text>
                <media-text title="The Cans" displayWhen="hide-lg-up">
                    My primary headphones are the <a :href="headphones2"
                        target="_blank">Massdrop Sennheiser X
                        Massdrop HD 6XXs</a>, which are open-back. They're
                    great for acheiving that airy soundstage. Open-back headphones,
                    however, leak noise into the mic, causing echos. So for
                    taking calls, I switch to the <a target="_blank" :href="headphones">Sony
                        MDR7506's</a> which are super solid.
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
import gear from './gear.json'

export default {
  data: () => gear,
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
