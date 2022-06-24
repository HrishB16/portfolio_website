import React from 'react'
import './experience.css'
import {BsCheck2Circle} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
       <h5>Exploring my Skills</h5>
       <h2>My experience</h2>

       <div className="container experience_container">
        <div className="experience_frontend">
           <h3>Frontend Development</h3>
           <div className="experience_content">

             <article className="experience_details">
               <BsCheck2Circle className="experience-details-icons" />
               <div>
                <h4>HTML</h4>
               <small className='text-light'>Experienced</small>
               </div>

             </article>

             <article className="experience_details">
               <BsCheck2Circle className="experience-details-icons" />
               <div>
                 <h4>CSS</h4>
               <small className='text-light'>Novice</small>
               </div>
              
             </article>

             <article className="experience_details">
               <BsCheck2Circle className="experience-details-icons" />
               <div>
                <h4>Javascript</h4>
               <small className='text-light'>Novice</small>
               </div>
             
             </article>

             <article className="experience_details">
               <BsCheck2Circle className="experience-details-icons" />
               <div>
                <h4>React JS</h4>
               <small className='text-light'>Novice</small>
               </div>
               
             </article>

             <article className="experience_details">
               <BsCheck2Circle className="experience-details-icons" />
               <div>
                <h4>C++</h4>
               <small className='text-light'>Novice</small>
               </div>
            
             </article>

             <article className="experience_details">
               <BsCheck2Circle className="experience-details-icons"/>
               <div> <h4>Bootstrap</h4>
               <small className='text-light'>Novice</small>
               </div>
              
             </article>

           </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>

          <div className="experience_content">

          <article className="experience_details">
               <BsCheck2Circle className="experience-details-icons" />
               <div><h4>Node Js</h4>
               <small className='text-light'>Beginner</small>
               </div>               
             </article>

          <article className="experience_details">
               <BsCheck2Circle className="experience-details-icons" />
               <div> <h4>Express Js</h4>
               <small className='text-light'>Noob</small>
               </div>
              
             </article>

          <article className="experience_details">
               <BsCheck2Circle className="experience-details-icons" />
               <div> <h4>Mongo DB</h4>
               <small className='text-light'>Noob</small>
               </div>
              
             </article>

          </div>

        </div>
       </div>
    </section>
  )
}

export default Experience