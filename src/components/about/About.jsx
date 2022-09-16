import React from 'react'
import './about.css'
import ME from '../../assets/sonu.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
         <div className='about__me'>
         <div className='about__me-image'>
         <img src={ME} alt='About Image'/>
         </div>
         </div>
         <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>Fresher</small>
              </article>
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>NA</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>3 Completed</small>
              </article>
            </div>
            <p>
             Myself sonu kumar and currently i am studying in IIT Bhilai pursuing Btech degree.I am in 3rd year . I am a full stack web developer and love making attractive websites. I am a keen learner and always excited to learn new things.
            </p>
            <a href='#contact' className='btn btn-primary'> Let's Talk</a>
         </div>
      </div>
    </section>
  )
}

export default About
