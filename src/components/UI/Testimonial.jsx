import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/Team-img/PragneshImg2.jpg";
import ava02 from "../../assets/all-images/Team-img/yashImg.jpg";
import ava03 from "../../assets/all-images/Team-img/harshImg.jpg";

import ava04 from "../../assets/all-images/Team-img/manishImg.jpg";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "Absolutely thrilled with my experience using reLive Rentals! From the
          easy booking process to the seamless pickup, their service exceeded my
          expectations. The car was in pristine condition, and the unlimited
          mileage option gave me the freedom to explore without constraints.
          Will definitely be using reLive Rentals for all my future travels!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Aman Patel</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "Highly recommend reLive Rentals for anyone in need of reliable
          transportation. Their wide range of pickup locations made it
          convenient for me to find a vehicle near my hotel, and the airport
          transfer service was a lifesaver. The fast and easy booking process
          ensured I could secure my rental with ease, and the friendly staff
          made the entire experience pleasant from start to finish."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Rakesh Desai</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "Five-star service from reLive Rentals! I used their airport transfer
          service for my recent trip, and I couldn't be happier with the level
          of professionalism and efficiency. The driver was punctual and
          courteous, and the vehicle was clean and comfortable. Such a
          stress-free way to start and end my journey. Will definitely be using
          reLive Rentals again!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Paresh Panchal</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "reLive Rentals made exploring the city a breeze! Their comprehensive
          whole city tour took me to all the must-see attractions, and the
          knowledgeable guide provided fascinating insights into the local
          culture and history. With unlimited miles included, I was able to
          fully immerse myself in the experience without worrying about
          distance. A truly memorable and seamless adventure thanks to reLive
          Rentals!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Aman Singh</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
