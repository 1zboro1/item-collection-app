import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import CollectionImage from "../components/CollectionImage";

export default function AddCollection() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  return (
    <>
      <Header />
      <Container fluid>
        <h1
          style={{ fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}
        >
          Create new collection
        </h1>
        <Form style={{ marginTop: "50px" }}>
          <Row className="mb-3">
            <Col
              xs={{ span: 8, offset: 2 }}
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
                  className="square border border-dark border-2"
                  placeholder="Name..."
                />
              </Form.Group>
            </Col>
            <Col
              xs={{ span: 8, offset: 2 }}
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
                  className="square border border-dark border-2"
                  placeholder="Type..."
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col
              xs={{ span: 8, offset: 2 }}
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
                  className="square border border-dark border-2"
                  placeholder="Description..."
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 8, offset: 2 }}
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
                  className="square border border-dark border-2"
                  placeholder="Tags..."
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col
              xs={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 4, offset: 4 }}
            >
              <CollectionImage />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              xs={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 2, offset: 5 }}
            >
              <div className="d-grid gap-2 ">
                <Button type="submit">
                  <strong>CREATE NOW</strong>
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
