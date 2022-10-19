import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container className="bg-primary py-3" fluid>
      <Row className="mx-4">
        <Col sm={{ span: 2 }} lg={{ span: 2 }}>
          <Link to="/">
            <h1 className="text-white">Collections</h1>
          </Link>
        </Col>
        <Col
          sm={{ span: 8, offset: 2 }}
          lg={{ span: 4, offset: 2 }}
          className="my-auto"
        >
          <Form.Control
            size="lg"
            type="text"
            placeholder="Search..."
            style={{ borderRadius: "30px 30px 30px 30px" }}
          />
        </Col>
        <Col
          sm={{ span: 2 }}
          lg={{ span: 1, offset: 3 }}
          className="my-auto mx-auto"
        >
          <DropdownButton id="dropdown-menu" title="Menu" size="lg">
            <Dropdown.Item as={Link} to="/">
              Home
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/login">
              Login
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/register">
              Register
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/adminpage">
              Admin Page
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/mycollections">
              My Collections
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/collectionpage">
              Collection Page
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/itempage">
              Item Page
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </Container>
  );
}
