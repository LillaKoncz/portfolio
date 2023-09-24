import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';



 export const Contact = () => {
  return (
   <>
   <div className='contact-background' id='contact'>
      <div className='contact-title'><h3>Get in Touch!</h3></div>
      <div className='contact-datas'>
        <div className='phone'><FontAwesomeIcon className='faIcon' icon={faPhone}/><p>+45 71 44 50 46</p></div>
        <div className='email'><FontAwesomeIcon className='faIcon' icon={faEnvelope}/><p>koncz.lilla92@gmail.com</p></div>
        <div className='address'><FontAwesomeIcon className='faIcon' icon={faLocationDot}/><p>Danmark,2860 Søborg</p></div>
      </div>
   </div>
   </>
  )
}