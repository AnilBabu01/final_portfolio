import React from "react";
import phone from "./images/pho.png";
import email from "./images/mess.jpg";
import emailjs from "emailjs-com";
function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d2q5x8e",
        "template_tbr1971",
        e.target,
        "82HUNCTaunwlfzNDn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
  return (
    <>
      <section className="Conttact" id="conn">
        <div className="container">
          <h1 className="section-heading">
            Contact <span>us</span>
          </h1>
          <p>
            We provide high standar clean website for your businees solutions
          </p>
          <div className="card-wrappers   pnone">
            <div className="cardddd">
              <img src={phone} />
              <h1>Call Me at</h1>
              <h6>75 05 78 69 56</h6>
            </div>

            <div className="cardddd">
              <img src={email} />
              <h1>Email at</h1>
              <h6>anilb0175@gamil.com</h6>
            </div>
          </div>
                <div className="formcontainer">
          <form onSubmit={sendEmail}>
            <div className="input-wrapper">
              <input type="text" name="name" placeholder="your name " />
              <input type="email" name="email" placeholder="your email " />
            </div>
            <div className="input-wrapper2">
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                name="message"
                cols="30"
                rows="20"
                placeholder="type message"
              ></textarea>
            </div>

            <div className="btn-wrapper">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
