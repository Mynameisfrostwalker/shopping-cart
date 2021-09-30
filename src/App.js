import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import shirts from "./scripts/products";

/**
 * @module App
 */

/**
 * App component
 * @return {JSX}
 */
const App = () => {
  const [products, setProducts] = useState(shirts);

  const [cart, setCart] = useState([]);

  const handleChange = (e) => {
    if (!Number.isNaN(parseInt(e.target.value, 10))) {
      const data = e.target.getAttribute("data-key");
      const newArr = products.map((product) => {
        const obj = { ...product };
        if (obj.name === data) {
          obj.value = e.target.value;
        }
        return obj;
      });

      setProducts(newArr);
    }
  };

  const handleClick = (e) => {
    const data = e.target.getAttribute("data-key");
    const newArr = products.map((product) => {
      const obj = { ...product };
      if (obj.name === data && obj.added === false) {
        obj.added = true;
        setCart(cart.concat(obj));
      }
      return obj;
    });

    setProducts(newArr);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home length={cart.length} />
        </Route>
        <Route exact path="/shop">
          <Shop
            products={products}
            handleChange={handleChange}
            handleClick={handleClick}
            length={cart.length}
          />
        </Route>
        <Route exact path="/cart">
          <Cart length={cart.length} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
