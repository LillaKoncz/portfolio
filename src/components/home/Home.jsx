import {React, useEffect} from 'react'
import './home.css'
import background from '../../images/homepng.png'
import mobil from '../../images/korprofil.png'
import WebFont from 'webfontloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {Nav} from '../nav/Nav'





 export const Home = () => {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Caveat', 'Raleway', 'Passion One'], 
          },
        });
      }, []);


  return (
  <>
     <div className='background' id='home'>
        <Nav className='nav'/>
    <div className='profil-img'>
      <img className='profil-pics' src={mobil}/>
    </div>
    <div className='title mx-5'>
        <h1>Hi Im<span className='lilla'> Lilla,</span> <br/><span className='frontend-developer'>Frontend Developer</span></h1>

      <div className='short-text'>
        <h6>I build and design User Interfaces.</h6>
      </div>


      

      <div className='font-awesome'>
       <a href='https://www.facebook.com/profile.php?id=100091001035989' target="_blank"><FontAwesomeIcon className='social-icon font-face my-4' icon={faFacebook} /></a> 
       <a href='https://www.linkedin.com/in/lilla-koncz-83b819264/' target="_blank"><FontAwesomeIcon className='social-icon font-linkedin mx-5 my-4' icon={faLinkedin}/></a> 
        <a href='https://github.com/LillaKoncz' target="_blank"><FontAwesomeIcon className=' social-icon font-github my-4' icon={faGithub}/></a>
      </div>
    </div>
  
  </div> 
    
  
  </>
  )
}

