import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import Header from "../components/Header";
import { Table } from "react-bootstrap";
import AdminPageManage from "../components/AdminPageManage";
import axios from "axios";

export default function AdminPage() {
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
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // const url = `http://localhost:5000/api/getUsers`;
    const url = `https://item-collection-app-bz.herokuapp.com/api/getUsers`;
    axios.get(url).then((response) => {
      setListOfUsers(response.data);
    });
  });

  return (
    <div className={pageTheme} style={{ height: "100vh" }}>
      <Header theme={theme} click={switchTheme} />
      <h1
        className="text-center"
        style={{ fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}
      >
        {t("administrationHeader")}
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
            <th style={{ width: "25%", textAlign: "center" }}>
              {t("username")}
            </th>
            <th style={{ width: "35%", textAlign: "center" }}>E-mail</th>
            <th style={{ textAlign: "center" }}>{t("tableManage")}</th>
          </tr>
        </thead>
        <tbody className={tableTextColor}>
          {listOfUsers.map((user) => {
            return (
              <tr key={user._id}>
                <td className="align-middle">{user.username}</td>
                <td className="align-middle">{user.email}</td>
                <td className="text-center align-middle">
                  <AdminPageManage
                    userID={user._id}
                    admin={user.admin}
                    blocked={user.blocked}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
