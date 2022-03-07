import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div class="site-main-wraper">
        <div class="hamberger">
          <img src="./images/hamberger.svg" />
        </div>
        <div class="moble-nav">
          <button class="times">
            <img src="./images/times.svg" />
          </button>
          <ul>
            <div class="logoo">
              <p>
                <span class="d">Ab</span>coder
              </p>
            </div>
            <li>
              <Link class="a1" to="/final_portfolio">
                Home
              </Link>
            </li>
            <li>
              <Link class="a2" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link class="a3" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link class="a4" to="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link class="a5" to="blog">
                blog
              </Link>
            </li>
            <li>
              <Link class="a7" to="/works">
                Projects
              </Link>
            </li>
            <div class="right">
              <button class="btn btn-primary a6">
                <Link to="/contact" class="kkk">
                  Contact
                </Link>
              </button>
            </div>
          </ul>
        </div>
        <header>
          <div class="Navcontainer">
            <nav id="main-nav" class="flex itmeCenter justify-item ">
              <div class="left flex itmeCenter">
                <div class="logoo">
                  <p>
                    <span class="d">Ab</span>coder
                  </p>
                </div>
                <div>
                  <Link to="/final_portfolio">home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/team">Our Team</Link>
                  <Link to="/skills">Skills</Link>
                  <Link to="/blog">blog</Link>
                  <Link class="a5" to="/works">Projects</Link>
          
                </div>
              </div>
              <div class="right">
                <button class="btn btn-primary a6">
                  <Link to="/contact" class="kkk">
                    Contact
                  </Link>
                </button>
              </div>
            </nav>
          </div>
          <div class="hero flex itmeCenter justify-item">
            <div class="left flex1 flex justify-center">
              <div class="logoo   hide">
                <p>
                  <span class="d">Ab</span>coder
                </p>
                
              </div>
              
            </div>
           
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
