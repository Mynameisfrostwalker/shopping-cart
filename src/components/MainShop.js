import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import styles from "../css/mainShop.module.css";

/**
 * @module MainShop
 */

/**
 * MainShop Component
 * @param {Object} param0 - props
 * @param {Array<Objects>} param0.products - Array of products
 * @param {Function} param0.handleChange - Handle input on change
 * @param {Function} param0.handleClick - Handle button click
 * @return {JSX}
 */
const MainShop = ({ products, handleChange, handleClick }) => (
  <main className={styles.grid}>
    {products.map((product) => (
      <Card
        src={product.img}
        caption={product.name}
        price={product.price}
        key={product.key}
        value={product.value}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    ))}
  </main>
);

MainShop.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MainShop;
