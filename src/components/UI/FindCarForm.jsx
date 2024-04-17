import React, { useState } from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import axios from "axios";
const FindCarForm = () => {
  const [user, setUser] = useState({
    fromAddress: "",
    toAddress: "",
    date: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };
  const FindCarHandler = () => {
    axios.post("http://localhost:1156/findCar", user).then((res) => {
      if (res.status == 200) {
        message.success(
          `Yes bookings avaliable from ${fromAddress} to ${toAddress} at this ${date}`
        );
        setTimeout(() => {
          window.location.href = "/reserve";
        }, 2000);
      } else {
        confirm.log(res);
        message.error("Not booking yet");
      }
    });
  };

  return (
    <Form className="form">
      {console.log("user : ", user)}
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="From address"
            id="fromAddress"
            label="fromAddress"
            value={user.fromAddress}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="To address"
            id="toAddress"
            label="toAddress"
            value={user.toAddress}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            placeholder="Journey date"
            id="date"
            label="date"
            value={user.date}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn" onClick={FindCarHandler}>
            Find Car
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
