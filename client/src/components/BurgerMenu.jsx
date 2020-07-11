import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { NavLink } from 'react-router-dom'
import useMenuToggleAnimation from '../animations/hooks/useMenuToggleAnimation'

import flashlight from '../animations/flashlightAnimations'
import { withRouter } from 'react-router-dom'

// PAGE LINKS
const pages = ['home', 'about', 'contact', 'projects']

const BurgerMenu = ({ history }) => {
  /*  // eslint-disable-next-line
  const [isScreenSmall, setIsScreenSmall] = useState()
  const smallScreenMediaQuery = window.matchMedia('(max-width: 767px)')

  // test if screen is small device
  const screenTest = e => setIsScreenSmall(e.matches)

  useEffect(() => {
    setIsScreenSmall(smallScreenMediaQuery.matches)
    smallScreenMediaQuery.addListener(screenTest)

    return () => smallScreenMediaQuery.removeListener(screenTest)
  }, [smallScreenMediaQuery]) */

  useEffect(() => {
    const pageLinks = document.getElementsByClassName('page-link')

    let anchorTagsChild = [...pageLinks].filter(
      p => p.firstChild.classList.contains('active') && p.firstChild
    )

    // parent of active anchor tag <li>
    const activeLiEl = anchorTagsChild[0]

    const { width, left } = activeLiEl.getBoundingClientRect()
    const midSection = width / 2

    gsap.to('.guide-light', 1, {
      delay: 0.1,
      left: left + midSection,
      top: '6rem',
      ease: 'back'
    })
  }, [history.location])

  // TOGGLE ANIMATION
  const tl = gsap.timeline()
  const [menuTl] = useState(tl)
  useMenuToggleAnimation(menuTl)

  const [isOpen, setIsOpen] = useState(false)

  const toggleBurger = () => {
    menuTl.reversed(!menuTl.reversed())

    setIsOpen(!isOpen)
  }

  const turnOnFLNotActive = e =>
    !e.target.classList.contains('active') && flashlight.max()

  return (
    <div>
      <div
        className='burger-menu'
        onClick={toggleBurger}
        onMouseEnter={flashlight.max}
        onMouseLeave={flashlight.min}
      >
        <span className='burger-menu__layer top' />
        <div className='burger-menu__layer mid'>
          <span className='burger-menu__layer mid--a' />
          <span className='burger-menu__layer mid--b' />
        </div>
        <span className='burger-menu__layer bottom' />
      </div>

      <ul
        className='main-nav__page-lists'
        style={{ pointerEvents: !isOpen && 'none' }}
      >
        <div className='guide-light' />
        {pages.map(page => (
          <li
            className='page-link'
            name={page === 'home' ? '/' : `/${page}`}
            key={page}
            onMouseEnter={turnOnFLNotActive}
            onMouseLeave={flashlight.min}
          >
            <NavLink exact to={page === 'home' ? '/' : `/${page}`}>
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default withRouter(BurgerMenu)
