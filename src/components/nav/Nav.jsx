import React from 'react'
import './nav.css'
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Nav = () => {
  return (
    <>
    <nav className='nav'> 
        <ul className='nav-list'>
            <li className='nav-item'><AnchorLink href='#about' className='navlink'>About</AnchorLink></li>
            <li className='nav-item'><AnchorLink href='#works' className='navlink'>Works</AnchorLink></li>
            <li className='nav-item'><AnchorLink href='#contact'className='navlink'>Contact</AnchorLink></li>
        </ul>
    </nav>
    </>
  )
}
