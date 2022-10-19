import React from "react";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ItemCard from "../components/ItemCard";
import cardImage from "../imgs/strategia_grande.jpg";

export default function CollectionPage() {
  const { t } = useTranslation();
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const pageTheme =
    theme === "light" ? "bg-light text-dark" : "bg-dark text-white";
  return (
    <div className={pageTheme} style={{ minHeight: "100vh" }}>
      <Header theme={theme} click={switchTheme} />
      <h1
        className="text-center"
        style={{ fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}
      >
        CollectionPage
      </h1>
      <h4 style={{ textAlign: "center" }}>{t("colIndexType")}books</h4>
      <h6 style={{ textAlign: "center" }}>{t("tags")}</h6>
      <Container>
        <p style={{ textAlign: "justify", marginTop: "20px" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          praesentium soluta fuga illo dolorum excepturi corporis esse impedit
          magnam hic sequi consectetur amet commodi quisquam, vitae quos, earum
          totam voluptatum. Vero, excepturi! Nisi molestiae libero mollitia
          laboriosam, nulla temporibus tempore odio asperiores. Possimus
          distinctio perferendis iusto at perspiciatis, debitis commodi sint
          magnam optio ipsa sapiente error atque voluptatibus vel earum. Dolor
          dicta accusantium eius numquam, voluptatibus aliquam placeat
          laudantium eum ipsam aut ut enim praesentium eaque ab nam autem omnis
          mollitia minus illum cum iure rerum tempore officia. Sunt, possimus?
        </p>
      </Container>
      <Row className="mx-auto mt-4">
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemCard image={cardImage} theme={theme} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemCard image={cardImage} theme={theme} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemCard image={cardImage} theme={theme} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemCard image={cardImage} theme={theme} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemCard image={cardImage} theme={theme} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemCard image={cardImage} theme={theme} />
        </Col>
      </Row>
      <Container>
        <Row className="mt-5">
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            xs={{ span: 6, offset: 3 }}
            md={{ span: 4, offset: 4 }}
            lg={{ span: 4, offset: 4 }}
          >
            <div className="d-grid gap-2 mb-5">
              <Link to="/additem">
                <Button type="submit" size="lg">
                  <strong>{t("addItemButton")}</strong>
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
