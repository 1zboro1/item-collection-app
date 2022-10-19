import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Manage(props) {
  const { t } = useTranslation();
  return (
    <>
      <Button
        variant="secondary"
        onClick={props.overview}
        className="mb-1 mt-1"
      >
        {t("tableOverview")}
      </Button>{" "}
      {props.blocked ? (
        <Button variant="success" onClick={props.block} className="mb-1 mt-1">
          {t("tableUnblock")}
        </Button>
      ) : (
        <Button variant="warning" onClick={props.block} className="mb-1 mt-1">
          {t("tableBlock")}
        </Button>
      )}{" "}
      {props.admin ? (
        <Button variant="dark" onClick={props.permission} className="mb-1 mt-1">
          {t("tableRevokeAdmin")}
        </Button>
      ) : (
        <Button variant="info" onClick={props.permission} className="mb-1 mt-1">
          {t("tableGiveAdmin")}
        </Button>
      )}{" "}
      <Button variant="danger" onClick={props.delete} className="mb-1 mt-1">
      {t("tableDelete")}
      </Button>
    </>
  );
}
