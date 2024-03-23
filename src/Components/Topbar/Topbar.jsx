import { Email, Person } from '@mui/icons-material';
import React from 'react';
import "./topBar.css";

const TopBar = () => {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            MRHR
          </a>
          <div className='item'>
            <Person/>
            <span>+88013 1259 1010</span>
          </div>
          <div className='item'>
            <Email/>
            <span>tanvirhossen853@gmail.com</span>
          </div> 
        </div>
        <div className='right'>This is right</div>
      </div>
    </div>
  )
}

export default TopBar