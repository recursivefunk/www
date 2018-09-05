
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

const isBooly = item => (
  item === true || item === 'true' || item === false || item === 'false'
)

const createComputedBooly = (varName) => {
  return function () {
    if (this[varName] === 'true' || this[varName] === true) {
      return true
    } else if (this[varName] === 'false' || this[varName] === false) {
      return false
    }
  }
}

const ran = () => Math.floor(Math.random() * messages.length)

const getMessage = () => messages[ran()]

export { debounce, getMessage, isBooly, createComputedBooly }
