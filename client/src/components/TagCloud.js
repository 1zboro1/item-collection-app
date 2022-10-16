import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function TagCloud() {
  return (
    <>
      <Container
        style={{
          width: "80%",
          height: "100px",
          backgroundColor: "#6C757D",
          marginTop: "2rem",
        }}
        fluid
      >
        <Row style={{ color: "white" }}>
          <Col>
            <h1>Shalom</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
