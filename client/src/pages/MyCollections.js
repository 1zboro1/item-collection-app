import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Header from "../components/Header";
import { Container, Row, Col, Button } from "react-bootstrap";
import CollectionCard from "../components/CollectionCard";
import cardImage from "../imgs/strategia_grande.jpg";

export default function MyCollections() {
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
        My collections
      </h1>
      <Row className="mx-auto mt-5">
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionCard image={cardImage} theme={theme} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionCard image={cardImage} theme={theme} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionCard image={cardImage} theme={theme} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionCard image={cardImage} theme={theme} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionCard image={cardImage} theme={theme} />
        </Col>
        <Col
          lg={{ span: 4, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionCard image={cardImage} theme={theme} />
        </Col>
      </Row>
      <Container>
        <Row className="mt-5">
          <Col
            md={{ span: 4, offset: 4 }}
            lg={{ span: 4, offset: 4 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="d-grid gap-2 mb-5 ">
              <Link to="/addcollection">
                <Button type="submit" size="lg">
                  <strong>ADD COLLECTION</strong>
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
