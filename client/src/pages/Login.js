import React from "react";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";

export default function Login() {
  const { t } = useTranslation();
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const pageTheme =
    theme === "light" ? "bg-light text-dark" : "bg-dark text-white";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      // const url = `http://localhost:5000/api/login`;
      const url = "https://item-collection-app-bz.herokuapp.com/login";
      const { data: res } = await axios.post(url, {
        email,
        password,
      });
      localStorage.setItem("appToken", res.data);
      window.location = "/";
    } catch (error) {
      alert("React login failed");
    }
  };
  return (
    <>
      <div className={pageTheme} style={{ minHeight: "100vh" }}>
        <Header theme={theme} click={switchTheme} />
        <Container fluid>
          <h1
            style={{ fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}
          >
            {t("signInHeader")}
          </h1>
          <Form style={{ marginTop: "70px" }} onSubmit={loginUser}>
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
                    <strong>{t("password")}</strong>
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
                    <strong>{t("loginButton")}</strong>
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col
                xs={{ span: 10, offset: 1 }}
                lg={{ span: 4, offset: 4 }}
                xxl={{ span: 2, offset: 5 }}
                className="text-center"
              >
                <Link to="/register">
                  <h6>{t("loginToRegisterLink")}</h6>
                </Link>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
}
