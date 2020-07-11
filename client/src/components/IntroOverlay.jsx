import React from 'react'

const OverlayBackground = () => {
  return (
    <div className='overlay-background'>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
    </div>
  )
}

const IntroOverlay = () => {
  return (
    <div className='intro-overlay'>
      <OverlayBackground />
      <div className='container'>
        <p>
          <span className='i'>I</span>
          <span className='am'>am</span>
        </p>
      </div>
    </div>
  )
}

export default IntroOverlay
