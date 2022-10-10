import React from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllphotos] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  //get and save the data to state
  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllphotos(data));
  }, []);

  function addToCart(pictureObj) {
    setCartItems((prevItem) => [...prevItem, pictureObj]);
  }

  //remove cart Item by pictureId
  //creates a new array filled with carts that has id not equals
  function removeCartItem(pictureId) {
    const leftCart = cartItems.filter((item) => item.id !== pictureId);
    setCartItems(leftCart);
  }
  function emptyCart() {
    setCartItems([]);
  }

  function toggleIsfavorite(pictureId) {
    const updatedArr = allPhotos.map((prevPhoto) => {
      if (prevPhoto.id === pictureId) {
        return { ...prevPhoto, isFavorite: !prevPhoto.isFavorite };
      }
      return prevPhoto;
    });

    setAllphotos(updatedArr);
  }

  return (
    <Context.Provider
      value={{
        emptyCart,
        removeCartItem,
        cartItems,
        addToCart,
        toggleIsfavorite,
        allPhotos: allPhotos,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
