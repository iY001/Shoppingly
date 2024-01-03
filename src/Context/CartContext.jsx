import React, { createContext, useContext, useState } from "react";

// Creating the context
const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity;
  };

  const addToCartHandler = (id) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      setCartItems([...cartItems, { id, quantity: 1 }]);
    } else {
      setCartItems((currItems) =>
        currItems.map((item, index) => {
          if (index === itemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    }
  };


  const removeItem = (id) => {
    setCartItems((currItems) => {
      const foundItem = currItems.find((item) => item.id === id);
      if (!foundItem) {
        // If the item isn't found, return the current items as is
        return currItems;
      } else {
        // If the item is found and its quantity is more than 1, decrease the quantity
        if (foundItem.quantity > 1) {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        } else {
          // If the item's quantity is 1, remove the item from the cart
          return currItems.filter((item) => item.id !== id);
        }
      }
    });
  };


  const removeCartItem = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const ModalHandler = () => {
    setShowModal(!showModal)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        addToCartHandler,
        removeItem,
        removeCartItem,
        cartQuantity,
        ModalHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useShoppingCart = () => {
  return useContext(CartContext);
};
