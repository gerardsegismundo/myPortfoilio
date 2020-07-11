import { gsap } from 'gsap'
// const tl = gsap.timeline()

const flashlight = (() => {
  const min = () => {
    gsap.to('.flashlight', {
      transition: 'power4.easeOut',
      duration: 0,
      opacity: 0.3,
      background: '#f5f5f5',
      backgroundColor: '#f5f5f5',
      scale: 1
    })
  }

  const max = () => {
    gsap.to('.flashlight', {
      backgroundColor: 'rgba(205, 193, 117,.5)',
      scale: 8,
      opacity: 1,
      duration: 0,
      transition: 'power4.easeOut'
    })
  }

  return { min, max }
})()

export default flashlight
