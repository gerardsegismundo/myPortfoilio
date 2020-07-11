import gsap from 'gsap'

const slideRightFadeIn = callback => {
  gsap.fromTo(
    '.current-img',
    { x: '-5vw', opacity: 0, filter: 'sepia(100)' },
    {
      x: '0vw',
      opacity: 1,
      ease: 'power1.out',
      duration: 0.75,
      filter: 'sepia(0)',
      delay: 0.5,
      onComplete: callback
    }
  )
}

const slideLeftFadeOut = callback => {
  gsap.fromTo(
    '.current-img',
    { x: '5vw', opacity: 0, filter: 'sepia(100)' },
    {
      x: '0vw',
      opacity: 1,
      ease: 'power4.Out',
      duration: 0.75,
      filter: 'sepia(0)',
      delay: 0.5,
      onComplete: callback
    }
  )
}

const animateTextDetails = () => {
  gsap.from('.animated-details', {
    duration: 0.75,
    opacity: 0,
    ease: 'sine.in',
    stagger: 0.2,
    filter: 'grayscale(100)'
  })
}

const fadeOutPrevious = () => {
  gsap.fromTo(
    '.prev-img',
    {
      filter: 'sepia(0)',
      opacity: 1,
      scale: 1
    },
    {
      ease: 'power4.out',
      duration: 0.75,
      filter: 'sepia(100)',
      opacity: 0
    }
  )
}

const fadeOutNext = () => {
  gsap.fromTo(
    '.next-img',
    {
      filter: 'sepia(0)',
      opacity: 1,
      scale: 1
    },
    {
      ease: 'power4.out',
      duration: 0.75,
      filter: 'sepia(100)',
      opacity: 0
    }
  )
}

export {
  slideRightFadeIn,
  slideLeftFadeOut,
  animateTextDetails,
  fadeOutPrevious,
  fadeOutNext
}
