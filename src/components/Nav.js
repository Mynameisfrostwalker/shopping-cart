import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import navStyles from "../css/nav.module.css";

/**
 * @module Nav
 */

/**
 * Navigation component
 * @return {JSX}
 */
const Nav = () => (
  <nav className={navStyles.nav}>
    <div>
      <h1 className={navStyles.firstHeader}>Generic Online Store</h1>
    </div>
    <div className={navStyles.icon}>
      <NavLink exact to="/" activeClassName={navStyles.active}>
        <FontAwesomeIcon icon="home" />
      </NavLink>
      <NavLink to="/shop" activeClassName={navStyles.active}>
        <FontAwesomeIcon icon="shopping-basket" />
      </NavLink>
      <FontAwesomeIcon icon="shopping-cart" />
    </div>
  </nav>
);

export default Nav;
