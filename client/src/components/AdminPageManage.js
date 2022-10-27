import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Manage(props) {
  const { t } = useTranslation();
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
        window.location.reload();
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
        window.location.reload();
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
        window.location.reload();
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
        window.location.reload();
      });
  };
  const clickDelete = (e) => {
    e.preventDefault();
    // const url = `http://localhost:5000/api/deleteUser`;
    const url = `https://item-collection-app-bz.herokuapp.com/api/deleteUser`;
    axios
      .post(url, {
        _id: props.userID,
      })
      .then((response) => {
        alert("User deleted");
        window.location.reload();
      });
  };
  const clickOverview = (e) => {
    e.preventDefault();
    console.log("Overview");
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
