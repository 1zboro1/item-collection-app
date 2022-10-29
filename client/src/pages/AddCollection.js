import React from "react";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import CollectionImage from "../components/CollectionImage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddCollection() {
  const { t } = useTranslation();
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const pageTheme =
    theme === "light" ? "bg-light text-dark" : "bg-dark text-white";
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleCreateCollection = async (e) => {
    e.preventDefault();
    try {
      // const url = `http://localhost:5000/api/createCollection`;
      const url =
        "https://item-collection-app-bz.herokuapp.com/api/createCollection";
      await axios
        .post(url, {
          email: localStorage.getItem("email"),
          coll_name: name,
          coll_type: type,
          coll_descritpion: description,
          coll_image: image,
        })
        .then((response) => {
          alert("Collection created");
          navigate("/mycollections");
        });
    } catch (error) {
      console.log("Creating error", error);
      alert("Creating collection problem");
    }
  };
  return (
    <div className={pageTheme} style={{ minHeight: "100vh" }}>
      <Header theme={theme} click={switchTheme} />
      <Container fluid>
        <h1
          style={{ fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}
        >
          {t("createCollHeader")}
        </h1>
        <Form style={{ marginTop: "50px" }} onSubmit={handleCreateCollection}>
          <Row className="mb-3">
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 8, offset: 2 }}
              lg={{ span: 3, offset: 3 }}
              xl={{ span: 2, offset: 4 }}
            >
              <Form.Group controlId="nameInput">
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="square border border-primary border-4 mb-1"
                  placeholder={t("name")}
                />
              </Form.Group>
            </Col>
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 8, offset: 2 }}
              lg={{ span: 3, offset: 0 }}
              xl={{ span: 2, offset: 0 }}
            >
              <Form.Group controlId="typeInput">
                <Form.Control
                  type="text"
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  className="square border border-primary border-4"
                  placeholder={t("type")}
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
          {/* <Row>
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
          </Row> */}
          <Row className="mt-3">
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 4, offset: 4 }}
            >
              <CollectionImage theme={theme} />
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
                  <strong>{t("createNowButton")}</strong>
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
