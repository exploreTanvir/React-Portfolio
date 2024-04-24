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
            <div className="rights"></div>
        </div>
    </div>
  )
}

export default About