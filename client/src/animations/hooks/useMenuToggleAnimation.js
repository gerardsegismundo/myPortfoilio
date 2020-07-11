import { useEffect } from 'react'

const useMenuToggleAnimation = tl => {
  useEffect(() => {
    tl.to('.mid--a', {
      rotate: 90,
      ease: 'power1.in',
      duration: 0.1
    })
      .to(
        '.mid--a',
        {
          x: -300,
          duration: 0.3,
          opacity: 0,
          ease: 'power4.out'
        },
        '+=.5'
      )
      .to(
        '.mid--b',
        {
          delay: 0,
          y: 300,
          duration: 0.3,
          opacity: 0,
          ease: 'power4.out'
        },
        '0.5'
      )
      .to(
        '.top',
        {
          marginTop: '10px',
          duration: 0.3,
          rotate: 45,
          ease: 'power4.out',
          transformOrigin: 'center'
        },
        '0.2'
      )
      .to(
        '.bottom',
        {
          marginTop: '10px',
          duration: 0.3,
          rotate: '-45deg',
          transformOrigin: 'center',
          ease: 'power4.out'
        },
        '0.2'
      )

      .from(
        '.page-link',
        {
          opacity: 0,
          duration: 0.5,
          x: 100,
          ease: 'power4.out',
          stagger: {
            from: 'end',
            amount: 0.25
          }
        },
        '.3'
      )

      .fromTo(
        '.social-link',
        {
          opacity: 0,
          x: -200
        },
        {
          opacity: 1,
          x: 0,
          ease: 'power4.out',
          stagger: {
            from: 'end',
            amount: 0.25
          }
        },
        '0'
      )
      .from('.guide-light', 0.5, {
        opacity: 0
      })
      .reverse()

    // eslint-disable-next-line
  }, [])
}

export default useMenuToggleAnimation
