import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import Header from "../components/Header";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import axios from "axios";
import CollectionManage from "../components/CollectionManage";

export default function MyCollections() {
  const { t } = useTranslation();
  const [listOfCollections, setListOfCollections] = useState([]);
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const tableTextColor =
    theme === "light" ? "light text-center" : "dark text-center";
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const pageTheme =
    theme === "light" ? "bg-light text-dark" : "bg-dark text-white";

  useEffect(() => {
    const url = "http://localhost:5000/api/getCollections";
    // const url = `https://item-collection-app-bz.herokuapp.com/api/getCollections`;
    axios
      .get(url, { email: localStorage.getItem("email") })
      .then((response) => {
        setListOfCollections(response.data);
      });
  });
  return (
    <div className={pageTheme} style={{ minHeight: "100vh" }}>
      <Header theme={theme} click={switchTheme} />
      <h1
        className="text-center"
        style={{ fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}
      >
        {t("myCollHeader")}
      </h1>
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
              {t("colIndexName")}
            </th>
            <th style={{ textAlign: "center" }}>{t("tableManage")}</th>
          </tr>
        </thead>
        <tbody className={tableTextColor}>
          {/* {console.log(localStorage.getItem("email"))} */}
          {/* {console.log(listOfCollections)} */}
          {/* {listOfCollections.map((collection) => {
            return (
              <tr key={collection._id}>
                {console.log(listOfCollections)}
                <td className="align-middle">{collection.coll_image}</td>
                <td className="align-middle">{collection.coll_name}</td>
                <td className="align-middle">{collection.type}</td>
                <td className="text-center align-middle"></td>
              </tr>
            );
          })} */}
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
              <CollectionManage />
            </td>
          </tr>
        </tbody>
      </Table>
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
                  <strong>{t("addCollButton")}</strong>
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
