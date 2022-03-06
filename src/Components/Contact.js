import React from 'react'

function Contact() {
  return (
    <>
        
        <section className="Conttact"  id="conn">
        <div className="container">
            <h1 className="section-heading">Contact <span>us</span></h1>
                <p>We provide high standar clean website for your businees solutions</p>
                <div className="card-wrappers   pnone">
                    <div className="cardddd">
                        <img src="./images/pho.png"/>
                        <h1>Call Me at</h1>
                        <h6>75 05 78 69 56</h6>
                    </div>

                    <div className="cardddd">
                        <img src="./images/mess.jpg"/>
                        <h1>Email at</h1>
                        <h6>anilb0175@gamil.com</h6>
                    </div>

                     
                </div>

                 
                    <form action="contact.php" className='forms' method="post">
                        
                       <div className="input-wrapper">
                        <input type="text" name="name" placeholder="your name "/>
                        <input type="email" name="email" placeholder="your email "/>

                        </div>
                    <div className="input-wrapper2">
                        <input type="text" name="subject" placeholder="Subject"/>
                         <textarea name="message" cols="30" rows="20" placeholder="type message"></textarea>

                    </div>


                    <div className="btn-wrapper">
                        <button className="btn btn-primary">Send message</button>
                    </div>

                    </form>
                  

               
        </div>
        

    </section>

        
        
        
  </>
  )
}

export default Contact