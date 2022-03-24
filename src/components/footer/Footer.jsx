import React from 'react'
import './Footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>N-T-N</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/nhan30520/" target='_blank'><FaFacebookF /></a>
        <a href="https://github.com/TrongNhan30520" target='_blank'><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/nhantrong30520/" target='_blank'><AiFillLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; NTN Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
