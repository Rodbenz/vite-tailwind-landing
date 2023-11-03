import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/nav'
import Hero from './components/Hero'
import About from './components/About'
import InfoOne from './components/InfoOne'
import InfoTwo from './components/InfoTwo'
import { Link, Outlet  } from "react-router-dom";

function App() {

  return (
    <>
     <NavBar/>
     <Outlet/>
     {/* <Hero/>
     <About/>
     <InfoOne/>
     <InfoTwo/> */}
    </>
  )
}

export default App
