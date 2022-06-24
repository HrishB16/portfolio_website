import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {VscGithub} from 'react-icons/vsc'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
       <a href="#" className='footer_logo'>HB</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div  className='footer_socials'>
          <a href="https://facebook.com"><BsFacebook className='icon_footer' /></a>
          <a href="https://github.com"><VscGithub className='icon_footer' /></a>
          <a href="https://linkedin.com"><FaLinkedinIn className='icon_footer' /></a>
          <a href="https://twitter.com"><AiFillTwitterCircle className='icon_footer' /></a>
        </div>

        <div className="footer_copyright">
          <h2>&copy; Hrishikesh Borah's site. All Rights Reserved</h2>
        </div>

    </footer>
  )
}

export default Footer