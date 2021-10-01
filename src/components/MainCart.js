import React from "react";
import PropTypes from "prop-types";
import CartCard from "./CartCard";
import styles from "../css/mainCart.module.css";

/**
 * @module MainCart
 */

/**
 * MainCart component
 * @param {Object} param0 - Props
 * @param {Array<Object>} param0.cart - Cart
 * @param {Function} param0.handleChange - Remove item from cart Function
 * @return {JSX}
 */
const MainCart = ({ cart, handleChange }) => {
  const total = () => {
    const sum = cart.reduce(
      (previous, current) => previous + current.price * current.value,
      0
    );

    return (
      <div className={styles.card}>
        <p>Total amount: ${sum}</p>
        <button type="button">Checkout</button>
      </div>
    );
  };

  return (
    <main className={styles.grid}>
      {cart.map((product) => (
        <CartCard
          src={product.img}
          caption={product.name}
          price={product.price}
          key={product.key}
          value={product.value}
          handleChange={handleChange}
        />
      ))}
      {cart.length === 0 ? (
        <div className={styles.empty}>No Item has been added to the cart</div>
      ) : (
        total()
      )}
    </main>
  );
};

MainCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MainCart;
