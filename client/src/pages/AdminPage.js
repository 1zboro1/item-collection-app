import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import Header from "../components/Header";
import { Table } from "react-bootstrap";
import AdminPageManage from "../components/AdminPageManage";

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
  let [blocked, setBlocked] = useState(false);
  let [admin, setAdmin] = useState(false);

  const clickOverview = () => {
    console.log("overview");
  };
  const clickManageBlock = () => {
    if (blocked === false) {
      setBlocked(true);
      console.log("block");
    } else {
      setBlocked(false);
      console.log("unblocked");
    }
  };
  const clickDelete = () => {
    console.log("delete");
  };
  const clickManagePermission = () => {
    if (admin === false) {
      setAdmin(true);
      console.log("admin");
    } else {
      setAdmin(false);
      console.log("nonAdmin");
    }
  };
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
          <tr>
            <td className="align-middle">Adams</td>
            <td className="align-middle">Otto</td>
            <td className="text-center align-middle">
              <AdminPageManage
                overview={clickOverview}
                block={clickManageBlock}
                delete={clickDelete}
                permission={clickManagePermission}
                admin={admin}
                blocked={blocked}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
