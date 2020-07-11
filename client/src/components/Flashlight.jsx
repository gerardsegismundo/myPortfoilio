import React from 'react'
import { useEffectOnce } from 'react-use'
import { gsap } from 'gsap'

const Flashlight = () => {
  const followCursor = e => {
    gsap.to('.flashlight', 0.5, {
      css: { left: e.clientX + 'px', top: e.clientY + 'px' }
    })
  }

  useEffectOnce(() => {
    window.addEventListener('mousemove', followCursor)

    return () => window.removeEventListener('mousemove', followCursor)
  })

  return <div className='flashlight' />
}

export default Flashlight
