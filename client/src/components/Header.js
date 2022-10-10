import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Container, Row, Col } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <Container className="bg-primary py-3" fluid>
        <Row className="mx-4">
          <Col lg={{ span: 2 }}>
            <h1 className="text-white">Collections</h1>
          </Col>
          <Col lg={{ span: 4, offset: 2 }} className="my-auto">
            <Form.Control size="lg" type="text" placeholder="Search..." style={{borderRadius: "30px 30px 30px 30px"}}/>
          </Col>
        </Row>
      </Container>
    );
  }
}
