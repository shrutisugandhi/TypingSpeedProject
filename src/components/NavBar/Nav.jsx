import React from "react";
import logo from "./../../../src/assets/logo.png";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav-container">
      <img src={logo} alt="logo" className="nav-logo"></img>
      <p className="nav-text">Typing Speed Checker</p>
    </div>
  );
};

export default Nav;
