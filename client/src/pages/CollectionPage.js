import React from "react";
import Header from "../components/Header";
import { Container, Row, Col, Button } from "react-bootstrap";
import ItemCard from "../components/ItemCard";
import cardImage from "../imgs/strategia_grande.jpg";

export default function CollectionPage() {
  const addItemClick = () => {
    console.log("click");
  };
  return (
    <>
      <Header />
      <h1
        className="text-center"
        style={{ fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}
      >
        CollectionPage
      </h1>
      <h4 style={{ textAlign: "center" }}>Type: books</h4>
      <h6 style={{ textAlign: "center" }}>Tags: </h6>
      <Container>
        <p style={{ textAlign: "justify", marginTop: "20px" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          praesentium soluta fuga illo dolorum excepturi corporis esse impedit
          magnam hic sequi consectetur amet commodi quisquam, vitae quos, earum
          totam voluptatum. Vero, excepturi! Nisi molestiae libero mollitia
          laboriosam, nulla temporibus tempore odio asperiores. Possimus
          distinctio perferendis iusto at perspiciatis, debitis commodi sint
          magnam optio ipsa sapiente error atque voluptatibus vel earum. Dolor
          dicta accusantium eius numquam, voluptatibus aliquam placeat
          laudantium eum ipsam aut ut enim praesentium eaque ab nam autem omnis
          mollitia minus illum cum iure rerum tempore officia. Sunt, possimus?
        </p>
      </Container>
      <Row className="mx-auto mt-4">
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemCard image={cardImage} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemCard image={cardImage} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemCard image={cardImage} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemCard image={cardImage} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemCard image={cardImage} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemCard image={cardImage} />
        </Col>
      </Row>
      <Container>
        <Row className="mt-5 mb-5">
          <Col md={{ span: 4, offset: 4 }} lg={{ span: 2, offset: 5 }}>
            <div className="d-grid gap-2 ">
              <Button type="submit" size="lg" onClick={addItemClick}>
                <strong>ADD ITEM</strong>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
