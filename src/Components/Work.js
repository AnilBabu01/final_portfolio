import React from 'react'

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
             <img src="./images/ph-1.png" className="sizes"/>
         </div>

         <div className="cardd">
            <div className="overlay">
                <span>Category</span>
                <a href="https://anilpateel.github.io/anil.github.io/">Abcoder Static website</a>
            </div>
             <img src="./images/ph-2.png" className="sizes"/>
         </div>

         <div className="cardd">
            <div className="overlay">
                <span>Category</span>
                <a href="https://anilpateel.github.io/tech.github.io/">Abcoder full Responsive website </a>
            </div>
             <img src="./images/ph-3.png" className="sizes"/>
         </div>

     </div>
        
    </div>


 </section>

        
        
        
        
        
  </>
  )
}

export default Work