import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials">
      <h1>Past Project Members</h1>
      <div className="container">
        <div className="testimonial-content">
        <TestimonialsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;