import React from "react";
import { useTranslation } from "react-i18next";
import { Card } from "react-bootstrap";

export default function ItemCard(props) {
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
          src={props.image}
          style={{
            maxHeight: "10rem",
            objectFit: "contain",
            marginTop: "1rem",
          }}
        />
        <Card.Body>
          <Card.Title className="text-center">{t("itemIndexTitle")}</Card.Title>
          <Card.Text style={{ marginBottom: 0 }}>
            {t("itemIndexCollName")}
          </Card.Text>
          <Card.Text style={{ marginTop: 0 }}>{t("itemIndexAuthor")}</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
