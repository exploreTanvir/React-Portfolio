import { init } from 'ityped'
import React, { useEffect, useRef } from 'react'
import down from "../../assets/down.png"
import man from "../../assets/man.png"
import "./intro.css"

const Intro = () => {

const textRef=useRef()

  useEffect(()=>{
    init(textRef.current, { 
      backDelay:1500,
      backSpeed:60,
      showCursor:true,
      cursorChar: " |",
       strings: [' Web Designer. ',' Web Developer. ', " UI&UX Designer. " ] 
        })
  },[])
  return (
    <div className='intro' id='intro'>
      <div className='leftDiv'>
        <div className='imgContainer'>
          <img src={man} alt='profile'/>
        </div>
      </div>
      <div className='rightDiv'>
        <div className='rightWrapper'>
          <h2>Hi There I'm</h2>
          <h1>Tanvir Hossen Raju</h1>
          <h3>I'm A <span ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <img src={down} alt="Down Img" />
        </a>
      </div>
    </div>
  )
}

export default Intro