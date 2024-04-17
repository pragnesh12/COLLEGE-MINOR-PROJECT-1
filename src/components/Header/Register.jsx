import React, { useState } from "react";
import blackCar from "../Header/BlackCar.png";
import { Row, Col, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import Login from "./Login";
// import { useDispatch } from "react-redux";
// import { userRegister } from "../redux/actions/userAction";
import axios from "axios";
const Register = () => {
  // const dispatch = useDispatch();
  // const onFinish = (values) => {
  //   dispatch(userRegister(values));
  //   console.log("Success:", values);
  // };
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
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
  const register = () => {
    // message.success("Registration successfull");
    axios
      .post("http://localhost:1156/register", user)
      .then((res) => {
        // Assuming the server responds with a message upon successful registration
        message.success(res.data.message); // Display registration success message
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
      <div className="login">
        <Row gutter={16} className="d-flex align-items-center">
          <Col lg={16} style={{ position: "relative" }}>
            <img
              src={blackCar}
              className="blackCar w-100"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></img>
          </Col>
          <Col
            lg={8}
            className="text-left"
            style={{
              margin: "auto",
            }}
          >
            <Form
              layout="vertical"
              className="loginForm p-5"
              // onFinish={onFinish}
            >
              <h1>Register</h1>
              <hr />
              <Form.Item
                name="username"
                label="Username"
                value={user.username}
                onChange={handleChange}
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                value={user.password}
                onChange={handleChange}
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                value={user.confirmPassword}
                onChange={handleChange}
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <button
                className="loginBtn"
                type="submit"
                onClick={register}
                style={{
                  width: "5rem",
                  height: "2rem",
                  background: "none",
                  color: "black",
                  border: "1px solid black",
                  borderRadius: "0.5rem",
                }}
              >
                Register
              </button>
              <br />
              <br />
              <Link to="/login" className="clikToLogin">
                Click Here To Login
              </Link>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Register;
