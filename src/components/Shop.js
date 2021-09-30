import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Footer from "./Footer";
import MainShop from "./MainShop";

/**
 * @module Shop
 */

/**
 * Shop Component
 * @param {Object} param0 - props
 * @param {Array<Objects>} param0.products - Array of products
 * @param {Function} param0.handleChange - Handle input on change
 * @param {Function} param0.handleClick - Handle button click
 * @param {Number} param0.length - Length of cart
 * @return {JSX}
 */
const Shop = ({ products, handleChange, handleClick, length }) => (
  <div>
    <Nav length={length} />
    <MainShop
      products={products}
      handleChange={handleChange}
      handleClick={handleClick}
    />
    <Footer />
  </div>
);

Shop.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default Shop;
