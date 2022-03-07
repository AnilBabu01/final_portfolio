import React from "react";
import Typewriter from "typewriter-effect";
import anil from'./images/55.jfif';
import Navbar from "./Navbar";
function Home() {
  return (
    <>
   
      <div className="hero flex itmeCenter homecontaioner justify-item">
        <div className="left flex1 flex justify-center">
          <img className="iconn" src={anil} />
        </div>
        <div className="right flex1">
          <h6>Anil Babu</h6>
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

          <p className="hometext">
            Going to college and prepping for the “real world” is not easy.
            Dealing with grades, studying, bills, pressure from your parents,
            and having to answer the big question: “What should I do with my
            life?“, means there are a lot of expectations on your plate.
          </p>
          <div>
            <button className=" homebtn ">
              <a
                className="yyy"
                href="https://drive.google.com/file/d/10Zoi7fvJ0B0JciJcH1NdGZ2tAtSptgKG/view?usp=drivesdk"
              >
                DOWNLOAD CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
