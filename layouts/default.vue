<template>
  <main id="master-wrapper">
    <funky-menu></funky-menu>
    <funky-header></funky-header>
    <nuxt/>
    <funky-footer/>
  </main>
</template>

<script>
import FunkyFooter from '~/components/footer'
import FunkyHeader from '~/components/header'
import Menu from '~/components/menu'
import { getMessage } from '../utils'

export default {
  mounted () {
    this.cycle()
  },
  methods: {
    cycle () {
      setInterval(() => {
        this.$store.commit('incrementGradient')
      }, 5000)
    }
  },
  components: {
    'funky-footer': FunkyFooter,
    'funky-header': FunkyHeader,
    'funky-menu': Menu
  }
}
console.log(`\n${getMessage()}\n`)
</script>

<style lang="scss">

@import '~/assets/scss/base.scss';
@import '~/assets/scss/fonts.scss';
@import '~/assets/scss/utils.scss';

</style>
