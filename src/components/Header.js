import React from "react";
import { Link } from "react-router-dom";
import { Context } from "./context";
function Header() {
  const { cartItems } = React.useContext(Context);
  const cartStatus = cartItems.length > 0 ? "fill" : "line";
  return (
    <header>
      <Link to="/">
        <h2>Printivo</h2>
      </Link>
      <Link to="/Cart">
        <i className={`ri-shopping-cart-${cartStatus} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
