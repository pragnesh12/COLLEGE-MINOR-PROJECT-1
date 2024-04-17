import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/slider-img/slider-1.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to reLive rentals</h2>
              <p className="section__description">
                Welcome to reLive Rentals!
                <br />
                <br />
                At reLive Rentals, we're dedicated to transforming your travel
                experiences into unforgettable adventures. Established in 2024,
                our mission is to provide exceptional service and reliable
                transportation solutions for every journey.
                <br />
                <br />
                Driven by our core values of integrity, innovation, and
                sustainability, reLive Rentals has become a trusted name in the
                travel industry. We're committed to exceeding your expectations
                and ensuring that every trip with us is seamless and memorable.
                <br />
                <br />
                With a diverse range of services, including car rentals, guided
                tours, airport transfers, and more, reLive Rentals offers
                everything you need for an extraordinary travel experience. Our
                fleet of meticulously maintained vehicles is equipped with the
                latest amenities to ensure your comfort and convenience on the
                road.
                <br />
                <br />
                But reLive Rentals is more than just a travel company—we're a
                community. We believe in the transformative power of travel to
                connect people, cultures, and ideas. That's why we're dedicated
                to making a positive impact in the communities we serve and
                promoting responsible travel practices.
                <br />
                <br />
                Whether you're exploring a new city, embarking on a road trip,
                or planning a group excursion, reLive Rentals is here to make
                your travel dreams a reality. Join us on the journey of a
                lifetime and discover the world with reLive Rentals.
                <br />
                <br />
                Thank you for choosing reLive Rentals for your travel needs.
                We're honored to be a part of your adventures and look forward
                to creating memories that will last a lifetime.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line">
                    "Quality vehicles, exceptional service."
                  </i>
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line">
                    "Unlock unforgettable adventures with reLive Rentals."
                  </i>
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line">
                    "Your trusted partner for hassle-free transportation."
                  </i>
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line">
                    "Your gateway to unforgettable memories."
                  </i>
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
