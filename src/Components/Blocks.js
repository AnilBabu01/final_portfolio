import React from 'react';
import pro from './images/p.jpg';
import web from './images/w.jpg';
import network from './images/n.jpg';
function Blocks() {
  return (
    <>
        
        <section className="blog" id="bb">
    
     <div className="container">
         <h1 className="section-heading"><span>My</span>Blog</h1>
          <p>We provide high standar clean website for your <br></br> businees solutions</p>
        <div className="card-wrapperss">
            <div className="carddd">
                
                <div className="img-warpper"><img className="sizee" src={ network }/></div>
                 <div className="card-content"></div>
                 
                     <h1>Networking</h1>

                 
                 <span>nov 28,2021</span>
                 <p className="oo">Networking is the exchange of information and ideas among people with a common profession or other interest, usually in an informal social setting.and access information from the web server</p>
                 <a href="https://fcit.usf.edu/network/chap1/chap1.htm">Read more</a>
                 

            </div>

            <div className="carddd">
                
                <div className="img-warpper"><img className="sizee" src={pro}/></div>
                 <div className="card-content"></div>
                 
                     <h1>Programming</h1>

                 
                 <span>nov 28,2021</span>
                 <p className="oo">Programming is a creative process that instructs a computer on how to do a task. Hollywood has helped instill an image of programmers as uber techies who can sit down at a computer and break any password in seconds.</p>
                 <a href="https://www.javatpoint.com/programming-language">Read more</a>
                 
                 

            </div>

            <div className="carddd">
                
                <div className="img-warpper"><img className="sizee" src={web}/></div>
                 <div className="card-content"></div>
                 
                     <h1>Web  Technology</h1>

                
                 <span>nov 28,2021</span>
                 <p className="oo">Since computers can’t communicate with each other the way people do, they require codes instead. Web technologies are the markup languages and multimedia packages computers use to communicate</p>
                 <a href="https://archive.uneca.org/sites/default/files/uploaded-documents/SROs/SA/GIS-SP2018/introduction_to_web_technology.pdf">Read more</a>
                 

            </div>


        </div>

     </div>
</section>
        
    </>
  )
}

export default Blocks