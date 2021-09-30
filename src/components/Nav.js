import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import navStyles from "../css/nav.module.css";

/**
 * @module Nav
 */

/**
 * Navigation component
 * @param {Object} param0 -Props
 * @param {Number} param0.length - Cart length
 * @return {JSX}
 */
const Nav = ({ length }) => (
  <nav className={navStyles.nav}>
    <div>
      <h1 className={navStyles.firstHeader}>Generic Online Store</h1>
    </div>
    <div className={navStyles.icon}>
      <NavLink
        exact
        to="/"
        activeClassName={navStyles.active}
        className={navStyles.inactive}
      >
        <FontAwesomeIcon icon="home" />
      </NavLink>
      <NavLink
        to="/shop"
        activeClassName={navStyles.active}
        className={navStyles.inactive}
      >
        <FontAwesomeIcon icon="shopping-basket" />
      </NavLink>
      <NavLink
        to="/cart"
        activeClassName={navStyles.active}
        className={navStyles.inactive}
      >
        <div className={navStyles.cartDiv}>
          <FontAwesomeIcon icon="shopping-cart" />
          <div className={navStyles.counter}>{length}</div>
        </div>
      </NavLink>
    </div>
  </nav>
);

Nav.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Nav;
