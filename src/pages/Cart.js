import React from "react";
import { Context } from "../components/context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, SetButtonText] = React.useState("Place Order");
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
    }, 3000);
  }
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">{cartButton}</div>
    </main>
  );
}

export default Cart;
