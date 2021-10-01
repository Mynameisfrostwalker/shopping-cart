import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import MainCart from "./MainCart";
import Footer from "./Footer";

/**
 * @module Cart
 */

/**
 * Cart component
 * @param {Object} param0 -props
 * @param {Number} param0.length - Cart Length
 * @param {Array<Object>} param0.cart - Cart
 * @param {Function} param0.handleChange - Remove item from cart Function
 * @return {JSX}
 */
const Cart = ({ length, cart, handleChange }) => (
  <div>
    <Nav length={length} />
    <MainCart cart={cart} handleChange={handleChange} />
    <Footer />
  </div>
);

Cart.propTypes = {
  length: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Cart;
