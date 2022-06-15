import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import logoTextSmall from "../img/logo-small-gradient-filled-text.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/abcrypt/" exact="true">
          <img src={logoTextSmall} alt="abcrypt logo" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/abcrypt/" exact="true" title="encrypt">
              encrypt
            </NavLink>
          </li>
          <li>
            <NavLink to="/abcrypt/about" title="about">
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="/abcrypt/security" title="security">
              security
            </NavLink>
          </li>
          <li>
            <NavLink to="/abcrypt/contact" title="contact">
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
