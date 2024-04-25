import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='about container' id='about'>
        <h1>About Me</h1>

        <div className="main">
            <div className="lefts">
              <h3>Take Your Business to the Next Level We’re Here To All Your Question</h3>
              <p>Get responsive website for your business from us. No monthly cost. One time setup fee only. Get best website development services at affordable rates from professional web designers!</p>
              <div className="percentage">

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

              <div className="icons">
                <button>Download CV</button>
                <div className="icon">
                <a href="https://www.facebook.com/exploreTanvir"><i class="fa-brands fa-square-facebook"></i></a>
                <a href="https://www.instagram.com/xploretanvir"><i className="fa-brands fa-instagram-square"></i></a>
                <a target="blank" href="https://github.com/exploreTanvir"><i className="fa-brands fa-github-square"></i></a>
                <a href="https://twitter.com/exploreTanvir"><i className="fa-brands fa-twitter-square"></i></a>
                <a href="https://linkedin.com/in/exploreTanvir"><i class="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="rights">

              <div className="skill">
                
               <div className="l">
               <div className='bars'>
                  <h4>HTML</h4>
                  <div className="bar">
                    <div className="html piece">90%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h4>CSS</h4>
                  <div className="bar">
                    <div className="css piece">75%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h4>BOOTSTRAP</h4>
                  <div className="bar">
                    <div className="bootstrap piece">80%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h4>JS</h4>
                  <div className="bar">
                    <div className="js piece">78%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h4>Figma</h4>
                  <div className="bar">
                    <div className="figma piece">85%</div>
                  </div>
                </div>
               </div>

              
               <div className="r">
               <div className='bars'>
                  <h4>WORDPRESS</h4>
                  <div className="bar">
                    <div className="WordPress piece">83%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h4>REACT</h4>
                  <div className="bar">
                    <div className="react piece">75%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h4>NODE</h4>
                  <div className="bar">
                    <div className="node piece">67%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h4>EXPRESS</h4>
                  <div className="bar">
                    <div className="express piece">83%</div>
                  </div>
                </div>

                <div className='bars'>
                  <h4>MONGODB</h4>
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