import React from "react";
import { Button } from "react-bootstrap";

export default function Manage(props) {
  return (
    <>
      <Button variant="secondary" onClick={props.overview} className="mb-1 mt-1">
        Overview
      </Button>{" "}
      {props.blocked ? (
        <Button variant="success" onClick={props.block} className="mb-1 mt-1">
          Unblock
        </Button>
      ) : (
        <Button variant="warning" onClick={props.block} className="mb-1 mt-1">
          Block
        </Button>
      )}{" "}
      {props.admin ? (
        <Button variant="dark" onClick={props.permission} className="mb-1 mt-1">
          Revoke Admin
        </Button>
      ) : (
        <Button variant="info" onClick={props.permission} className="mb-1 mt-1">
          Give Admin
        </Button>
      )}{" "}
      <Button variant="danger" onClick={props.delete} className="mb-1 mt-1">
        Delete
      </Button>
    </>
  );
}
