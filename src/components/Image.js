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
      className={`ri-heart-${img.isFavorite ? "fill" : "line"} favorite px-6`}
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
          className="ri-shopping-cart-fill cart px-6"
        ></i>
      );
    } else if (hovered && !inCart) {
      return (
        <i
          pid={img.id}
          onClick={() => addToCart(img)}
          className="ri-add-circle-line cart px-6"
        ></i>
      );
    }
  }

  return (
    // <div className={`columns-4 image-container`} ref={ref}>
    <div className={`mt-8 relative w-full img-card`} ref={ref}>
      <div className="rounded-b-xl card-icons transition ease-in-out absolute bottom-0 flex justify-between w-full h-2 py-6">
        {heartIcon}
        {cartIcon()}
      </div>
      {/* {inCartIcon} */}
      {/* <img src={img.url} alt={`printivo${img.id}`} className="image-grid" /> */}
      <img
        src={img.url}
        alt={`printivo${img.id}`}
        className={`${className} rounded-lg`}
      />
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
