import React from "react";
import PropTypes from "prop-types";
import styles from "../css/card.module.css";

/**
 * @module Card
 */

/**
 * Card component
 * @param {Obj} param0 - Props
 * @param {String} param0.src - Image
 * @param {String} param0.caption - Figure caption
 * @param {Number} param0.price - Price of product
 * @param {Number} param0.value - Quantity
 * @param {Function} param0.handleChange - Handle input on change
 * @param {Function} param0.handleClick - Handle button click
 * @return {JSX}
 */
const Card = ({ src, caption, price, value, handleChange, handleClick }) => (
  <div className={styles.card} id={caption}>
    <figure>
      <img src={src} alt="" className={styles.img} />
      <figcaption>{caption}</figcaption>
    </figure>
    <div className={styles.input}>
      <p>${price}</p>
      <input
        type="number"
        min="0"
        value={value}
        data-key={caption}
        onChange={handleChange}
      />
      <button type="button" data-key={caption} onClick={handleClick}>
        Add to cart
      </button>
    </div>
  </div>
);

Card.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
