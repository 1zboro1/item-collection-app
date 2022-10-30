import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function ItemManage(props) {
  const { t } = useTranslation();
  const clickEdit = async (e) => {
    console.log(`Edit ${props.coll_id}`);
  };
  const clickDelete = async (e) => {
    console.log(`Delete ${props.coll_id}`);
    e.preventDefault();
    try {
      // const url = `http://localhost:5000/api/deleteCollection`;
      const url =
        "https://item-collection-app-bz.herokuapp.com/api/deleteCollection";
      await axios
        .post(url, {
          email: props.email,
          _id: props.coll_id,
        })
        .then((response) => {
          console.log(response);
          alert("Collection deleted");
          window.location.reload();
        });
    } catch (error) {
      console.log("Deleting error", error);
      alert("Deleting collection problem");
    }
  };
  return (
    <>
      <Button variant="secondary" className="mb-1 mt-1" onClick={clickEdit}>
        {t("edit")}
      </Button>{" "}
      <Button variant="danger" className="mb-1 mt-1" onClick={clickDelete}>
        {t("tableDelete")}
      </Button>
    </>
  );
}
