
import { quotes } from './quotes'

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

const getAlt = img => {
  const parts = img.split('/')
  const i = parts.length - 1
  const file = parts[i]
  return file.split('.')[0]
}

const ran = () => Math.floor(Math.random() * quotes.length)

const getMessage = () => quotes[ran()]

export { getAlt, debounce, getMessage, isBooly, createComputedBooly }
