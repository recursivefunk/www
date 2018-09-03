
import messages from './quotes'

const debounce = (func, wait, immediate) => {
  let timeout
  return () => {
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) {
        func(...args)
      }
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) {
      func(...args)
    }
  }
}

const ran = () => Math.floor(Math.random() * messages.length)

const getMessage = () => messages[ran()]

export { debounce, getMessage }
