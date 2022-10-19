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
  en: { nativeName: "English" },
  pl: { nativeName: "Polish" },
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
              Home
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/login">
              Login
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/register">
              Register
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/adminpage">
              Admin Page
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/mycollections">
              My Collections
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/collectionpage">
              Collection Page
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/itempage">
              Item Page
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={props.click}>
              Dark mode{" "}
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
