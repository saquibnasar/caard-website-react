import React from "react";
import logo from "../assets/images/logo.png";

export default function Loader() {
  return (
    <>
      <section className="loading-section d-flex" id="loader">
        <img width="40" height="60" alt="loading" src={logo} />
        <div className="loading"></div>
      </section>
    </>
  );
}
