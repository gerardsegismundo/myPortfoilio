import { useEffect } from 'react'
import debounce from '../helpers/debounce'

const useSetDimensions = (dimensions, setDimensions) => {
  useEffect(() => {
    // Grab inner height of window for mobile reasons when dealing with vh
    let vh = dimensions.height * 0.01
    // Set css variable vh
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const debouncedHandleResize = debounce(function handleResize () {
      console.log(dimensions)
      setDimensions()
    }, 100000)
    setDimensions()
    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })
}

export default useSetDimensions
