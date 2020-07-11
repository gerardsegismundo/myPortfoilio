import React from 'react'
// import Warped from '../components/Warped'
import { ReactComponent as Emoji } from '../assets/svg/emoji.svg'

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-1'>
            <div className='layer-overlay' />
            <img src={require('../assets/happy.jpg')} alt='about' />
          </div>
          <section className='col-2 about-me'>
            <h2>Make it simple but significant.</h2>

            <p>
              Hi! I am Gerard, a fullstack developer specializing in front end
              development.. I can code in multiple languages. I mainly use
              Javascript both in frontend(React JS) and backend(Node JS).
              <Emoji />
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
