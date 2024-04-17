import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { message } from "antd";
import axios from "axios";
import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
    console.log(`id is ${id} and value is ${value}`);
    console.dir(e);
  };
  const sendMessageHandler = () => {
    axios
      .post("http://localhost:1156/send/message", user)
      .then((res) => {
        if (res.status == 200) {
          message.success("Message sent successfully");
        }
      })
      .catch((error) => {
        // Handle errors
        if (error.response) {
          // Server responded with a non-2xx status code
          console.error("Server Error:", error.response.data.message);
        } else if (error.request) {
          // Request made but no response received
          console.error("Network Error:", error.request);
        } else {
          // Something happened in setting up the request
          console.error("Request Error:", error.message);
        }
      });
  };
  return (
    <Helmet title="Contact">
      {console.log("user:", user)}
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Your Name"
                    type="text"
                    id="name"
                    label="name"
                    value={user.name}
                    onChange={handleChange}
                    rules={[{ required: true }]}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Email"
                    type="email"
                    id="email"
                    label="email"
                    value={user.email}
                    onChange={handleChange}
                    rules={[{ required: true }]}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    id="message"
                    label="message"
                    value={user.message}
                    onChange={handleChange}
                    rules={[{ required: true }]}
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" onClick={sendMessageHandler}>
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  1036, Bhatfali, opposite khodyarmaa temple, bareja, ahemdabad
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+91 7485946310</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    ranapragnesh@gmail.com
                  </p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
