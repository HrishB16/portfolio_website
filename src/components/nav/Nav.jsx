import React,{useState} from 'react'
import {BiHomeAlt} from 'react-icons/bi'
import {FaUserAlt} from 'react-icons/fa'
import {BiBookAlt} from 'react-icons/bi'
import {MdWork} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'


import './nav.css'

const Nav = () => {

  const [activeNav, setActiveNav] = useState("#")

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav ==='#'? 'active':''}  ><BiHomeAlt/></a>

      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav ==='#about'? 'active':''}  ><FaUserAlt/></a>

      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav ==='#experience'? 'active':''} ><BiBookAlt/></a>

      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav ==='#services'? 'active':''} ><MdWork/></a>

      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact'? 'active':''} ><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav