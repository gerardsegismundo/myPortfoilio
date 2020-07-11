import { gsap } from 'gsap'

const tl = gsap.timeline()

const homeAnimation = callback => {
  tl.from('.home', {
    opacity: 0,
    duration: 0.1,
    backgroundColor: '#a4a4a4'
  })
    .from('.right-col', {
      opacity: 0,
      duration: 0.75,
      ease: 'power1.in',
      x: 100
    })

    .from(
      '.left-col',
      {
        opacity: 0,
        duration: 0.75,
        ease: 'power1.in',
        x: -100
      },
      '-=.75'
    )

    .from(
      '.name',
      {
        duration: 1,
        opacity: 0,
        ease: 'power1.in',
        stagger: 0.5
      },
      '.1'
    )
    .from(
      '.letters',
      {
        duration: 0.5,
        opacity: 0,
        y: 'random(+50, -50)',
        stagger: {
          amount: 1,
          ease: 'power1.in',
          from: 'random'
        }
      },
      '-=1'
    )

    .to(
      '.view-button',
      {
        duration: 0.5,
        onComplete: callback,
        y: -30,
        opacity: 1,
        skewY: '-3deg'
      },
      '-=1'
    )

    .to('.letters', {
      duration: 0.75,
      opacity: 0
    })

    .to(
      '.letters-original',
      {
        duration: 0.3,
        delay: -1,
        opacity: 0.5,
        scale: 1.01,
        ease: 'power4.out'
      },
      '-=.4'
    )

    .to('.fa-arrow-right', {
      delay: -1,
      opacity: 0.8,
      x: '2rem',
      color: '#cdc175'
    })
}

export default homeAnimation
