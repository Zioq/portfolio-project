import React from "react";
import logo from "../../Images/logo.png";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img className="logo" src={logo} alt="logo" /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link smooth={true} to="home" className="nav-link" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="about" offset={-100} className="nav-link" href="#">
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="skills" offset={-100} className="nav-link" href="#">
                  Skills
                </Link>
              </li>

              <li className="nav-item">
                <Link smooth={true} to="milestones" offset={-100} className="nav-link" href="#">
                  Milestones
                </Link>
              </li>

              <li className="nav-item">
                <Link smooth={true} to="portfolio" offset={-100} className="nav-link" href="#">
                  Portfolio
                </Link>
              </li>

              <li className="nav-item">
                <Link smooth={true} to="contacts" offset={-100} className="nav-link" href="#">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
