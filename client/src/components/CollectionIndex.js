import React from "react";
import { useTranslation } from "react-i18next";
import { Card } from "react-bootstrap";

export default function CollectionCard(props) {
  const { t } = useTranslation();
  const colors =
    props.theme === "light"
      ? "bg-light text-dark mb-2"
      : "bg-secondary bg-gradient text-white mb-2";
  return (
    <React.Fragment>
      <Card style={{ width: "14rem" }} className={colors}>
        <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/51MR3422P6L.jpg"
          style={{
            maxHeight: "10rem",
            objectFit: "contain",
            marginTop: "1rem",
          }}
        />
        <Card.Body>
          <Card.Title className="text-center">{t("colIndexName")}</Card.Title>
          <Card.Text>{t("colIndexType")}</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
