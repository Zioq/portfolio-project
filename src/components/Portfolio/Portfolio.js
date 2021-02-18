import React from "react";
import GraduationProject from "../../Images/GraduationProject.png";
import AndroidProject from "../../Images/AndoirdProject.png";
import MovieApplicationProject from "../../Images/MovieApplicationProject.png";
import PortfolioProject from "../../Images/PorfolioProject.png";
import { FaGithub } from "react-icons/fa";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

  //Movie Project Pop up
  const MoviePopUp = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={MovieApplicationProject} alt="movie application project" />
        <p>This is a Movie Application Project</p>
        <b>Github <FaGithub />: </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Zioq/CSIS3380_JavaScript")
          }
        >
          https://github.com/Zioq/CSIS3380_JavaScript
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar : {
          text:"The latest Movie Recommendataion Application"
        }
      }
    })
        
  };

  const popupboxConfigMovie = {
    titleBar: {
      enable:true,
      text:"The latest Movie Recommendataion Application"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  //Local Restaurant Project Pop up
  const GraduationPopUp = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={GraduationProject} alt="Local Restaurant application project" />
        <p>This is a graduation project</p>
        <b>Github <FaGithub />: </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Zioq/Local-Business-Project-GraduationProejct")
          }
        >
          https://github.com/Zioq/Local-Business-Project-GraduationProejct
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar : {
          text:"Douglas College Graduation Project"
        }
      }
    })
  };

  const popupboxConfigGraduation = {
    titleBar: {
      enable:true,
      text:"Douglas College Graduation Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  //Android Mobile Project Pop up
  const AndroidAppPopUp = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={AndroidProject} alt="Andoird Mobile Application Project" />
        <p>This is an Andoird Mobile Application Project</p>
        <b>Github <FaGithub />: </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Zioq/AllForOneProject")
          }
        >
          https://github.com/Zioq/AllForOneProject
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar : {
          text:"Anroid Mobile Application Development Project"
        }
      }
    })
  };

  const popupboxConfigAndroid = {
    titleBar: {
      enable:true,
      text:"Anroid Mobile Application Development Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  //Android Mobile Project Pop up
  const PortfolioPopUp = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={PortfolioProject} alt="Portfolio Web Project" />
        <p>This is a Portfolio Web Development Project With React And Bootstrap</p>
        <b>Github <FaGithub />: </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Zioq/portfolio-project")
          }
        >
          https://github.com/Zioq/portfolio-project
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar : {
          text:"Portfolio Web Development With React & Bootstrap"
        }
      }
    })
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable:true,
      text:"Portfolio Web Development With React & Bootstrap"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  return (
    <div className="porfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-img-box" onClick={MoviePopUp}>
            <img
              className="portfolio-img"
              src={MovieApplicationProject}
              alt="movie application project"
            />
            <div className="overflow"></div>
            <FaGithub className="portfolio-icon" />
          </div>

          <div className="portfolio-img-box" onClick={GraduationPopUp}>
            <img
              className="portfolio-img"
              src={GraduationProject}
              alt="graduation project"
            />
            <div className="overflow"></div>
            <FaGithub className="portfolio-icon" />
          </div>

          <div className="portfolio-img-box" onClick={AndroidAppPopUp}>
            <img
              className="portfolio-img"
              src={AndroidProject}
              alt="android project"
            />
            <div className="overflow"></div>
            <FaGithub className="portfolio-icon" />
          </div>

          <div className="portfolio-img-box" onClick={PortfolioPopUp}>
            <img
              className="portfolio-img"
              src={PortfolioProject}
              alt="portfolio project"
            />
            <div className="overflow"></div>
            <FaGithub className="portfolio-icon" />
          </div>
        </div>
      </div>

      <PopupboxContainer {...popupboxConfigMovie} />
      <PopupboxContainer {...popupboxConfigGraduation} />
      <PopupboxContainer {...popupboxConfigAndroid} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
    </div>
  );
};

export default Portfolio;
