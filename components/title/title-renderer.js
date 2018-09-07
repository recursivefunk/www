
export default function (h) {
  const outerClasses = {
    'title': true,
    'mt1 mb1': this.pad,
    'title--large': this.size === 'large' ? true : false, // eslint-disable-line
    'title--small': this.size === 'small' ? true : false, // eslint-disable-line
    // The hero title gets special styling. If it's an h1 AND a in a hero,
    // don't apply the .title--h1 class
    'title--h1': (this.tag === 'h1' && !this.heroTitle) ? true : false // eslint-disable-line
  }
  const innerClasses = {
    'title__text': true,
    'title__text--red': this.highlight
  }
  const text = this.text
  const span = <span class={ innerClasses }>{text}</span>
  const data = { outerClasses, span }
  const compileH1 = data => (
    <h1 class={ data.outerClasses }>{ data.span }</h1>
  )
  const compileH2 = data => (
    <h2 class={ data.outerClasses }>{ data.span }</h2>
  )
  const compileH3 = data => (
    <h3 class={ data.outerClasses }>{ data.span }</h3>
  )
  let markup
  let func

  if (this.tag === 'h1') {
    func = compileH1
  } else if (this.tag === 'h2') {
    func = compileH2
  } else {
    func = compileH3
  }

  markup = func(data)

  return markup
}
