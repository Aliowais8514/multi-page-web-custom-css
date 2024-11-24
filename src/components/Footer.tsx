import React from 'react'
import { FaLinkedin,FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='icons '>
      <FaLinkedin />
      <FaGithub className="icons2"/>
      </div>
     <p>&copy; 2024 Watch World | All Right Reserved</p>
    </footer>
  )
}

export default Footer