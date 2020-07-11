import React, { useState } from 'react'
import ArrowRight from '../components/icons/ArrowRight'
import ArrowLeft from '../components/icons/ArrowLeft'
import projects from '../assets/projects'
import projectDetailsAnimation from '../animations/projectDetailsAnimation'

const Projects = () => {
  const lastIndex = projects.length - 1

  const [firstSlider, setFirstSlider] = useState({
    isActive: true,
    index: 0
  })

  const [secondSlider, setSecondSlider] = useState({
    isActive: false,
    index: 1
  })

  const [thirdSlider, setThirdSlider] = useState({
    isActive: false,
    index: lastIndex
  })

  const setWhichIsActive = slider => {
    switch (slider) {
      case 'firstSlider':
        setFirstSlider({ ...firstSlider, isActive: true })
        setSecondSlider({ ...secondSlider, isActive: false })
        setThirdSlider({ ...thirdSlider, isActive: false })
        break
      case 'secondSlider':
        setFirstSlider({ ...firstSlider, isActive: false })
        setSecondSlider({ ...secondSlider, isActive: true })
        setThirdSlider({ ...thirdSlider, isActive: false })
        break
      case 'thirdSlider':
        setFirstSlider({ ...firstSlider, isActive: false })
        setSecondSlider({ ...secondSlider, isActive: false })
        setThirdSlider({ ...thirdSlider, isActive: true })
      default:
        return null
    }
  }

  const firstSliderProject = projects[firstSlider.index]
  const secondSliderProject = projects[secondSlider.index]
  const thirdSliderProject = projects[thirdSlider.index]

  const onNext = () => {
    // projectDetailsAnimation()

    // FIX SHIT
    // Bug fix forces update 3rd slider state
    if (thirdSlider.index !== firstSlider.index + 2) {
      setWhichIsActive('secondSlider')
      return setThirdSlider({
        ...thirdSlider,
        index:
          firstSlider.index + 2 <= lastIndex
            ? firstSlider.index + 2
            : firstSlider.index + 2 === lastIndex + 1
            ? 0
            : 1
      })
    }

    if (firstSlider.isActive) {
      setWhichIsActive('secondSlider')
    } else if (secondSlider.isActive) setWhichIsActive('thirdSlider')
    else {
      setFirstSlider({
        isActive: true,
        index: thirdSlider.index + 1 > lastIndex ? 0 : thirdSlider.index + 1
      })

      setSecondSlider({
        isActive: false,
        index: thirdSlider.index + 2 > lastIndex ? 1 : thirdSlider.index + 2
      })

      setThirdSlider({
        isActive: false,
        index: thirdSlider.index + 3 > lastIndex ? 2 : thirdSlider.index + 3
      })
    }
  }

  const onPrev = () => {
    // FIX SHITT BUG
    // Bug fix forces update 2rd slider state
    if (secondSlider.index !== firstSlider.index - 2) {
      setWhichIsActive('thirdSlider')
      return setSecondSlider({
        ...secondSlider,
        index:
          firstSlider.index - 2 >= 0
            ? firstSlider.index - 2
            : firstSlider.index - 2 === -1
            ? lastIndex
            : lastIndex - 1
      })
    }

    if (firstSlider.isActive) {
      return setWhichIsActive('thirdSlider')
    } else if (thirdSlider.isActive) return setWhichIsActive('secondSlider')
    else {
      setFirstSlider({
        isActive: true,
        index: secondSlider.index - 1 < 0 ? lastIndex : secondSlider.index - 1
      })

      setThirdSlider({
        isActive: false,
        index:
          secondSlider.index - 2 < 0 ? lastIndex - 1 : secondSlider.index - 2
      })

      setSecondSlider({
        isActive: false,
        index:
          secondSlider.index - 3 < 0 ? lastIndex - 2 : secondSlider.index - 3
      })
    }
  }

  const getActiveSlider = () => {
    const filterActive = (() =>
      [firstSlider, secondSlider, thirdSlider].filter(
        slider => slider.isActive && slider
      ))()

    const activeSlider = filterActive[0]
    return activeSlider
  }

  const getActiveData = data => {
    return firstSlider.isActive
      ? firstSliderProject[data]
      : secondSlider.isActive
      ? secondSliderProject[data]
      : thirdSlider.isActive
      ? thirdSliderProject[data]
      : null
  }

  return (
    <div className='projects'>
      <div className='project-img'>
        <div className='container'>
          <img
            className={`first-img${
              firstSlider.isActive
                ? ' is-active'
                : secondSlider.isActive
                ? ' before'
                : thirdSlider.isActive && ' after'
            }`}
            src={projects[firstSlider.index].image}
            alt={projects[firstSlider.index].title}
          />

          <img
            className={`second-img${
              secondSlider.isActive
                ? ' is-active'
                : thirdSlider.isActive
                ? ' before'
                : firstSlider.isActive && ' after'
            }`}
            src={secondSliderProject.image}
            alt={secondSliderProject.title}
          />

          <img
            className={`third-img${
              thirdSlider.isActive
                ? ' is-active'
                : firstSlider.isActive
                ? '  before'
                : secondSlider.isActive && ' after'
            }`}
            src={thirdSliderProject.image}
            alt={thirdSliderProject.title}
          />
        </div>
      </div>

      <div className='container'>
        <div className='details'>
          <h2 className='title animated-details'>{getActiveData('title')}</h2>
          <h2 className='secondary animated-details'>
            {getActiveData('secondary')}
          </h2>
          <p className='message animated-details'>{getActiveData('message')}</p>
          <button>View project</button>
          <button>View website</button>
        </div>

        <div className='arrow-container'>
          <ArrowLeft onPrev={onPrev} />
          <ArrowRight onNext={onNext} />
        </div>
      </div>
    </div>
  )
}

export default Projects
