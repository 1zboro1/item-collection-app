import React from "react";
import Header from "../components/Header";
import useLocalStorage from "use-local-storage";
import { useTranslation } from "react-i18next";
import { Figure, Row, Col, Container } from "react-bootstrap";

export default function ItemPage() {
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
        Item name
      </h1>
      <Container>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 6, offset: 3 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Figure>
              <Figure.Image
                src="https://m.media-amazon.com/images/I/51MR3422P6L.jpg"
                style={{ maxHeight: "400px" }}
              />
            </Figure>
          </Col>
        </Row>

        <Row>
          <Col xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 3 }}>
            <p style={{ textAlign: "justify", marginTop: "20px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              minus consequuntur qui porro quam error dolorem nesciunt
              voluptatibus blanditiis commodi magnam consectetur distinctio sint
              cumque voluptatem, voluptate, architecto officia sequi. Excepturi,
              voluptates vel perferendis explicabo labore, assumenda quisquam
              molestias doloremque tenetur quia illum magni? Veritatis delectus
              voluptatum numquam? Minus maiores unde impedit veritatis nostrum
              praesentium labore totam eos culpa quaerat!
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 3 }}>
            <h6 className="mb-3">{t("tags")}</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
