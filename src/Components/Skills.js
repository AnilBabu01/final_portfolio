import React from "react";

function Skills() {
  return (
    <>
      <div className="skills-bar container">
        <center>
          <p className="sills">Skills</p>
        </center>
        <div className="bar">
          <div className="info">
            <span>HTML</span>
          </div>
          <div className="progress-line ">
            <span className="html"></span>
          </div>
        </div>

        <div className="bar">
          <div className="info">
            <span>CSS</span>
          </div>
          <div className="progress-line css ">
            <span className="css"></span>
          </div>
        </div>

        <div className="bar">
          <div className="info">
            <span>JAVASCIPT</span>
          </div>
          <div className="progress-line">
            <span className="javascipt"></span>
          </div>
        </div>

        <div className="bar">
          <div className="info">
            <span>PHP</span>
          </div>
          <div className="progress-line">
            <span className="php"></span>
          </div>
        </div>

        <div className="bar">
          <div className="info">
            <span>CCNA</span>
          </div>
          <div className="progress-line">
            <span className="ccna"></span>
          </div>
        </div>
      </div>

      <section className="freelancser">
        <h1>I Am Availble for Freelancer</h1>
        <p>We provide high standar clean website for your businees solutions</p>
        <button className="btn btn-primary">
          {" "}
          <a
            className="yyy"
            href="https://drive.google.com/file/d/10Zoi7fvJ0B0JciJcH1NdGZ2tAtSptgKG/view?usp=drivesdk"
          >
            DOWNLOAD CV
          </a>
        </button>
      </section>
    </>
  );
}

export default Skills;
