import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import trash from "../icons/trash-solid.svg";

export default function CollectionCard(props) {
  const { t } = useTranslation();
  const colors =
    props.theme === "light"
      ? "bg-light text-dark mb-2"
      : "bg-secondary bg-gradient text-white mb-2";
  return (
    <React.Fragment>
      <Card style={{ width: "20rem" }} className={colors}>
        <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/51MR3422P6L.jpg"
          style={{
            maxHeight: "16rem",
            objectFit: "contain",
            marginTop: "1rem",
          }}
        />
        <Card.Body>
          <Card.Title className="text-center">Collection name</Card.Title>
          <Card.Text>{t("colIndexType")}</Card.Text>
        </Card.Body>
        <img
          src={trash}
          alt="trash icon"
          style={{ maxHeight: "40px", marginBottom: "5px" }}
        />
      </Card>
    </React.Fragment>
  );
}
