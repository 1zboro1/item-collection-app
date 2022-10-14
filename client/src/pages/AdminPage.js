import React from "react";
import Header from "../components/Header";
import { Row, Col, Table } from "react-bootstrap";
import Manage from "../components/Manage";

export default function AdminPage() {
  return (
    <>
      <Header />
      <h1
        className="text-center"
        style={{ fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}
      >
        Administration
      </h1>
      <Row className="mt-5">
        <Col xs={{ span: 10, offset: 1 }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: "5%", textAlign: "center" }}>#</th>
                <th style={{ width: "20%", textAlign: "center" }}>Username</th>
                <th style={{ width: "25%", textAlign: "center" }}>E-mail</th>
                <th style={{ textAlign: "center" }}>Manage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Adams</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
