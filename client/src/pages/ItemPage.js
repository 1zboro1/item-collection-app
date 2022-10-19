import React from "react";
import Header from "../components/Header";
import useLocalStorage from "use-local-storage";
import { Figure, Row, Col, Container } from "react-bootstrap";
import cardImage from "../imgs/strategia_grande.jpg";

export default function ItemPage() {
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
        Item Name
      </h1>
      <Container>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 6, offset: 3 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Figure>
              <Figure.Image src={cardImage} style={{ maxHeight: "400px" }} />
            </Figure>
          </Col>
        </Row>

        <Row>
          <Col xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 3 }}>
            <p style={{ textAlign: "justify", marginTop: "20px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              praesentium soluta fuga illo dolorum excepturi corporis esse
              impedit magnam hic sequi consectetur amet commodi quisquam, vitae
              quos, earum totam voluptatum. Vero, excepturi! Nisi molestiae
              libero mollitia laboriosam, nulla temporibus tempore odio
              asperiores. Possimus distinctio perferendis iusto at perspiciatis,
              debitis commodi sint magnam optio ipsa sapiente error atque
              voluptatibus vel earum. Dolor dicta accusantium eius numquam,
              voluptatibus aliquam placeat laudantium eum ipsam aut ut enim
              praesentium eaque ab nam autem omnis mollitia minus illum cum iure
              rerum tempore officia. Sunt, possimus?
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 3 }}>
            <h6 className="mb-3">Tags:</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
