import { Email, Person } from '@mui/icons-material';
import React from 'react';
import "./topBar.css";

const TopBar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"topbar "+(menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            MTHR
          </a>
          <div className='item'>
            <Person className="icon"/>
            <span>+88013 1259 1010</span>
          </div>
          <div className='item'>
            <Email className="icon"/>
            <span>tanvirhossen853@gmail.com</span>
          </div> 
        </div>
        <div className='right'>
          <div className='dropDown' onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar