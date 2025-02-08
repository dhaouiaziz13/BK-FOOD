import React from "react";
import logo from "../assets/LOGO.svg";
import Button from "./Button";
import "../css/navbar.css";
export default function Navbar({ buttonText, buttonUrl }) {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="bk-food-logo" />
      <Button text={buttonText} url={buttonUrl} />
    </div>
  );
}
