import React, { useState, useEffect } from 'react'
import primarypic from '../assets/primarypic.jpg'
import { NavLink } from 'react-router-dom'
import homeAnimation from '../animations/homeAnimation'
// import Warped from '../components/Warped'

import flashlight from '../animations/flashlightAnimations'

// FOR ANIMATION - remove after animation complete
const FullstackDivs = () => (
  <h2>
    {[...'+FullstackJavascriptDeveloper'].map((l, i) => {
      return (
        <div className='letters' key={l + i}>
          {l}
        </div>
      )
    })}
  </h2>
)

const HomeLanding = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)

  useEffect(() => {
    !isAnimationComplete && homeAnimation(() => setIsAnimationComplete(true))
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <aside className='left-col'>
        <img className='primary-pic' src={primarypic} alt='primary pic' />
      </aside>
      <main className='right-col'>
        <h1>
          <div className='name'>Gerard</div> <div className='name'>Martin</div>
          <div className='name'>Segismundo</div>
        </h1>
        {!isAnimationComplete ? <FullstackDivs /> : null}
        <h2 className='letters-original'>
          <span className='plus'>+</span>Fullstack Javascript Developer
        </h2>
        <NavLink
          className='view-button'
          exact
          to='/projects'
          onMouseEnter={flashlight.max}
          onMouseLeave={flashlight.min}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className='view-button--text'>
            View my work <i className='fa fa-arrow-right'></i>
          </span>
        </NavLink>
      </main>
    </>
  )
}

export default HomeLanding
