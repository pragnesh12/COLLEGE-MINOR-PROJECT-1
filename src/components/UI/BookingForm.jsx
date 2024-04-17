import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import axios from "axios";
import { message } from "antd";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";
const BookingForm = ({ singleCarItem }) => {
  const carName = singleCarItem.carName;
  const [user, setUser] = useState({
    carName: carName,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fromAddress: "",
    toAddress: "",
    howPersons: "",
    howLuggage: "",
    date: "",
    time: "",
    information: "",
    paymentMethod: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
    console.log(`id is ${id} and value is ${value}`);
  };

  const reserve = () => {
    // message.success("Registration successfull");
    axios
      .post("http://localhost:1156/reserve", user)
      .then((res) => {
        // Assuming the server responds with a message upon successful registration
        if (res.status == 200) {
          message.success("Reserved Successfully");
          setTimeout(() => {
            window.location.href = "/cars";
          }, 2000);
        } else if (res.status == 201) {
          message.warning("Your request is already panding⌛");
        } else {
          message.error("Please login first");
        } // Display registration success message
        console.log(res); // Log the response (optional)
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
    <>
      {console.log("user:", user)}
      <Form>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            id="firstName"
            label="First Name"
            value={user.firstName}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            label="Last Name"
            value={user.lastName}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            label="Email"
            value={user.email}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="number"
            placeholder="Phone Number"
            name="phoneNumber"
            id="phoneNumber"
            label="Phone Number"
            value={user.phoneNumber}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="text"
            placeholder="From Address"
            name="fromAddress"
            id="fromAddress"
            label="From Adsress"
            value={user.fromAddress}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="text"
            placeholder="To Address"
            name="toAddress"
            id="toAddress"
            label="To Address"
            value={user.toAddress}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <select
            name="howPersons"
            id="howPersons"
            label="How Persons"
            value={user.howPersons}
            onChange={handleChange}
            rules={[{ required: true }]}
          >
            <option value="1 person">1 Person</option>
            <option value="2 person">2 Person</option>
            <option value="3 person">3 Person</option>
            <option value="4 person">4 Person</option>
            <option value="5+ person">5+ Person</option>
          </select>
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="date"
            placeholder="Journey Date"
            name="date"
            id="date"
            label="Date"
            value={user.date}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="time"
            placeholder="Journey Time"
            className="time__picker"
            name="time"
            id="time"
            label="Time"
            value={user.time}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </FormGroup>

        <FormGroup>
          <textarea
            rows={5}
            type="textarea"
            className="information textarea"
            placeholder="Write"
            name="information"
            id="information"
            label="TextArea"
            value={user.information}
            onChange={handleChange}
            rules={[{ required: true }]}
          ></textarea>
        </FormGroup>
      </Form>
      <div
        className="payment"
        label="directBank"
        value={user.paymentMethod}
        onChange={handleChange}
      >
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            value="directBank"
            name="paymentMethod"
            id="paymentMethod"
          />{" "}
          Direct Bank Transfer
        </label>
      </div>

      <div
        className="payment mt-3"
        label="UPI"
        value={user.paymentMethod}
        onChange={handleChange}
      >
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            value="UPI"
            name="paymentMethod"
            id="paymentMethod"
          />{" "}
          UPI
        </label>
      </div>

      <div
        className="payment mt-3 d-flex align-items-center justify-content-between"
        label="MasterCard"
        value={user.paymentMethod}
        onChange={handleChange}
      >
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            value="Master Card"
            name="paymentMethod"
            id="paymentMethod"
          />{" "}
          Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div
        className="payment mt-3 d-flex align-items-center justify-content-between"
        label="CashOnPickup"
        value={user.paymentMethod}
        onChange={handleChange}
      >
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            value="CashOnPickup"
            name="paymentMethod"
            id="paymentMethod"
          />{" "}
          Cash On Pickup
        </label>

        <img src={paypal} alt="" />
      </div>
      <div
        className="payment text-end mt-5"
        style={{ display: "flex", justifyContent: "center" }}
        onClick={reserve}
      >
        <button>Reserve Now</button>
      </div>
    </>
  );
};
export default BookingForm;
