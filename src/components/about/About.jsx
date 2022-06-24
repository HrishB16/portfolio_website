import React from 'react'
import './about.css'
import ME from '../../assets/person1.png'
import {TbAward} from 'react-icons/tb'
import {TbUsers} from 'react-icons/tb'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <TbAward className="about_icon" />
              <h5>Experience</h5>
              <small> Still a Learner waiting for opportunities </small>
            </article>
          

            <article className="about_card">
              <TbUsers className="about_icon" />
              <h5>Clients</h5>
              <small> Ready to contribute </small>
            </article>
            
            <article className="about_card">
              <AiOutlineFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small> Made a portfolio website </small>
            </article>
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cumque repellendus nisi odio hic itaque pariatur? Veritatis nostrum quisquam modi, temporibus accusantium animi blanditiis ducimus!</p>

          <a href="#contact" className='btn btn-primary'>Get in Touch</a>

        </div>

        </div>
    </section>
  )
}

export default About