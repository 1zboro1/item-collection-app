import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function ItemManage(props) {
  const { t } = useTranslation();
  const clickEdit = () => {
    console.log("edit");
  };
  const clickDelete = () => {
    console.log("delete");
  };
  return (
    <>
      <Button variant="secondary" onClick={clickEdit} className="mb-1 mt-1">
        {t("edit")}
      </Button>{" "}
      <Button variant="danger" onClick={clickDelete} className="mb-1 mt-1">
        {t("tableDelete")}
      </Button>
    </>
  );
}
