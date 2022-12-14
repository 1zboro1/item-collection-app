import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function ItemCard(props) {
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
          src={props.image}
          style={{
            maxHeight: "16rem",
            objectFit: "contain",
            marginTop: "1rem",
          }}
        />
        <Card.Body>
          <Card.Title className="text-center">{t("itemIndexTitle")}</Card.Title>
          <Card.Text>{t("itemIndexCollName")}</Card.Text>
          <Card.Text>{t("itemIndexAuthor")}</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
