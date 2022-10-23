import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function ItemManage(props) {
  const { t } = useTranslation();
  return (
    <>
      <Button
        variant="secondary"
        onClick={props.edit}
        className="mb-1 mt-1"
      >
        {t("edit")}
      </Button>{" "}
      <Button variant="danger" onClick={props.delete} className="mb-1 mt-1">
        {t("tableDelete")}
      </Button>
    </>
  );
}
