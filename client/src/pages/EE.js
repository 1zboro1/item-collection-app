import React from "react";
import Header from "../components/Header";
import useLocalStorage from "use-local-storage";
import { useTranslation } from "react-i18next";
import { Figure, Row, Col, Container } from "react-bootstrap";

export default function EE() {
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
        style={{
          fontSize: "3rem",
          textAlign: "center",
          marginTop: "3rem",
          marginBottom: "1.5rem",
        }}
      >
        Julitka
      </h1>
      <Container>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 6, offset: 3 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Figure>
              <Figure.Image src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/311926933_1483319565464204_5655898759058583758_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=r6EsO2yQCwEAX_Qw0YC&_nc_ht=scontent-waw1-1.xx&oh=03_AdSJ8GdBMlr2cRxoRIKVf6L6ZtVwer7Ul87djebm4SzeSA&oe=63753057" style={{ maxHeight: "400px" }} />
            </Figure>
          </Col>
        </Row>

        <Row>
          <Col xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 3 }}>
            <p style={{ textAlign: "justify", marginTop: "20px" }}>
              Mały nygus, co za dużo gada. Po prostu nie przestaje.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 3 }}>
            <h6 className="mb-3">{t("tags")}wredne</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
