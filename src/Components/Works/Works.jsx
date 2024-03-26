import React from 'react'
import "./Works.css"
import leftImg from "../../assets/mobile.png"
import arrow from "../../assets/arrow.png"
const Works = () => {
  return (
    <div className='works' id='works'>
      <div className='slider'>
        <div className='container'>
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={leftImg} alt='Left Img'/>  
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla quos doloremque esse rem provident totam dicta perspiciatis exercitationem? Amet debitis enim praesentium dolorum tenetur numquam odit velit quas quo?</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src={arrow} className='arrow arrowLeft' alt="" />
      <img src={arrow} className='arrow arrowRight' alt="" />
    </div>
  )
}

export default Works