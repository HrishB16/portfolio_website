import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {VscGithub} from 'react-icons/vsc'
import {BsTwitter} from 'react-icons/bs'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com" target="_blank" ><FaLinkedinIn/></a>
        <a href="https://github.com" target="_blank" ><VscGithub/></a>
        <a href="https://twitter.com" target="_blank" ><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials