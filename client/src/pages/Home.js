import React from "react";
import Header from "../components/Header";
import useLocalStorage from "use-local-storage";
import { Col, Row } from "react-bootstrap";
import ItemIndex from "../components/ItemIndex";
import CollectionIndex from "../components/CollectionIndex";
import cardImage from "../imgs/strategia_grande.jpg";

export default function Home() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const pageTheme =
    theme === "light" ? "bg-light text-dark" : "bg-dark text-white";

  return (
    <div className={pageTheme} style={{ height: "100vh" }}>
      <Header theme={theme} click={switchTheme} />
      <h2
        className="text-center"
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        Recent items
      </h2>
      <Row className="mx-auto mt-4">
        <Col
          xxl={{ span: 2, offset: 1 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex image={cardImage} theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex image={cardImage} theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex image={cardImage} theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex image={cardImage} theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex image={cardImage} theme={theme} />
        </Col>
      </Row>
      <h2
        className="text-center"
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        Biggest collections
      </h2>
      <Row className="mx-auto mt-4">
        <Col
          xxl={{ span: 2, offset: 1 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex image={cardImage} theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex image={cardImage} theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex image={cardImage} theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex image={cardImage} theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex image={cardImage} theme={theme} />
        </Col>
      </Row>
    </div>
  );
}
