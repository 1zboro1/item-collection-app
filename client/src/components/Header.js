import React from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const lngs = {
  en: { nativeName: "ENGLISH" },
  pl: { nativeName: "POLSKI" },
};

export default function Header(props) {
  const { t, i18n } = useTranslation();
  return (
    <Container className="bg-primary py-3" fluid>
      <Row className="mx-4">
        <Col sm={{ span: 2 }} lg={{ span: 2 }}>
          <Link to="/">
            <h1 className="text-white">{t("collections")}</h1>
          </Link>
        </Col>
        <Col
          sm={{ span: 8, offset: 2 }}
          lg={{ span: 4, offset: 2 }}
          className="my-auto"
        >
          <Form.Control
            size="lg"
            type="text"
            placeholder={t("search")}
            style={{ borderRadius: "30px 30px 30px 30px" }}
          />
        </Col>
        <Col
          sm={{ span: 2 }}
          lg={{ span: 1, offset: 3 }}
          className="my-auto mx-auto"
        >
          <DropdownButton id="dropdown-menu" title="Menu" size="lg">
            <Dropdown.Item as={Link} to="/">
              {t("home")}
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/login">
            {t("login")}
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/register">
            {t("register")}
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/adminpage">
            {t("adminPage")}
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/mycollections">
            {t("myColl")}
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/collectionpage">
            {t("collPage")}
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/itempage">
            {t("itemPage")}
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={props.click}>
              DARK MODE{" "}
              {props.theme === "light" ? (
                <i className="fa-solid fa-toggle-off"></i>
              ) : (
                <i className="fa-solid fa-toggle-on"></i>
              )}
            </Dropdown.Item>
            <Dropdown.Item>
              {Object.keys(lngs).map((lng) => (
                <Button
                  variant="secondary"
                  type="submit"
                  className="mx-1"
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                  disabled={i18n.resolvedLanguage === lng}
                >
                  {lngs[lng].nativeName}
                </Button>
              ))}
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </Container>
  );
}
