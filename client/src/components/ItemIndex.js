import React from "react";
import { Card } from "react-bootstrap";

export default function ItemCard(props) {
  const colors =
    props.theme === "light"
      ? "bg-light text-dark"
      : "bg-secondary bg-gradient text-white";
  return (
    <React.Fragment>
      <Card style={{ width: "14rem" }} className={colors}>
        <Card.Img
          variant="top"
          src={props.image}
          style={{
            maxHeight: "10rem",
            objectFit: "contain",
            marginTop: "1rem",
          }}
        />
        <Card.Body>
          <Card.Title className="text-center">Card Title</Card.Title>
          <Card.Text style={{ marginBottom: 0 }}>Collection:</Card.Text>
          <Card.Text style={{ marginTop: 0 }}>Author:</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
