import React from "react";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";

export default function CollectionPage() {
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
    </>
  );
}
