import React, { useEffect } from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen, AiOutlineMail} from 'react-icons/ai'
import {MdWorkOutline, MdOutlineDraw, MdPeopleOutline} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const[navActive, setNavActive] = useState('#')

  return (
    <nav>
      <a href="#" className={navActive === '#'? 'active': ''} onClick={() => setNavActive('#')}><AiOutlineHome/></a>

      <a href="#about" className={navActive === '#about'? 'active': ''} onClick={() => setNavActive('#about')}><AiOutlineUser/></a>
      
      <a href="#experience" className={navActive === '#experience'? 'active': ''} onClick={() => setNavActive('#experience')}><MdWorkOutline/></a>

      {/* <a href="#commissions" className={navActive === '#commissions'? 'active': ''} onClick={() => setNavActive('#commissions')}><MdOutlineDraw/></a> */}

      <a href="#portfolio" className={navActive === '#portfolio'? 'active': ''} onClick={() => setNavActive('#portfolio')}><AiOutlineFolderOpen/></a>

      {/* <a href="#reviews" className={navActive === '#reviews'? 'active': ''} onClick={() => setNavActive('#reviews')}><MdPeopleOutline/></a> */}

      <a href="#contact" className={navActive === '#contact'? 'active': ''} onClick={() => setNavActive('#contact')}><AiOutlineMail/></a>
    </nav>
  )
}

export default Nav