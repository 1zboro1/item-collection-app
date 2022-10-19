import React from "react";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";

export default function Register() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const pageTheme =
    theme === "light" ? "bg-light text-dark" : "bg-dark text-white";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <>
      <div className={pageTheme} style={{ height: "100vh" }}>
        <Header theme={theme} click={switchTheme} />
        <Container fluid>
          <h1
            style={{ fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}
          >
            Register account
          </h1>
          <Form style={{ marginTop: "70px" }}>
            <Row className="mb-3">
              <Col
                xs={{ span: 10, offset: 1 }}
                lg={{ span: 4, offset: 4 }}
                xxl={{ span: 2, offset: 5 }}
              >
                <Form.Group controlId="usernameInput">
                  <Form.Label className="mx-3">
                    <strong>Username</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className="square border border-primary border-4"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col
                xs={{ span: 10, offset: 1 }}
                lg={{ span: 4, offset: 4 }}
                xxl={{ span: 2, offset: 5 }}
              >
                <Form.Group controlId="emailInput">
                  <Form.Label className="mx-3">
                    <strong>E-mail</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="square border border-primary border-4"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col
                xs={{ span: 10, offset: 1 }}
                lg={{ span: 4, offset: 4 }}
                xxl={{ span: 2, offset: 5 }}
              >
                <Form.Group controlId="passwordInput">
                  <Form.Label className="mx-3">
                    <strong>Password</strong>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="square border border-primary border-4"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col
                xs={{ span: 10, offset: 1 }}
                lg={{ span: 4, offset: 4 }}
                xxl={{ span: 2, offset: 5 }}
              >
                <div className="d-grid gap-2 ">
                  <Button type="submit">
                    <strong>REGISTER</strong>
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col
                lg={{ span: 4, offset: 4 }}
                xxl={{ span: 2, offset: 5 }}
                className="text-center"
              >
                <Link to="/login">
                  <h6>Already have an account? Sign-in here</h6>
                </Link>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
}
