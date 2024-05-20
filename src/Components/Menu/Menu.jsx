import { AccountCircleOutlined, HomeOutlined, HomeRepairServiceOutlined, InfoOutlined, PhoneInTalkOutlined } from '@mui/icons-material'
import React from 'react'
import "./menu.css"

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={'menu '+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#intro'><HomeOutlined/> Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#portfolio'><AccountCircleOutlined/> Portfolio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#about'><InfoOutlined/> About</a>
            </li>
            {/* <li onClick={()=>setMenuOpen(false)}>
                <a href='#works'><Diversity2Outlined/> Works</a>
            </li> */}
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#testimonials'><HomeRepairServiceOutlined/> Testimonials</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#contact'><PhoneInTalkOutlined/> Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu