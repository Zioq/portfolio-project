import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import avatarMan from "../../Images/testimonials/avatar-man.png";
import avatarWoman from "../../Images/testimonials/avatar-woman.png";
const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={8000}
    >
      <>
        <img src={avatarMan} alt="Isaias Bautista" />
        <div className="myCarousel">
          <h3>Isaias Bautista</h3>
          <p>
            "Robert was a critical member for the development of the android
            application. His coding performance was accurate on every task, and
            came up with great ideas. He is a responsible person with his tasks and createive person with his contributions."
          </p>
        </div>
      </>

      <>
        <img src={avatarMan} alt="Angelo King" />
        <div className="myCarousel">
          <h3>Angelo King</h3>
          <p>
            "I know Robert is one of those rare developers who spend hours every
            single day after work or school trying to be better at creating
            software. He was highly productive while helping us develop an API
            for our college."
          </p>
        </div>
      </>

      <>
        <img src={avatarWoman} alt="Minh Hong" />
        <div className="myCarousel">
          <h3>Ellie L.</h3>
          <p>"During his time at Funpun Interview, Robert was very proactive and result-oriented. He was diligent and also picked up the capacity of his role in no time. His honesty and prompt Introspection bonded team unity. I was so lucky to work with him as a team member."</p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
