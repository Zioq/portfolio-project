import React from "react";
import { SocialIcon } from 'react-social-icons';
import {Link} from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>JAEHYEON ROBERT HAN</p>
            </div>
            <div className="d-flex">
              <p>jr.roberthan@gmail.com</p>
            </div>
            <div className="d-flex">
              <p>Vancouver, BC, Canada</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" offset={-100}  className="footer-nav">Home</Link>
                <br />
                <Link smooth={true} to="about" offset={-100} className="footer-nav">About me</Link>
                <br />
                <Link smooth={true} to="skills" offset={-100} className="footer-nav">Skills</Link>
              </div>
              <div className="col">
                <Link smooth={true} to="milestones" offset={-100} className="footer-nav">Milestones</Link>
                <br />
                <Link smooth={true} to="portfolio" offset={-100} className="footer-nav">Portfolio</Link>
                <br />
                <Link smooth={true} to="contacts" offset={-100} className="footer-nav">Contacts</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">

            <SocialIcon className="mx-3" url="https://www.linkedin.com/in/jaehyeon-rob-han/" />

            <SocialIcon className="mx-3" url="https://www.instagram.com/dailycoding_robert/" />

            <SocialIcon className="mx-3" url="https://github.com/Zioq" />



            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Jaehyeon Robert Han | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
