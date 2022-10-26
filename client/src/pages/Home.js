import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import useLocalStorage from "use-local-storage";
import { Col, Row } from "react-bootstrap";
import ItemIndex from "../components/ItemIndex";
import CollectionIndex from "../components/CollectionIndex";

export default function Home() {
  const { t } = useTranslation();
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const pageTheme =
    theme === "light" ? "bg-light text-dark pb-4" : "bg-dark text-white pb-4";

  return (
    <div className={pageTheme} style={{ minHeight: "100vh" }}>
      <Header theme={theme} click={switchTheme} />
      <h2
        className="text-center"
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        {t("recentItems")}
      </h2>
      <Row className="mx-auto mt-4">
        <Col
          xxl={{ span: 2, offset: 1 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ItemIndex theme={theme} />
        </Col>
      </Row>
      <h2
        className="text-center"
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        {t("biggestColl")}
      </h2>
      <Row className="mx-auto mt-4">
        <Col
          xxl={{ span: 2, offset: 1 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex theme={theme} />
        </Col>
        <Col
          xxl={{ span: 2, offset: 0 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CollectionIndex theme={theme} />
        </Col>
      </Row>
    </div>
  );
}
