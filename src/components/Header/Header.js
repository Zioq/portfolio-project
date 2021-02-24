import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
  return (
    <div>
      <div id="home" className="header-wraper">
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
         <Link smooth={true} to="contacts" className="btn-main-offer">Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
