import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";

export default function PageNotFound() {
  return (
    <>
      <Header />
      <h1 className="text-center" style={{marginTop: "150px"}}>Ups... page not found</h1>
    </>
  );
}
