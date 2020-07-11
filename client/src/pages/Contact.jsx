import React from 'react'
import { RightDownIcon } from '../components/custom'
import { gsap } from 'gsap'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const lightsOn = e => {
    // determines social icon based on class
    const includesClass = iconClass => {
      return e.target.className.includes(iconClass)
    }

    gsap.to('.flashlight', {
      opacity: 1,
      duration: 0,
      transition: 'power4.easeOut',
      scale: 7,
      backgroundColor: () => {
        if (includesClass('facebook')) return '#3b5998'
        if (includesClass('github')) return '#24292e'
        if (includesClass('linkedin')) return '#0e76a8'
        else return null
      },
      background: includesClass('instagram')
        ? 'radial-gradient(circle at 30% 107%, rgba(253, 244, 151,.5) 0%, rgba(253, 244, 151, .5) 5%, rgba(253,89,73, .5) 45%,rgba(214,36,159, .5) 60%,	rgba(40,90,235,.5) 90%)'
        : null
    })
  }

  const lightsOff = e => {
    gsap.to('.flashlight', {
      duration: 0,
      scale: 1,
      background: '#f5f5f5',
      backgroundColor: '#f5f5f5',
      borderRadius: '50%'
    })
  }

  return (
    <div className='contact'>
      <aside className='col-1'>
        <p>Get in touch</p>
        <p>
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi, fill up the awesome form or send an email.
        </p>

        <div className='social-icons'>
          <i
            className='fa fa-facebook'
            onMouseEnter={lightsOn}
            onMouseLeave={lightsOff}
          ></i>
          <i
            className='fa fa-instagram'
            datasocial='instagram'
            onMouseEnter={lightsOn}
            onMouseLeave={lightsOff}
          ></i>
          <i
            className='fa fa-github'
            onMouseEnter={lightsOn}
            onMouseLeave={lightsOff}
          ></i>
          <i
            className='fa fa-linkedin'
            onMouseEnter={lightsOn}
            onMouseLeave={lightsOff}
          ></i>
        </div>

        <section className='contact-details'>
          <p>
            deets
            <RightDownIcon />
          </p>
          <p>+1 (805) - 790 - 6378</p>
          <p>gerardmartinsegismundo@gmail.com</p>
        </section>
      </aside>

      <div className='col-2'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
