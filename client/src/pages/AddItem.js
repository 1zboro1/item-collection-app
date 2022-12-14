import React from "react";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import ItemImage from "../components/ItemImage";

export default function AddItem() {
  const { t } = useTranslation();
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const pageTheme =
    theme === "light" ? "bg-light text-dark" : "bg-dark text-white";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  return (
    <div className={pageTheme} style={{ minHeight: "100vh" }}>
      <Header theme={theme} click={switchTheme} />
      <Container fluid>
        <h1
          style={{ fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}
        >
          {t("addItemHeader")}
        </h1>
        <Form style={{ marginTop: "50px" }}>
          <Row className="mb-3">
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 4, offset: 4 }}
            >
              <Form.Group controlId="nameInput">
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="square border border-primary border-4"
                  placeholder={t("name")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 4, offset: 4 }}
            >
              <Form.Group controlId="descriptionInput">
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  className="square border border-primary border-4"
                  placeholder={t("description")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 4, offset: 4 }}
            >
              <Form.Group controlId="tagsInput">
                <Form.Control
                  type="text"
                  value={tags}
                  onChange={(e) => {
                    setTags(e.target.value);
                  }}
                  className="square border border-primary border-4"
                  placeholder={t("tagsV2")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 4, offset: 4 }}
            >
              <ItemImage theme={theme} />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 2, offset: 5 }}
            >
              <div className="d-grid gap-2 mb-2">
                <Button type="submit">
                  <strong>{t("addNowButton")}</strong>
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
