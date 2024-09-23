import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './component/menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainbanner from './component/mainbanner/Mainbanner'


import Service from './component/service/Service'
import About from './component/about/About'
import Skills from './component/skills/Skills'



function App() {

  return (
    <>
    <Menu/>
    <Mainbanner/>
    <About/>
    <Service/>
    <Skills/>
   
    
    </>
  )
}

export default App
