import React from "react";
import author from "../../aboutMe.png";
const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
                <img className="profile-img" src={author} alt="AboutMe" />    
            </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Hello! My name is 'Jaehyeon Robert Han', you can call me 'Robert'. I
            have been studying Compter Science, Business Administer and English
            Literature!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
