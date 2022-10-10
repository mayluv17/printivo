import React from "react";
import { Context } from "../components/context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  const { removeCartItem, cartItems, toggleIsfavorite, addToCart } =
    React.useContext(Context);
  const [hovered, ref] = useHover();
  const heartIcon = hovered && (
    <i
      onClick={() => toggleIsfavorite(img.id)}
      className={`ri-heart-${img.isFavorite ? "fill" : "line"} favorite`}
    ></i>
  );
  function cartIcon() {
    //return boolen if or not item is present in cart
    const inCart = cartItems.some((item) => item.id === img.id);
    //console.log(inCart);
    if (inCart) {
      return (
        <i
          onClick={() => removeCartItem(img.id)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (hovered && !inCart) {
      return (
        <i
          pid={img.id}
          onClick={() => addToCart(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      {heartIcon}
      {cartIcon()}
      {/* {inCartIcon} */}
      <img src={img.url} alt={`printivo${img.id}`} className="image-grid" />
    </div>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.exact({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};
export default Image;
