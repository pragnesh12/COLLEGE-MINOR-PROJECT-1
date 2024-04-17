import React from "react";
import { useState } from "react";
import blackCar from "../Header/BlackCar.png";
import { Row, Col, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:1156/login", user).then((res) => {
      if (res.status == 200) {
        message.success("Login Successfull");
        setTimeout(() => {
          window.location.href = "/cars";
        }, 2000);
      } else {
        message.error("Register Yourself");
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
            <Form layout="vertical" className="loginForm p-5">
              <h1>Login</h1>
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
              <button
                className="loginBtn"
                onClick={login}
                style={{
                  width: "5rem",
                  height: "2rem",
                  background: "none",
                  color: "black",
                  border: "1px solid black",
                  borderRadius: "0.5rem",
                }}
              >
                Login
              </button>
              <br />
              <br />
              <Link to="/register" className="clikToLogin">
                Register Yourself
              </Link>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
