import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logoPlaceholder from "../assets/logo-Placeholder.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <button className="hamburger-button">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <img className="logo-image" src={logoPlaceholder} alt="Logo Placeholding Image" />
    </div>
  );
};

export default Navbar;
