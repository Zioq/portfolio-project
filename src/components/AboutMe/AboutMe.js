import React from "react";
import author from "../../Images/aboutMe.png";
import { Window, TitleBar, Text } from "react-desktop/macOs";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="AboutMe" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          {/* <p>
            Hello! My name is 'Jaehyeon Robert Han', you can call me 'Robert'.
          </p> */}
          <Window chrome height="90%" width="100%" padding="10px" >
            <TitleBar title="Who Am I?" controls />
            <Text size="16" padding="8px" bold="30px">Hollo,
            <br/>
            My name is Jaehyeon Robert Han, I'm a passionated and self-motivated Full Stack developer.
            <br/>
            <br/>
            As a team player, I have participated in several group projects and I love to share ideas, find proper solutions, and be a scrum member to the goal. 
            <br/>
            <br/>
            Doing a "Daily Coding Challenge" to keep up with a rapidly evolving this industry makes me an advanced and creative developer.
            <br/>
            <br/>
            I'm looking for a position, where I can show my energy, and upgrade my skills, help develop innovative products and work hard.
            </Text>
          </Window>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
