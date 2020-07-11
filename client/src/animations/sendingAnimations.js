import gsap from 'gsap'
const tl = gsap.timeline()

const animateSendingSpinner = () =>
  gsap.to('.ring-loader-overlay', 0, { css: { visibility: 'visible' } })

tl.fromTo('.container__sent', 0, { opacity: 1 }, { opacity: 0 }).fromTo(
  '.ring-loader-overlay',
  {
    opacity: 0,

    ease: 'power4.in'
  },
  {
    opacity: 1,
    duration: 0.25
  }
)

const animateSentSpinner = fn =>
  tl
    .fromTo(
      '.container__sending',
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.25,
        ease: 'power4.out'
      }
    )
    .fromTo(
      '.container__sent',
      0.5,
      { opacity: 0 },
      {
        opacity: 1,
        ease: 'power3.out'
      }
    )
    .to('.container__sent', {
      duration: 0.75,
      opacity: 0,
      onComplete: () => {
        setTimeout(() => {
          fn()

          gsap.to('.ring-loader-overlay', 0, {
            css: { visibility: 'hidden' }
          })
        })
      }
    })

export { animateSendingSpinner, animateSentSpinner }
