import React, { createContext, useContext, useState } from "react";

// Creating the context
const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity;
  };

  const addToCartHandler = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) === null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id) => {
    setCartItems((currItems) => {
      const foundItem = currItems.find((item) => item.id === id);
      if (!foundItem) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeCartItem = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        addToCartHandler,
        removeItem,
        removeCartItem,
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
