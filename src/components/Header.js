import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import logoTextSmall from "../img/logo-small-gradient-filled-text.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src={logoTextSmall} alt="abcrypt logo" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact="true" title="encrypt">
              encrypt
            </NavLink>
            <span className="navigation-underline"></span>
          </li>
          <li>
            <NavLink to="/about" title="about">
              about
            </NavLink>
            <span className="navigation-underline"></span>
          </li>
          <li>
            <NavLink to="/security" title="security">
              security
            </NavLink>
            <span className="navigation-underline"></span>
          </li>
          <li>
            <NavLink to="/contact" title="contact">
              contact
            </NavLink>
            <span className="navigation-underline"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
