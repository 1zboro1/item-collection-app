import React from "react";
import Header from "../components/Header";
import { Container, Row, Col, Button } from "react-bootstrap";
import CollectionCard from "../components/CollectionCard";
import cardImage from "../imgs/strategia_grande.jpg";

export default function MyCollections() {
  const addCollectionClick = () => {
    console.log("click");
  };
  return (
    <>
      <Header />
      <h1
        className="text-center"
        style={{ fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}
      >
        My collections
      </h1>
      <Row className="mx-auto mt-5">
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionCard image={cardImage} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionCard image={cardImage} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionCard image={cardImage} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionCard image={cardImage} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionCard image={cardImage} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionCard image={cardImage} />
        </Col>
      </Row>
      <Container>
        <Row className="mt-5 mb-5">
          <Col
            md={{ span: 4, offset: 4 }}
            lg={{ span: 4, offset: 4 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="d-grid gap-2 ">
              <Button type="submit" size="lg" onClick={addCollectionClick}>
                <strong>ADD COLLECTION</strong>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
