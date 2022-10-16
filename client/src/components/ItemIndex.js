import React from "react";
import { Card } from "react-bootstrap";

export default function ItemCard(props) {
  return (
    <React.Fragment>
      <Card style={{ width: "14rem" }}>
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
          <Card.Text style={{marginBottom: 0}}>Collection:</Card.Text>
          <Card.Text style={{marginTop: 0}}>Author:</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
