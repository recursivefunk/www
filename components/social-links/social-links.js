
import render from './social-links-renderer'

export default {
  render,
  data () {
    return {
      links: [
        {
          name: 'twitter',
          href: 'https://twitter.com/recursivefunk'
        },
        {
          name: 'medium',
          href: 'https://medium.com/@recursivefunk'
        },
        {
          name: 'linkedin',
          href: 'https://linkedin.com/in/johnnyrayaustin'
        },
        {
          name: 'github',
          href: 'https://github.com/recursivefunk'
        },
        {
          name: 'instagram',
          href: 'https://instagram.com/recursivefunk'
        }
      ]
    }
  }
}
