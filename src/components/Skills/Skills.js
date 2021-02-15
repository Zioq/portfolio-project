import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fabFaceBook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faFileCode,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";
import { FaAndroid } from 'react-icons/fa';
const Skills = () => {
  return (
    <div className="skills">
      <h1 className="py-5"> My Skills </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faAtom} size="2x" />
              </div>

              <h3>Web Development  (MERN)</h3>
              <p>
                Using a MERN-Stack 
                <br />
                (MongoDB, Express, React, NodeJs) 
                <br />
                I can develop FULL-STACK application.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FaAndroid className="icon"/>
              </div>
              <h3>Android Mobile App</h3>
              <p>Your website will be build with an new proven technology</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
              </div>
              <h3>Facebook Ads SMM</h3>
              <p>
                You potential clients will see your service or product on
                Facebook
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
              </div> 
              <h3>Google Ads</h3>
              <p>
                Your Service or product will appera at the top of the Google
                search
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
