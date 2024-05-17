import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div className='about container-fluid d-flex align-items-center justify-content-center flex-column' id='about'>
        <h1 className='mb-2 text-white fw-bold'>About Me</h1>

        <div className="main d-flex align-items-center justify-content-around ">
            <div className="lefts text-white">
              <h3 className='py-3'>Take Your Business to the Next Level We’re Here To All Your Question</h3>
              <p className='pt-3'>Get responsive website for your business from us. No monthly cost. One time setup fee only. Get best website development services at affordable rates from professional web designers!</p>
              <div className="percentage d-flex align-items-center justify-content-between text-center my-4">

               <div className="first">
               <h1>73</h1>
                <p>Project Completed</p>
               </div>

               <div className="middle">
               <h1>70</h1>
                <p>Happy Clients</p>
               </div>

               <div className="last">
               <h1>67</h1>
                <p>Positive Reviews</p>
               </div>
              </div>

              <div className="icons d-flex justify-content-between">
                <button className='text-white rounded-3 fs-5'>Download CV</button>
                <div className="socialIcons align-items-center justify-content-start d-flex text-white">
                <div className="socialIcon" style={{background:"#3B5999"}}>
                <a href="github.com/exploretanvir"><Facebook className="icons"/></a>
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
            <div className="rights">

              <div className="skill p-4 d-flex justify-content-between text-white">
                
               <div className="l">
               <div className='bars'>
                  <h5>HTML</h5>
                  <div className="bar">
                    <div className="html piece">90%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h5>CSS</h5>
                  <div className="bar">
                    <div className="css piece">75%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h5>BOOTSTRAP</h5>
                  <div className="bar">
                    <div className="bootstrap piece">80%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h5>JS</h5>
                  <div className="bar">
                    <div className="js piece">78%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h5>Figma</h5>
                  <div className="bar">
                    <div className="figma piece">85%</div>
                  </div>
                </div>
               </div>

              
               <div className="r">
               <div className='bars'>
                  <h5>WORDPRESS</h5>
                  <div className="bar">
                    <div className="WordPress piece">83%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h5>REACT</h5>
                  <div className="bar">
                    <div className="react piece">75%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h5>NODE</h5>
                  <div className="bar">
                    <div className="node piece">67%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h5>EXPRESS</h5>
                  <div className="bar">
                    <div className="express piece">83%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h5>MONGODB</h5>
                  <div className="bar">
                    <div className="mongodb piece">65%</div>
                  </div>
                </div>
               </div>
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default About