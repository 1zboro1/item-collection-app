import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import { Row, Col, Table } from "react-bootstrap";
import Manage from "../components/Manage";

export default function AdminPage() {
  let [blocked, setBlocked] = useState(false);
  let [admin, setAdmin] = useState(false);

  const clickOverview = () => {
    console.log("overview");
  };
  const clickManageBlock = () => {
    if (blocked === false) {
      setBlocked(true);
      console.log("block");
    } else {
      setBlocked(false);
      console.log("unblocked");
    }
  };
  const clickDelete = () => {
    console.log("delete");
  };
  const clickManagePermission = () => {
    if (admin === false) {
      setAdmin(true);
      console.log("admin");
    } else {
      setAdmin(false);
      console.log("nonAdmin");
    }
  };
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
                <td className="text-center">
                  <Manage
                    overview={clickOverview}
                    block={clickManageBlock}
                    delete={clickDelete}
                    permission={clickManagePermission}
                    admin={admin}
                    blocked={blocked}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
