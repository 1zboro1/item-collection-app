import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Header />
      <Container fluid>
        <h1
          style={{ fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}
        >
          Sign-in to your account
        </h1>
        <Form style={{ marginTop: "70px" }}>
          <Row className="mb-3">
            <Col
              xs={{ span: 10, offset: 1 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 2, offset: 5 }}
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
                  className="square border border-primary border-2"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 10, offset: 1 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 2, offset: 5 }}
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
                  className="square border border-primary border-2"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              xs={{ span: 10, offset: 1 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 2, offset: 5 }}
            >
              <div className="d-grid gap-2 ">
                <Button type="submit">
                  <strong>LOGIN</strong>
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col
              xs={{ span: 10, offset: 1 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 2, offset: 5 }}
              className="text-center"
            >
              <Link to="/register">
                <h6>Click here to register</h6>
              </Link>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
