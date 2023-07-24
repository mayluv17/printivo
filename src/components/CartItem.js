import React from "react";
import { Context } from "../components/context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function CartItem({ itemDetails }) {
  const [hovered, ref] = useHover();
  const { removeCartItem } = React.useContext(Context);

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${hovered ? "fill" : "line"}`}
        onClick={() => removeCartItem(itemDetails.id)}
        ref={ref}
      ></i>
      <img alt={itemDetails.id} src={itemDetails.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}
CartItem.proptype = {
  itemDetailsitem: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
