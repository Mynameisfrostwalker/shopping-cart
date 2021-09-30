import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/mainHome.module.css";

/**
 * @module MainHome
 */

/**
 * MainHome Component
 * @return {JSX}
 */
const MainHome = () => (
  <main className={styles.main}>
    <div className={styles.center}>
      <h2>Online store</h2>
      <Link to="/shop">
        <button type="button" className={styles.button}>
          Shop
        </button>
      </Link>
    </div>
  </main>
);

export default MainHome;
