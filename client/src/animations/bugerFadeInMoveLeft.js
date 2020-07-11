import { gsap } from 'gsap'

// Burger animation
const bugerFadeInMoveLeft = () => {
  gsap.from('.burger-menu', {
    delay: 0.25,
    opacity: 0,
    duration: 1,
    x: 200
  })
}

export default bugerFadeInMoveLeft
