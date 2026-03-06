import React from "react";
import "./ImageStyles.css";
import logo from "../assets/logo.png";
import olenaPhoto from "../assets/olena.jpg";

function Images() {
  return (
    <>
      <img src={olenaPhoto} alt="Олена Бойченко" className="profile-image" />
      <img src={logo} alt="Логотип" className="logo" />
    </>
  );
}

export default Images;

