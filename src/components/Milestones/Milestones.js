import React from "react";

const Milestones = () => {
  return (
    <div id="milestones" className="milestones">
      <div className="d-flex justify-content-center my-5">
        <h1>Milestones</h1>
      </div>

      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021</h3>
            <p>
              In March 2021, I'm going to graduate in Computer and Information
              Systems(Post-Baccalaureate Diploma) from Douglas College.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020</h3>
            <p>
              In April 2020, I started the "Daily 3 hours Coding Challenge", and
              have developed over 5 side projects(Full-Stack Project & Python
              Project).
              <br />
              Project List :
              <br />
              - Local Restaurant Homepage Renewal Project
              <br />
              - Douglas College API Project
              <br />
              - Movie Recommendation Homepage Project
              <br />- Android App Project for Vancouver Homeless People
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018</h3>
            <p>
              In August 2018, I'm graduated with a Bachelor's of Business
              Administration(BBA) and Minor in Computer Science.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Before 2018</h3>
            <p>
              I operated my own business(Coffee Shop) in Seoul, Korea. I
              dedicated myself to doing market research for developing business
              strategies to growth of profit. Also, I managed and coached
              part-time coworkers’ skills to provide optimal service to
              customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
