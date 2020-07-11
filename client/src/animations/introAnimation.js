import { gsap } from 'gsap'

let tl = gsap.timeline()

const introAnimation = completeAnimation => {
  tl.from('.i', {
    duration: 1.8,
    y: -200,
    color: 'white',
    scale: 0.1,
    transformOrigin: 'top',
    opacity: 0.1,
    ease: 'power4.out'
  })
    .from(
      '.am',
      {
        duration: 1.5,
        y: 150,
        transformOrigin: 'center',
        scale: 0.1,
        opacity: 0,
        ease: 'power4.out'
      },
      '-=1'
    )
    .to('.i', 5, {
      opacity: 0,
      scale: 4,
      delay: -1,
      x: -350,
      ease: 'power4.out'
    })
    .to('.am', 1.8, {
      x: 250,
      scale: 1.5,
      opacity: 0,
      delay: -4,
      ease: 'power1.out'
    })
    .to(
      '.box',
      {
        duration: 3,
        opacity: 0,
        y: 'random(+1000, -1000)',
        ease: 'power1.inOut',
        stagger: {
          amount: '1.5',
          ease: 'linear',
          from: 'random',
          onComplete: completeAnimation
        }
      },
      +2.5
    )
}

export default introAnimation
