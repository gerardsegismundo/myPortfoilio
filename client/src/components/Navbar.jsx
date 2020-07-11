import React from 'react'
import BurgerMenu from './BurgerMenu'
import flashlight from '../animations/flashlightAnimations'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav className='nav-social'>
        <ul>
          <li
            className='social-link'
            onMouseEnter={flashlight.max}
            onMouseLeave={flashlight.min}
          >
            <a
              href='https://github.com/gerardsegismundo'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </li>
          <li
            className='social-link'
            onMouseEnter={flashlight.max}
            onMouseLeave={flashlight.min}
          >
            <a
              href='https://www.linkedin.com/in/gerard-martin-segismundo-601803165/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Linkedin
            </a>
          </li>
        </ul>
      </nav>
      <nav className='main-nav'>
        <BurgerMenu />
      </nav>
    </div>
  )
}

export default Navbar
