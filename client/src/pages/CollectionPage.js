import React from "react";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import ItemManage from "../components/ItemManage";

export default function CollectionPage() {
  const { t } = useTranslation();
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const pageTheme =
    theme === "light" ? "bg-light text-dark" : "bg-dark text-white";
  const tableTextColor =
    theme === "light" ? "light text-center" : "dark text-center";

  const clickEdit = () => {
    console.log("edit");
  };
  const clickDelete = () => {
    console.log("delete");
  };

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

      <Table
        striped
        bordered
        hover
        variant={tableTextColor}
        style={{ width: "98%", margin: "2rem auto" }}
      >
        <thead>
          <tr>
            <th style={{ width: "20%", textAlign: "center" }}>{t("image")}</th>
            <th style={{ width: "50%", textAlign: "center" }}>
              {t("itemIndexTitle")}
            </th>
            <th style={{ textAlign: "center" }}>{t("tableManage")}</th>
          </tr>
        </thead>
        <tbody className={tableTextColor}>
          <tr>
            <td className="align-middle">
              <img
                src="https://m.media-amazon.com/images/I/51MR3422P6L.jpg"
                alt="item"
                style={{ maxHeight: "100px" }}
              />
            </td>
            <td className="align-middle">Test item</td>
            <td className="text-center align-middle">
              <ItemManage edit={clickEdit} delete={clickDelete} />
            </td>
          </tr>
        </tbody>
      </Table>
      <Container>
        <Row className="mt-5">
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            xs={{ span: 8, offset: 2 }}
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
