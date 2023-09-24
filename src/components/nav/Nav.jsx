import {React, useState} from 'react'
import './nav.css'
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Nav = () => {
  const [isOpen, setIsOpen]=useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <nav className={`nav ${isOpen ? 'open' : ''}`}> 
        <ul className='nav-list'>
            <li className='nav-item'><AnchorLink href='#about' className='navlink'>About</AnchorLink></li>
            <li className='nav-item'><AnchorLink href='#works' className='navlink'>Works</AnchorLink></li>
            <li className='nav-item'><AnchorLink href='#contact'className='navlink'>Contact</AnchorLink></li>
        </ul>
    </nav>



      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
      </div>
    </>
  )
}
