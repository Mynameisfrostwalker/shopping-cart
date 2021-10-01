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
          obj.value = parseInt(e.target.value, 10);
        }
        return obj;
      });

      setProducts(newArr);
    }
  };

  const handleAdd = (e) => {
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

  const handleRemove = (e) => {
    const data = e.target.getAttribute("data-key");
    const newCart = [...cart];
    const newArr = products.map((product) => {
      const obj = { ...product };
      if (obj.name === data) {
        obj.added = false;
      }
      return obj;
    });

    for (let i = 0; i < newCart.length; i += 1) {
      if (newCart[i].name === data) {
        newCart.splice(i, 1);
      }
    }

    setCart(newCart);

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
            handleClick={handleAdd}
            length={cart.length}
          />
        </Route>
        <Route exact path="/cart">
          <Cart length={cart.length} cart={cart} handleChange={handleRemove} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
