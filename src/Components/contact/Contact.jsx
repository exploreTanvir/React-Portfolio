import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React, { useState } from 'react';
import positionImg from "../../assets/Base Thash 2.png";
import "./contact.css";

const Contact = () => {
    const [message,setMessage]=useState(false)
    const handleSubmit=(e)=>{
      e.preventDefault()
      setMessage(true)
    }
  return (
    <div className='Contact container-fluid d-flex justify-content-center align-items-center text-white' id='contact'>
        <div className="row contactRow">
            <div className="left flex-column align-items-start">
                <p>Ready to talk?</p>
                <h1 className="mt-2">Contact</h1>
                <p>Thanks for reaching out to us. We're thrilled to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.</p>
                <p>
                Please take a moment to provide us with some details so we can assist you effectively. Don't worry, we'll handle your information with care and respect your privacy.</p>
                <p>
                Thanks again for reaching out. We value your interest and feedback and look forward to hearing from you soon!</p>
            </div>
            <div className="right">
                <form  onSubmit={handleSubmit}>
                    <input type="text" name="" id="" placeholder='Enter Your Name '/>
                    <br />
                    <input type="email" name="" id="" placeholder='Enter Your Email '/>
                    <br />
                    <textarea cols="30" rows="5" placeholder='Enter Your Message'></textarea><br />
                    <button type='submit'>Submit</button>
                    {message && <span> Your message was send :)</span>}
                </form>
                <div className="socialIcons align-items-center justify-content-start d-flex text-white mt-3 ">
                <div className="socialIcon" style={{background:"#3B5999"}}>
                <Facebook className="icons"/>
                </div>
                <div className="socialIcon" style={{background:"#E4405F"}}>
                <Instagram className="icons"/>
                </div>
                <div className="socialIcon" style={{background:"#000"}}>
                <GitHub className="icons"/>
                </div>
                
                <div className="socialIcon " style={{background:"#3B5999"}}>
                <LinkedIn className="icons"/>
                </div>
                <div className="socialIcon" style={{background:"#55ACEE"}}>
                <Twitter className="icons"/>
                </div>
                </div>
                
            </div>
        </div>
        <div className="posi">
          <img src={positionImg} alt="" />
        </div>
    </div>
  )
}

export default Contact