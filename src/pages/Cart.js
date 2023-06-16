import React from "react";
import { Context } from "../components/context";
import CartItem from "../components/CartItem";
import { Navigate } from "react-router-dom";

function Cart() {
  const [buttonText, SetButtonText] = React.useState("Place Order");
  const [ordered, setOrdered] = React.useState(false);
  const { cartItems, emptyCart } = React.useContext(Context);

  const totalCost = 5.99 * cartItems.length;
  //this gives amount with currency
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} itemDetails={item} />
  ));

  const cartButton = cartItems.length > 0 && (
    <button onClick={() => placeOrder()}>{buttonText}</button>
  );

  function placeOrder() {
    SetButtonText("Odering...");
    setTimeout(() => {
      SetButtonText("Place Order");
      emptyCart();
      setOrdered(true);
    }, 3000);
  }
  return (
    <main className="cart-page">
      {ordered && <Navigate to="/photos" replace={true} />}
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">{cartButton}</div>
    </main>
  );
}

export default Cart;
