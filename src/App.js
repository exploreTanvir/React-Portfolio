import React from 'react';
import TopBar from './Components/Topbar/Topbar';
import Intro from './Components/Intro/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Works from './Components/Works/Works';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import "./App.css"


const App = () => {
  return (
    <div className='app'>
        <TopBar/>
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