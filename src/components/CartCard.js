import React from "react";
import PropTypes from "prop-types";
import styles from "../css/cartCard.module.css";

/**
 * @module CartCard
 */

/**
 * CartCard component
 * @param {Obj} param0 - Props
 * @param {String} param0.src - Image
 * @param {String} param0.caption - Figure caption
 * @param {Number} param0.value - Quantity
 * @param {Price} param0.price - Price
 * @param {Function} param0.handleChange - Remove item from cart Function
 * @return {JSX}
 */
const CartCard = ({ src, caption, value, price, handleChange }) => (
  <div className={styles.card} id={caption}>
    <figure>
      <img src={src} alt="" className={styles.img} />
      <figcaption>{caption}</figcaption>
    </figure>
    <div className={styles.input}>
      <p>Quantity: {value}</p>
      <p>Price: ${price}</p>
      <button type="button" data-key={caption} onClick={handleChange}>
        Remove from cart
      </button>
    </div>
  </div>
);

CartCard.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CartCard;
