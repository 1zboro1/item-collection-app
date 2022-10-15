import React from "react";
import { Button } from "react-bootstrap";

export default function Manage(props) {
  return (
    <>
      <Button variant="secondary" onClick={props.overview}>
        Overview
      </Button>{" "}
      {props.blocked ? (
        <Button variant="success" onClick={props.block}>
          Unblock
        </Button>
      ) : (
        <Button variant="warning" onClick={props.block}>
          Block
        </Button>
      )}{" "}
      {props.admin ? (
        <Button variant="dark" onClick={props.permission}>
          Revoke Admin
        </Button>
      ) : (
        <Button variant="info" onClick={props.permission}>
          Give Admin
        </Button>
      )}{" "}
      <Button variant="danger" onClick={props.delete}>
        Delete
      </Button>
    </>
  );
}
