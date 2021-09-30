import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import MainHome from "./MainHome";
import Footer from "./Footer";

/**
 * @module Home
 */

/**
 * Home component
 * @param {Object} param0 -Props
 * @param {Number} param0.length - Cart length
 * @return {JSX}
 */
const Home = ({ length }) => (
  <div>
    <Nav length={length} />
    <MainHome />
    <Footer />
  </div>
);

Home.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Home;
