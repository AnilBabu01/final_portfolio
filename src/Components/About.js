import React from 'react'
import Freelancer from './Freelancer'
import Typewriter from "typewriter-effect";
function About() {
  return (
    <div>
        
        <section id="aboutt">
     <div  className="container flex flex22 itmeCenter  " id="aaa">
           <div className="flex1">

               <img className="iconn iss" src="./images/man.jpg"/>
           </div>
           <div className="flex1 About">
               <h1 >About <span>me</span></h1>
               <h3>Hello i'm Anil Babu</h3>
               <h1 >
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Mern Stack developer")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("React developer")
                  .deleteAll()
                  .typeString("Mern Stack developer")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("React developer")
                  .typeString("Mern Stack developer")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("React developer")
                  .deleteAll()
                  .typeString("Mern Stack developer")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("React developer")
                  .start();
              }}
            />
          </h1>
               <p>Going to college and prepping for the “real world” is not easy. Dealing with grades, studying, bills, pressure from your parents, and having to answer the big question: “What should I do with my life?“, means there are a lot of expectations on your plate</p>
               <div className="logos">
                   <a href="https://www.linkedin.com/in/anil-babu-19958a208"><img className="icon-size" src="./images/link.png"/></a>
                    
                    <a href="https://www.facebook.com/profile.php?id=100041724041773"><img className="icon-size" src="./images/facebook.png"/></a>
                    
                    <a href="https://twitter.com/AnilBab10138171?t=JbSlKFwwYdtSyZDMNkdXtw&s=08"><img className="icon-size" src="./images/twitter.png"/></a>
                  
                  <a href="https://github.com/Anilpateel"><img  className="icon-size" src="./images/git.png"/></a>
                   
                   <a href="https://www.instagram.com/gangwar1304/"><img className="icon-size" src="./images/instagram.jpg"/></a>
               </div>
           </div>
      </div>

      </section >
        
          
        
        </div>
  )
}

export default About