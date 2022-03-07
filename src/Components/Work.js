import React from 'react'
import port from './images/ph-1.png';
import port1 from './images/ph-2.png';
import port2 from './images/ph-3.png';
function Work() {
  return (
    <>
        
        <section className="work" >
     
    <div className="containerr ">
        <h1 className="section-heading"><span>My</span> projects</h1>
          <p>We provide high standar clean website for your businees solutions</p>
     <div className="card-wrappers">
         
         <div className="cardd">
            <div className="overlay">
                <span>Category</span>
                <a href="#">My Portfolio</a>
            </div>
             <img src={port} className="sizes"/>
         </div>

         <div className="cardd">
            <div className="overlay">
                <span>Category</span>
                <a href="https://anilpateel.github.io/anil.github.io/">Abcoder Static website</a>
            </div>
             <img src={port1} className="sizes"/>
         </div>

         <div className="cardd">
            <div className="overlay">
                <span>Category</span>
                <a href="https://anilpateel.github.io/tech.github.io/">Abcoder full Responsive website </a>
            </div>
             <img src={port2} className="sizes"/>
         </div>

     </div>
        
    </div>


 </section>

        
        
        
        
        
  </>
  )
}

export default Work