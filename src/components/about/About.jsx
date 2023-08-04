import React from 'react'
import './about.css'
import ME from '../../assets/CSULB Grad-70.jpg'
import {BsFolderCheck} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {MdWorkOutline} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Learn</h5>
      <h2>About Me</h2>

      {/* about me pfp */}
      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        {/* about me card background */}
        <div className="about__content">
          {/* <div className="about__cards">
            <article className='about_card'>
              <BsFolderCheck className='about_icon'/>
              <h5>Projects</h5>
              <small>Ever Growing</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>Clients Example</small>
            </article>

            <article className='about_card'>
              <MdWorkOutline className='about_icon'/>
              <h5>Experience</h5>
              <small>Experience Example</small>
            </article>
          </div> */}
          <p>
              I am a first-generation Filipino-American. I attended California State University of Long Beach for college and graduated with a Bachelors of Science in Computer Science. Some hobbies that I have include drawing anime characters, playing video games, and collecting Pokemon cards. I am excited to obtain an entry-level position to gain a step forward into my career while being able to learn new things along the way.
            </p>
            <div className="buttons">
               <a href="#contact" className='btn btn-primary'>Contact Me</a>
              <a href="#portfolio" className='btn'>View My Projects</a>
            </div>
        </div>
      </div>

    </section>
  )
}

export default About