import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import ItemImage from "../components/ItemImage";

export default function AddItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  return (
    <>
      <Header />
      <Container fluid>
        <h1
          style={{ fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}
        >
          Add item to collection
        </h1>
        <Form style={{ marginTop: "50px" }}>
          <Row className="mb-3">
            <Col
              xs={{ span: 8, offset: 2 }}
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
                  className="square border border-dark border-2"
                  placeholder="Name..."
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
              <ItemImage />
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
                  <strong>ADD NOW</strong>
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
