import React, { useState } from 'react';
import TopBar from './Components/Topbar/Topbar';
import Intro from './Components/Intro/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Works from './Components/Works/Works';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import "./App.css"
import Menu from './Components/Menu/Menu';


const App = () => {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className='app'>
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className='section'>
            <Intro/>
            <Portfolio/>
            <Works/>
            <Testimonials/>
            <Contact/>
        </div>
    </div>
  )
}

export default App