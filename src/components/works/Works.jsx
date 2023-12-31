import React from 'react'
import './works.css'
import coffe from '../../images/coffee.png'
import dogs from '../../images/DogsAdoption.png'
import ReactPlayer from 'react-player'
import video from '../../images/weatherVideo.mp4'
import pizza from '../../images/tonys.png'


 export const Works = () => {
  return (
    <>
    <div className='seeMyWorks' id='works'> My Works</div>

{/*COFFE-SHOP*/}

    <div className='works-wrapper'>
      <div className='works-image'><img className='works-img' src={coffe}/></div>
      <div className='works-text'>
      <h4 className='w-title'>Melcsi Coffe</h4>
        <p className='w-text'>Its a Coffee-Order App.User can order coffe, and get an order-number.<br/>
        <span className='bold lang'> REACT JS, Boostrap</span></p>
        <a target='_blank' href='https://lillakoncz.github.io/coffe-shop/'>
          <button className='works-demo'>Live Demo</button></a>
      </div>
      
    </div>

{/*DOGS TO ADOPTION */}

    <div className='works-wrapper'>
    <div className='works-image'><img className='works-img doggies-page' src={dogs}/></div>
      <div className='works-text'>
      <h4 className='w-title'>Dog Adoption</h4>
        <p className='w-text'>This is a Dog-shelter website, where  user can see the dogs which are to adoption, and can book an appointment.<br/>
        <span className='bold lang'> REACT JS, Boostrap</span></p>
        <a target='_blank' href='https://lillakoncz.github.io/dog-adoption/'>
          <button className='works-demo'>Live Demo</button></a>
      </div>
      
    </div>

  {/*PIZZA-HOUSE */}

    <div className='works-wrapper'>
      <div className='works-image'><img className='works-img' src={pizza}/></div>
      <div className='works-text'>
      <h4 className='w-title'>Tonys Pizzeria</h4>
        <p className='w-text'>Its a Food-Order App.User can order food, and get an order-number.<br/>
        <span className='bold lang'> REACT JS, Boostrap</span></p>
        <a target='_blank' href='https://lillakoncz.github.io/pizza-house/'>
          <button className='works-demo'>Live Demo</button></a>
      </div>
      
    </div>

{/* WEATHER SEARCHING - VIDEO */ }

<div className='works-wrapper'>
    <div className='video-player'>
      <ReactPlayer 
        className='weather-video'
        url ={video}
        width="100%"
        height='100%'
        controls={true}
        playing={true}
        loop={true}/>
    </div>
      <div className='works-text'>
        <h4 className='w-title'>Weather-Searching</h4>
        <p className='w-text'>This is Weather-Search App, user can write a town and see the weather in pt.<br/>
        <span className='bold lang'> REACT JS, Boostrap</span></p>
        <a target='_blank' href='https://lillakoncz.github.io/weather-searching/'>
          <button className='works-demo '>Live Demo</button></a>
      </div>
      
    </div>

    
    </>
  )
}