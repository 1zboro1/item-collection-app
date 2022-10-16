import React from "react";
import Header from "../components/Header";
import { Col, Row } from "react-bootstrap";
import ItemIndex from "../components/ItemIndex";
import CollectionIndex from "../components/CollectionIndex";
import cardImage from "../imgs/strategia_grande.jpg";
import TagCloud from "../components/TagCloud";

export default function Home() {
  return (
    <>
      <Header />
      <h2
        className="text-center"
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        Recent items
      </h2>
      <Row className="mx-auto mt-4">
        <Col
          xxl={{ span: 2, offset: 1 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex image={cardImage} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex image={cardImage} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex image={cardImage} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex image={cardImage} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex image={cardImage} />
        </Col>
      </Row>
      <h2
        className="text-center"
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        Biggest collections
      </h2>
      <Row className="mx-auto mt-4">
        <Col
          xxl={{ span: 2, offset: 1 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex image={cardImage} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex image={cardImage} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex image={cardImage} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex image={cardImage} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex image={cardImage} />
        </Col>
      </Row>
      <TagCloud />
    </>
  );
}
