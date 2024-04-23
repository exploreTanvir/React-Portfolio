import React, { useState } from 'react'
import "./Contact.css"
import shake from "../../assets/shake.svg"

const Contact = () => {
const [message,setMessage]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault()
    setMessage(true)
  }
  return (
    <div className='contact ' id='contact'>
      <div className="left">
        <img src={shake} className='animated' alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter Your Name..' />
          <input type="email" placeholder='Enter Your Email..' />
          <textarea placeholder='Write Something..'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Your message was send :)</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact