import React from 'react'
import './about.css'

export const About = () => {
  return (
    <>
    <div className='about-background' id='about'>
      <div className='about-title'>
        <h1>About Me</h1>
      </div>

      <div className='about-text'>
        <p>I'm a <span className='bold'>self-taught frontend developer</span>  with a passion for web development. 
          In addition to my dedication to coding, I'm also a <span className='bold'>devoted and enthusiastic mother.</span> 

          It's the perfect blend of these two roles<span className='bold'> that makes me truly happy.</span> 
          I started my learning journey in the summer of 2022, and I have been consistently continuing it to this day.<br/>
         Languages and tools what I learned:<span className='bold'> HTML, CSS, Boostrap, Javascript, REACT.</span> <br/>
          I also have basic experience in :<span className='bold'> Vue, React Native.</span> <br/>

          Balancing my passion for coding with my responsibilities as a parent has made me a 
         <span className='bold'> disciplined Frontend Developer,</span>  who know the importance of :</p>
          
          <ul className='bold'>
            <li>Time Managment,</li>
            <li>Problem Solving.</li>
          </ul>
        
          <p>
          If you're looking for a frontend developer who is:</p>
          <ul className='bold'>
            <li>willing to learn more,</li>
            <li>loves what they do, and is a cheerful team player,</li>
          </ul>
         
         
         <p className='last-line'> 
          then feel free to contact me.
        </p>
      </div>
    </div>
 </>
  )
}
