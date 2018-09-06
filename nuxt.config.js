module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Recursive Funk',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Facebook Open Graph Tags
      { property: 'og:title', content: 'Recursive Funk' },
      { property: 'og:site_name', content: 'Recursive Funk' },
      { property: 'og:url', content: 'https://recursivefunk.io/' },
      { property: 'og:description', content: 'Johnny Ray Austin is Recursive Funk' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://recursivefunk.io/img/og.jpg' },

      // Twitter Summary Card with Large Image tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@recursivefunk' },
      { name: 'twitter:creator', content: '@recursivefunk' },
      { name: 'twitter:title', content: 'Recursive Funk' },
      { name: 'twitter:description', content: 'Johnny Ray Austin is Recursive Funk' },
      { name: 'twitter:image', content: 'https://recursivefunk.io/img/og.jpg' },
      { hid: 'description', name: 'description', content: 'Johnny Ray&apos;s personal website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
