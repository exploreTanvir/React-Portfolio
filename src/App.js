import React, { useState } from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Intro from './Components/Intro/Intro';
import Menu from './Components/Menu/Menu';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import TopBar from './Components/Topbar/Topbar';
import Works from './Components/Works/Works';
import About from './Components/aboutMain/About';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';

const App = () => {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className='app'>
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className='section'>
            <Intro/>
            <Portfolio/>
            <About/>
            <Works/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        
            
        </div>
    </div>
  )
}

export default App