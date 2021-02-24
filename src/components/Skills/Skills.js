import React from "react";

import {
  FaAndroid,
  FaRegObjectUngroup,
  FaReact,
  FaRocket,
} from "react-icons/fa";

import Php from "./Php";
import ReactIcon from "./ReactIcon";
import HtmlIcon from "./HhtmlIcon";
import CssIcon from "./CssIcon";
import MongoDBIcon from "./MongoDBIcon";
import NodeJsIcon from "./NodeJsIcon";
import JavsScriptIcon from "./JavsScriptIcon";
import JavaIcon from "./JavaIcon";
import PythonIcon from "./PythonIcon";
import MySqlIcon from "./MySqlIcon";

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

              <h3>Web Development (MERN)</h3>
              <p>
                Using a MERN-Stack
                <br />
                (MongoDB Express React NodeJs)
                <br />I can develop FULL-STACK application
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FaAndroid className="icon" />
              </div>
              <h3>Android Mobile App Development</h3>
              <p>
                Using a Android Studio & Java,
                <br /> I can make an android mobile application
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FaRegObjectUngroup className="icon" />
              </div>
              <h3>
                Algorithm & <br /> Data Structure
              </h3>
              <p>
                With Ptyhon, <br /> I can solve algorithm & data structure
                problems
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FaRocket className="icon" />
              </div>
              <h3>
                Self-Motivated &<br /> Steady-Learner
              </h3>
              <p>
                Now, I running to my <br />
                daily coding challenge <br />
                to 300-day as a new goal. <br />
                (Now over 230 days)
              </p>
            </div>
          </div>
        </div>
        <div className="row">
        
          <div className="col-md-12">
            <ul className="horizontal-slide">
              <li className="col-md-2">
                <ReactIcon />
              </li>

              <li className="col-md-2">
                <NodeJsIcon />
              </li>

              <li className="col-md-2">
                <MongoDBIcon />
              </li>

              <li className="col-md-2">
                <JavsScriptIcon />
              </li>

              <li className="col-md-2">
                <PythonIcon />
              </li>

              <li className="col-md-2">
                <JavaIcon />
              </li>

              <li className="col-md-2">
                <MySqlIcon />
              </li>

              <li className="col-md-2">
                <Php />
              </li>

              <li className="col-md-2">
                <HtmlIcon />
              </li>

              <li className="col-md-2">
                <CssIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
