import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div>
      <div className="header-wraper">
        <div className="main-info">
          <br />

          <h1>$cd ~/ "Explore" / "Jaehyeon Robert Han"</h1>
          <Typed
            className="typed-text"
            strings={[
              "Web Development (MERN)",
              "Software Engineering",
              "Algorithm",
              "Data Structure",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
         <a href="#" className="btn-main-offer">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
