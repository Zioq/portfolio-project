import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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
        interval={4000}
        >
            <>
            <img src={avatarMan} alt="Isaias Bautista"/>
            <div className="myCarousel">
            <h3>Isaias Bautista</h3>
            <p>Isaias Bautista's Testimonial</p>
            </div>
            </>

            <>
            <img src={avatarMan} alt="Angelo King"/>
            <div className="myCarousel">
            <h3>Angelo King</h3>
            <p>Angelo King's Testimonial</p>
            </div>
            </>

            <>
            <img src={avatarWoman} alt="Minh Hong"/>
            <div className="myCarousel">
            <h3>Minh Hong</h3>
            <p>Minh Hong's Testimonial</p>
            </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
