import React from "react";

import { FaAndroid,FaRegObjectUngroup,FaReact,FaRocket } from 'react-icons/fa';
const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1 className="py-5"> My Skills </h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FaReact className="icon" />
              </div>

              <h3>Web Development  (MERN)</h3>
              <p>
                Using a MERN-Stack 
                <br />
                (MongoDB Express React NodeJs) 
                <br />
                I can develop FULL-STACK application
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FaAndroid className="icon"/>
              </div>
              <h3>Android Mobile App Development</h3>
              <p>Using a Android Studio & Java,
              <br/> I can make an android mobile application</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FaRegObjectUngroup className="icon"/>
              </div>
              <h3>Algorithm & <br/> Data Structure</h3>
              <p>
                With Ptyhon, <br/> I can solve algorithm & data structure problems
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FaRocket className="icon"/>
              </div> 
              <h3>Self-Motivated &<br/> Steady-Learner</h3>
              <p>
                Now, I running to my <br/>daily coding challenge <br/>
                to 300-day as a new goal. <br/>
                (Now over 230 days)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
