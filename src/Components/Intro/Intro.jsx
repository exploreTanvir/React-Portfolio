import { init } from 'ityped'
import React, { useEffect, useRef } from 'react'
import man from "../../assets/man (5).png"

import { KeyboardArrowDown } from '@mui/icons-material'
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
    <div className='intro d-flex' id='intro'>
      <div className='leftDiv'>
        <div className='imgContainer animated d-flex align-items-center justify-content-center'>
          <img src={man} alt='profile'/>
          
        </div>
      </div>
      <div className='rightDiv'>
        <div className='rightWrapper h-100 d-flex justify-content-center flex-column'>
          <h2 className='text-white fs-1'>Hi There I'm</h2>
          <h1 className='text-white fw-bold'>Tanvir Hossen Raju</h1>
          <h3 className='text-white fs-1'>I'm A <span ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <KeyboardArrowDown className='text-white fs-1'/>
        </a>
      </div>
     
    </div>
  )
}

export default Intro