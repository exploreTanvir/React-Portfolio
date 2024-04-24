import React, { useState } from 'react'
import "./contact.css"

const Contact = () => {
    const [message,setMessage]=useState(false)
    const handleSubmit=(e)=>{
      e.preventDefault()
      setMessage(true)
    }
  return (
    <div className='Contact' id='contact'>
        <div className="container">
            <div className="left">
                <p>Ready to talk?</p>
                <h1>Contact</h1>
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
                <div className="icon">
                <a href="https://www.facebook.com/exploreTanvir"><i class="fa-brands fa-square-facebook"></i></a>
                <a href="https://www.instagram.com/xploretanvir"><i className="fa-brands fa-instagram-square"></i></a>
                <a target="blank" href="https://github.com/exploreTanvir"><i className="fa-brands fa-github-square"></i></a>
                <a href="https://twitter.com/exploreTanvir"><i className="fa-brands fa-twitter-square"></i></a>
                <a href="https://linkedin.com/in/exploreTanvir"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact