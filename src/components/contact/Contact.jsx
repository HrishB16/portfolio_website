import React, { useRef } from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import './contact.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wv38iqh','template_28fvr8w', form.current, '_Hr_corQEYoAzDHPy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
               <AiOutlineMail className='contact_option-icons' />
            <h4>Email Id</h4>
            <h5>&darr</h5>
            <a href="mailto:rajmike00@gmail.com" target="_blank">Send a mail</a>
          </article>

          <article className="contact_option">
               <BsFacebook className='contact_option-icons' />
            <h4>Facebook Messenger</h4>
            <a href="https://facebook.com" target="_blank">Reach out on Facebook</a>
          </article>

          <article className="contact_option">
               <AiFillTwitterCircle className='contact_option-icons' />
            <h4>Twitter</h4>
            <a href="https://twitter.com" target="_blank">Reach out on Twitter</a>
          </article>
        </div>

        {/* End of Contact details */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <input type="text" name='subject' placeholder='Provide a subject' required/>
          <textarea type="message" name='name' rows='7' placeholder='Your Message' required ></textarea>
          
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact