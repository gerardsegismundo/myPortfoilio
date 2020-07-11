import React, { useState } from 'react'
import projects from '../assets/projects'

import { ReactComponent as RightArrow } from '../assets/svg/rightArrow.svg'
import { ReactComponent as LeftArrow } from '../assets/svg/leftArrow.svg'

import { useEffectOnce } from 'react-use'

import {
  slideRightFadeIn,
  slideLeftFadeOut,
  animateTextDetails,
  fadeOutPrevious,
  fadeOutNext
} from '../animations/sliderAnimations'

const Projects = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const lastIndex = projects.length - 1
  const [currentIndex, setCurrentIndex] = useState(0)

  const previousProject =
    projects[currentIndex - 1 >= 0 ? currentIndex - 1 : lastIndex]
  const currentProject = projects[currentIndex]
  const nextProject =
    projects[currentIndex + 1 > lastIndex ? 0 : currentIndex + 1]

  useEffectOnce(() => slideRightFadeIn())

  const onNext = async () => {
    setIsAnimating(true)
    slideRightFadeIn(() => setIsAnimating(false))
    animateTextDetails()

    setCurrentIndex(currentIndex + 1 <= lastIndex ? currentIndex + 1 : 0)
    fadeOutPrevious()
  }

  const onPrev = async () => {
    setIsAnimating(true)
    slideLeftFadeOut(() => setIsAnimating(false))
    animateTextDetails()

    setCurrentIndex(currentIndex - 1 >= 0 ? currentIndex - 1 : lastIndex)
    fadeOutNext()
  }

  return (
    <div className='projects'>
      <div className='project-img'>
        <div className='projects-container'>
          <img
            className='prev-img'
            src={previousProject.image}
            alt={previousProject.title}
          />
          <img
            className='current-img'
            src={currentProject.image}
            alt={currentProject.title}
          />

          <img
            className='next-img'
            src={nextProject.image}
            alt={nextProject.title}
          />
        </div>
      </div>

      <div className='details-container'>
        <div className='details'>
          <h2 className='title animated-details'>{currentProject.title}</h2>
          <h2 className='secondary animated-details'>
            {currentProject.secondary}
          </h2>
          <p className='message animated-details'>{currentProject.message}</p>

          <button className='proj-btn'>View project</button>
          <button className='site-btn'>View website</button>
        </div>

        <div className={`arrow-container${isAnimating ? ' is-animating' : ''}`}>
          <LeftArrow onClick={onPrev} />
          <RightArrow onClick={onNext} />
          {/* <ArrowLeft onPrev={onPrev} />
          <ArrowRight onNext={onNext} /> */}
        </div>
      </div>
    </div>
  )
}

export default Projects
