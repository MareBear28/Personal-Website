import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen, AiOutlineMail} from 'react-icons/ai'
import {MdWorkOutline, MdOutlineDraw, MdPeopleOutline} from 'react-icons/md'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><MdWorkOutline/></a>
      <a href="#commissions"><MdOutlineDraw/></a>
      <a href="#portfolio"><AiOutlineFolderOpen/></a>
      <a href="#reviews"><MdPeopleOutline/></a>
      <a href="#contact"><AiOutlineMail/></a>
    </nav>
  )
}

export default Nav