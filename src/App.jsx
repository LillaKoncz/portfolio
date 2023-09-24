import { useState } from 'react'
import {About} from './components/about/About'
import {Home} from './components/home/Home'
import {Works} from './components/works/Works'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from './components/nav/Nav'



function App() {
 

  return (
    <>
    <Home/>
    <About/>
    <Works/>
    
    </>
  )
}

export default App
