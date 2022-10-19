import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Figure, Row, Col } from "react-bootstrap";
import imgPlaceholder from "../imgs/placeholder-image.png";

export default function CollectionImage(props) {
  const componentTheme =
    props.theme === "light"
      ? "square border border-primary border-4 bg-light text-dark"
      : "square border border-primary border-4 bg-white text-dark";
  return (
    <Container className={componentTheme} style={{ borderRadius: "5px" }}>
      <Row className="my-3 mx-auto">
        <Col
          // xs={{ span: 12 }}
          xs={{ span: 8, offset: 3 }}
          xl={{ span: 4, offset: 0 }}
        >
          <Figure.Image
            src={imgPlaceholder}
            width="75%"
            className="square border border-dark border-1 mx-auto"
          />
        </Col>
        <Col
          className="my-auto text-center"
          // xs={{ span: 10 }}
          xs={{ span: 12, offset: 0 }}
          xl={{ span: 5, offset: 0 }}
        >
          <strong className="">Upload collection picture</strong>
        </Col>
        <Col
          className="my-auto"
          // xs={{ span: 10 }}
          xs={{ span: 12, offset: 0 }}
          xl={{ span: 3 }}
        >
          <div className="d-grid gap-2 ">
            <Button variant="primary">Upload</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
