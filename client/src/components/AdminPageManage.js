import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Manage(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const adminNavigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("appToken");
    localStorage.removeItem("admin");
    localStorage.removeItem("email");
    localStorage.removeItem("adminEditEmail");
    navigate("/");
  };
  const clickBlock = (e) => {
    e.preventDefault();
    // const url = `http://localhost:5000/api/blockUser`;
    const url = `https://item-collection-app-bz.herokuapp.com/api/blockUser`;
    axios
      .post(url, {
        _id: props.userID,
      })
      .then((response) => {
        alert("User blocked");
        if (props.email === localStorage.getItem("email")) {
          handleLogout();
        }
      });
  };
  const clickUnblock = (e) => {
    e.preventDefault();
    // const url = `http://localhost:5000/api/unblockUser`;
    const url = `https://item-collection-app-bz.herokuapp.com/api/unblockUser`;
    axios
      .post(url, {
        _id: props.userID,
      })
      .then((response) => {
        alert("User unblocked");
      });
  };
  const clickGiveAdmin = (e) => {
    e.preventDefault();
    // const url = `http://localhost:5000/api/giveAdmin`;
    const url = `https://item-collection-app-bz.herokuapp.com/api/giveAdmin`;
    axios
      .post(url, {
        _id: props.userID,
      })
      .then((response) => {
        alert("You gave admin privileges to the user");
      });
  };
  const clickRevokeAdmin = (e) => {
    e.preventDefault();
    // const url = `http://localhost:5000/api/revokeAdmin`;
    const url = `https://item-collection-app-bz.herokuapp.com/api/revokeAdmin`;
    axios
      .post(url, {
        _id: props.userID,
      })
      .then((response) => {
        alert("You revoked admin privileges to the user");
        if (props.email === localStorage.getItem("email")) {
          handleLogout();
        }
      });
  };
  const clickDelete = (e) => {
    e.preventDefault();
    // const url1 = `http://localhost:5000/api/deleteUser`;
    const url = `https://item-collection-app-bz.herokuapp.com/api/deleteUser`;
    axios
      .post(url, {
        _id: props.userID,
      })
      .then((response) => {
        alert("User deleted");
        if (props.email === localStorage.getItem("email")) {
          handleLogout();
        }
      });
  };
  const clickOverview = (e) => {
    e.preventDefault();
    adminNavigate("/collectionAdminPrivilege", {
      state: {
        userEmail: props.email,
      },
    });
  };
  return (
    <>
      <Button variant="secondary" onClick={clickOverview} className="mb-1 mt-1">
        {t("tableOverview")}
      </Button>{" "}
      {props.blocked ? (
        <Button variant="success" onClick={clickUnblock} className="mb-1 mt-1">
          {t("tableUnblock")}
        </Button>
      ) : (
        <Button variant="warning" onClick={clickBlock} className="mb-1 mt-1">
          {t("tableBlock")}
        </Button>
      )}{" "}
      {props.admin ? (
        <Button variant="dark" onClick={clickRevokeAdmin} className="mb-1 mt-1">
          {t("tableRevokeAdmin")}
        </Button>
      ) : (
        <Button variant="info" onClick={clickGiveAdmin} className="mb-1 mt-1">
          {t("tableGiveAdmin")}
        </Button>
      )}{" "}
      <Button variant="danger" onClick={clickDelete} className="mb-1 mt-1">
        {t("tableDelete")}
      </Button>
    </>
  );
}
