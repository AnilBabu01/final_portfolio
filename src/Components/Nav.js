import React from 'react'
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
         <div className="site-main-wraper">
      <div className="hamberger">
        <img src="./images/hamberger.svg" />
      </div>
      <div className="moble-nav">
        <button className="times">
          <img src="./images/times.svg" />
        </button>
        <ul>
          <div className="logoo">
            <p>
              <span className="d">Ab</span>coder
            </p>
          </div>
          <li>
            <a className="a1" href="/">
              Home
            </a>
          </li>
          <li>
            <Link className="a2" to="/About">
              About
            </Link>
          </li>
          <li>
            <a className="a3" href="#team">
              Our Team
            </a>
          </li>
          <li>
            <a className="a4" href="#s">
              Skills
            </a>
          </li>
          <li>
            <a className="a5" href="#bb">
              blog
            </a>
          </li>
          <div className="right">
            <button className="btn btn-primary a6">
              <a href="#conn" className="kkk">
                Contact
              </a>
            </button>
          </div>
        </ul>
      </div>

      <header>
        <div className="container">
          <nav id="main-nav" className="flex itmeCenter justify-item ">
            <div className="left flex itmeCenter">
              <div className="logoo">
                <p>
                  <span className="d">Ab</span>coder
                </p>
              </div>
              <div>
                <a href="#">home</a>
                <a href="#aboutt">About</a>
                <a href="#team">Our Team</a>
                <a href="#s">Skills</a>
                <a href="#bb">blog</a>
              </div>
            </div>
            <div className="right">
              <button className="btn btn-primary a6">
                <a href="#conn" className="kkk">
                  Contact
                </a>
              </button>
            </div>
          </nav>

          <div className="hero flex itmeCenter justify-item">
            <div className="left flex1 flex justify-center">
              <div className="logoo   hide">
                <p>
                  <span className="d">Ab</span>coder
                </p>
                /
              </div>
             
            </div>
           
          </div>
        </div>
      </header>
      </div>

        
        
        
        
        
        
        </div>
  )
}

export default Nav