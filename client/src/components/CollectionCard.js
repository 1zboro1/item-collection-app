import React from "react";
import { Card } from "react-bootstrap";

export default function CollectionCard(props) {
  return (
    <React.Fragment>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={props.image}
          style={{
            maxHeight: "16rem",
            objectFit: "contain",
            marginTop: "1rem",
          }}
        />
        <Card.Body>
          <Card.Title className="text-center">Collection name</Card.Title>
          <Card.Text>Type:</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
